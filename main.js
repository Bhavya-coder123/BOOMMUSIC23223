m="";
m2="";

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    
}

function draw(){
    image(video,0,0,300,300);
}

function preload(){
m=loadSound("music.mp3");
m2=loadSound("music2.mp3");

}