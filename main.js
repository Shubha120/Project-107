function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
  classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/IoA1y_tQw/model.json', modelReady);
}

function modelReady(){
  classifier.classify(gotResults);
}