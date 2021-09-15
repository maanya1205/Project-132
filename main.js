img= "";
status= "";
object=[];
function setup(){
    canvas= createCanvas(380,380);
    canvas.center();
  objectDetector= ml5.objectDetector("CocoSsd",modelLoaded); 
  document.getElementById("status").innerHTML= "Status: Detecting Objects";
}

function modelLoaded(){
    console.log("Model is Loaded");
    status=true;
}

function gotResult(results,error){
if(error){
    console.log(error);
}
console.log(results);
object= results;
}

function draw(){
}