var bg_img, ethan_img;
var ethan;
function preload()
{
  bg_img = loadImage('background.jpg');
  ethan_img = loadImage( 'ethan.gif');
}

function setup() 
{
  createCanvas(windowWidth, windowHeight);
 ethan = createSprite(100, height-150);
  ethan.addImage(ethan_img);
 

 ethan.scale = 0.5
  
  
}

function draw() 
{
  background(bg_img);
 if (keyDown("A"))
 {
  ethan.x -= 10;
 }
  if (keyDown("D"))
  {
   ethan.x += 10;

 }
  drawSprites();

}