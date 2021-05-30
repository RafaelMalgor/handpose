import logo from './logo.svg';
import './App.css';
import React, { useRef, useState } from 'react';
import * as tf from '@tensorflow/tfjs';
import * as handpose from '@tensorflow-models/handpose';
import Webcam from 'react-webcam';
import { drawHand } from './drawing';
import * as fp from 'fingerpose';
import { Gestures } from './gestures';

function App() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const [currentGesture, setCurrentGesture] = useState("unknown");
  const [modelLoaded, setModelLoaded] = useState(false);

  const gesturesEmojis = {
    "thumbs_up": "👍",
    "victory": "✌",
    "thumbs_down": "👎",
    "raised_hand": "✋",
    "metal_hand":"🤟",
    "horn_hand":"🤘",
    "unknown": "❓",
  };

  const executeHandpose = async () => {
    const net = await handpose.load();
    console.log('Handpose model correctly loaded');
    setModelLoaded(true);

    setInterval(() => {
      detectHand(net)
    }, 200);
  };

  const detectHand = async (net) => {
    if (typeof webcamRef.current !== "undefined" &&
      webcamRef.current != null &&
      webcamRef.current.video.readyState === 4) {
      const video = webcamRef.current.video;
      const videoWidth = video.videoWidth;
      const videoHeight = video.videoHeight;

      // Size element based on actual video size
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      // Size canvas accordingly so overlay drawings match
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      // Run model to get estimation
      const hand = await net.estimateHands(video);

      if (hand.length > 0) {
        const GE = new fp.GestureEstimator(
          Gestures
        );

        const gesture = await GE.estimate(hand[0].landmarks, 8);
        if (gesture.gestures !== undefined && gesture.gestures.length > 0) {
          const confidence = gesture.gestures.map((prediction) => prediction.confidence);
          const maxConfidenceIndex = confidence.indexOf(Math.max(...confidence));

          setCurrentGesture(gesture.gestures[maxConfidenceIndex].name);
          const ctx = canvasRef.current.getContext("2d");   
        }
      } else {
        setCurrentGesture("unknown");
      }

      drawHand(hand, ctx);
    }
  };

  executeHandpose();

  return (
    <div className="App" >
      <h1>Detect Hand Emoji</h1>
      {!modelLoaded &&
        <h2>Loading model...</h2>
      }
      <p>Instruction: try some hand gestures, like 👍 ✌ ✋ 🤟 👎</p>
      <div className="emoji">{gesturesEmojis[currentGesture]}</div>
      <header className="App-headesr">
        <Webcam ref={webcamRef} className="camera" />
        <canvas ref={canvasRef} className="camera" />
      </header>
    </div >
  );
}

export default App;
