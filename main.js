size = 0;
left = 0;
right = 0;
function preload()
{

}
function setup()
{
    canvas = createCanvas(600, 550);
    canvas.position(700 , 310);
    cam = createCapture(VIDEO);
    cam.size(600, 600);
    cam.position(20, 240);
    posenet = ml5.poseNet(cam, modelLoaded);
    posenet.on('pose', gotResults);
}
function draw()
{
    background("black");
    textSize(size);
    fill("yellow");
    text("🍌 Banana", left, right)
}
function modelLoaded()
{
    console.log("model Loaded");
}
function gotResults(results)
{
    if(results.length > 0)
    {
        console.log(results); 
        left = results[0].pose.leftWrist.x;
        right = results[0].pose.rightWrist.x;
        size = floor(left - right);
    }
    
}