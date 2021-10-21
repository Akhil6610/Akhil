function setup(){
    canvas=createCanvas(550,550);
    canvas.position(560,200)
    video=createCapture(VIDEO);
    video.size(550,550);
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPose);
}
function modelLoaded(){
    console.log('Posenet is initialized');
}

function draw(){
    background("#4dff00");
    document.getElementById("square_side").innerHTML="width and height of a square will be ="+difference+"px";
    fill('#F90093');
    stroke('#F90093');
    square(noseX,noseY,100);
}
function gotPose(){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.X;
        noseY=results[0].pose.nose.Y;
        console.log("noseX="+ noseX+"noseY="+noseY);
leftWristX=results[0].pose.leftWrist.x;
rightWristX=results[0].pose.rightWrist.x;
difference=floor(leftWristX-rightWristX);
console.log("leftWristX="+ leftWristX + "rightWristX" + rightWristX + "difference = " + difference);

    }
}
noseX=0;
noseY=0;
difference=0;
rightWristX=0;
leftWristX=0;
