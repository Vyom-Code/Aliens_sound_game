//Link:https://teachablemachine.withgoogle.com/models/d3tgj93Ek/

function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassification('https://teachablemachine.withgoogle.com/models/d3tgj93Ek/model.json',modelReady);
}

function modelReady(){
classifier.classify(gotResults);
}