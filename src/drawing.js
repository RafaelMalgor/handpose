// Points for fingers
const fingers = {
    t: [0, 1, 2, 3, 4],
    i: [0, 5, 6, 7, 8],
    m: [0, 9, 10, 11, 12],
    r: [0, 13, 14, 15, 16],
    p: [0, 17, 18, 19, 20],
};

export const drawHand = (predictions, context) => {

    if (predictions.length > 0) {

        predictions.forEach((prediction) => {

            const landmarks = prediction.landmarks;

            for (let j = 0; j < Object.keys(fingers).length; j++) {
                const finger = Object.keys(fingers)[j];
                for (let k = 0; k < fingers[finger].length - 1; k++) {
                    const firstJointIndex = fingers[finger][k];
                    const secondJoinIndex = fingers[finger][k + 1];

                    context.beginPath();
                    context.moveTo(landmarks[firstJointIndex][0],
                        landmarks[firstJointIndex][1]);

                    context.lineTo(landmarks[secondJoinIndex][0],
                        landmarks[secondJoinIndex][1]);

                    context.strokeStyle = "white";
                    context.lineWidth = 2;
                    context.stroke();
                }
            }

            for (let i = 0; i < landmarks.length; i++) {
                const x = landmarks[i][0];
                const y = landmarks[i][1];
                context.beginPath();
                context.arc(x, y, 5, 0, 3 * Math.PI);
                context.fillStyle = "green";
                context.fill();
            }
        });
    }
};

export const drawBox = (predictions, context) => {

    if (predictions.length > 0) {

        predictions.forEach((prediction) => {

            context.beginPath();
            context.rect(prediction.boundingBox.topLeft[0], prediction.boundingBox.topLeft[1], prediction.boundingBox.bottomRight[0] - prediction.boundingBox.topLeft[0],
                prediction.boundingBox.bottomRight[1] - prediction.boundingBox.topLeft[1]);
            context.strokeStyle = "blue";
            context.lineWidth = 2;
            context.stroke();
        });
    }
};

