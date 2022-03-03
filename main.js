noseX = 0;
noseY = 0;

distance = 0;
rightWristX = 0;
leftWristX = 0;


function setup(){
    video = createCapture(VIDEO);
    video.size(500,700);
    video.position(100,0);
    
    canvas = createCanvas(500,450);
    canvas.position(700,120);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses)
}

function draw(){
    background("white");

    fill("#AED6F1");
    stroke("#5DADE2");

    square(noseX , noseY , distance)
}

function modelLoaded(){
    console.log("Model has been loaded");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);

        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;

        //wrist ke beech a distance
        distance = floor(leftWristX - rightWristX) ;

    }

}