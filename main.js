right_x=0;
left_x=0;
differnce=0;

function setup()
{
canvas=createCanvas(500,300);
canvas.position(750,200);
viddeo=createCapture(VIDEO);
viddeo.size(500,300);
posenet=ml5.poseNet(viddeo,moldLode);
posenet.on('pose',gotPoses);
}


function moldLode()
{
console.log("posenet is initialized")
}

function gotPoses(results)
    {
leftwristX=results[0].pose_leftwrist.X

righttwristX=results[0].pose_rightwrist.X

    }

    function draw()
    {
background("");
Textsize(10);
FileList("");
Text('petar',50,400);

    }