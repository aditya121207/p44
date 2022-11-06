var house;
var man,manImg;
var knob;
var ghost;


function preload()
{
house = loadImage("hauntedhouse.png");
manImg = loadImage("man.png");
ghost = loadImage("ghost.jpg");
}

function setup()
{
createCanvas(1200,800);
man = createSprite(1100,700,50,50);
man.addImage(manImg);
man.scale = 0.1;

knob = createSprite(400,550,30,30);


}

function draw()
{
background(house);
if(keyDown(LEFT_ARROW))
{
man.x = man.x - 10;
}

if(keyDown(RIGHT_ARROW))
{
man.x = man.x + 10;
}

if(keyDown(UP_ARROW))
{
man.y = man.y - 10;
}

if(keyDown(DOWN_ARROW))
{
man.y = man.y + 10;
}

if(man.isTouching(knob))
{
knob.addImage(ghost)
}

drawSprites();
}