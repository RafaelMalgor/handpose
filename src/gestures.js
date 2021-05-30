import * as fp from 'fingerpose';

const thumbsDownGesture = new fp.GestureDescription('thumbs_down');
thumbsDownGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 1.0);
thumbsDownGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.VerticalDown, 1.0);
thumbsDownGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalDownLeft, 0.5);
thumbsDownGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.DiagonalDownRight, 0.5);
thumbsDownGesture.addCurl(fp.Finger.Index, fp.FingerCurl.FullCurl, 1.0);
thumbsDownGesture.addDirection(fp.Finger.Index, fp.FingerDirection.HorizontalLeft, 1.0);
thumbsDownGesture.addDirection(fp.Finger.Index, fp.FingerDirection.HorizontalRight, 1.0);
thumbsDownGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.FullCurl, 1.0);
thumbsDownGesture.addDirection(fp.Finger.Middle, fp.FingerDirection.HorizontalLeft, 1.0);
thumbsDownGesture.addDirection(fp.Finger.Middle, fp.FingerDirection.HorizontalRight, 1.0);
thumbsDownGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1.0);
thumbsDownGesture.addDirection(fp.Finger.Ring, fp.FingerDirection.HorizontalLeft, 1.0);
thumbsDownGesture.addDirection(fp.Finger.Ring, fp.FingerDirection.HorizontalRight, 1.0);
thumbsDownGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.FullCurl, 1.0);
thumbsDownGesture.addDirection(fp.Finger.Pinky, fp.FingerDirection.HorizontalLeft, 1.0);
thumbsDownGesture.addDirection(fp.Finger.Pinky, fp.FingerDirection.HorizontalRight, 1.0);


const raisedHandGesture = new fp.GestureDescription('raised_hand');
raisedHandGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 1.0);
raisedHandGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.VerticalUp, 1.0);
raisedHandGesture.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1.0);
raisedHandGesture.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalUp, 1.0);
raisedHandGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.NoCurl, 1.0);
raisedHandGesture.addDirection(fp.Finger.Middle, fp.FingerDirection.VerticalUp, 1.0);
raisedHandGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.NoCurl, 1.0);
raisedHandGesture.addDirection(fp.Finger.Ring, fp.FingerDirection.VerticalUp, 1.0);
raisedHandGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.NoCurl, 1.0);
raisedHandGesture.addDirection(fp.Finger.Pinky, fp.FingerDirection.VerticalUp, 1.0);

const metalHandGesture = new fp.GestureDescription('metal_hand');
metalHandGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.NoCurl, 1.0);
metalHandGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.HorizontalLeft, 1.0);
metalHandGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.HorizontalRight, 1.0);
metalHandGesture.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1.0);
metalHandGesture.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalUp, 1.0);
metalHandGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.FullCurl, 1.0);
metalHandGesture.addDirection(fp.Finger.Middle, fp.FingerDirection.VerticalUp, 1.0);
metalHandGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1.0);
metalHandGesture.addDirection(fp.Finger.Ring, fp.FingerDirection.VerticalUp, 1.0);
metalHandGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.NoCurl, 1.0);
metalHandGesture.addDirection(fp.Finger.Pinky, fp.FingerDirection.VerticalUp, 1.0);

const hornHandGesture = new fp.GestureDescription('horn_hand');
hornHandGesture.addCurl(fp.Finger.Thumb, fp.FingerCurl.FullCurl, 5.0);
hornHandGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.HorizontalLeft, 1.0);
hornHandGesture.addDirection(fp.Finger.Thumb, fp.FingerDirection.HorizontalRight, 1.0);
hornHandGesture.addCurl(fp.Finger.Index, fp.FingerCurl.NoCurl, 1.0);
hornHandGesture.addDirection(fp.Finger.Index, fp.FingerDirection.VerticalUp, 1.0);
hornHandGesture.addCurl(fp.Finger.Middle, fp.FingerCurl.FullCurl, 1.0);
hornHandGesture.addCurl(fp.Finger.Ring, fp.FingerCurl.FullCurl, 1.0);
hornHandGesture.addCurl(fp.Finger.Pinky, fp.FingerCurl.NoCurl, 1.0);
hornHandGesture.addDirection(fp.Finger.Pinky, fp.FingerDirection.VerticalUp, 1.0);

export const Gestures = [
    fp.Gestures.VictoryGesture,
    fp.Gestures.ThumbsUpGesture,
    thumbsDownGesture,
    raisedHandGesture,
    metalHandGesture,
    hornHandGesture];