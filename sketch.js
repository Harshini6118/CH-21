var fixedrect,movingrect;

function setup()
{
  canvas=createCanvas(800,800);

  fixedrect=createSprite(100,200,50,50);
  fixedrect.shapeColor="blue";
  fixedrect.debug=true;

  movingrect=createSprite(200,200,50,50);
  movingrect.shapeColor="blue";
  movingrect.debug=true;

   gameObject1=createSprite(300,200,50,50);
   gameObject1.shapeColor="red";
   gameObject2=createSprite(400,200,50,50);
   gameObject2.shapeColor="red";
   gameObject3=createSprite(500,200,50,50);
   gameObject3.shapeColor="red";
   gameObject4=createSprite(600,200,50,50);
   gameObject4.shapeColor="red";
}

function draw()
{
 background("gold");
 
 movingrect.x=mouseX;
 movingrect.y=mouseY;

 if(isTouching(movingrect,gameObject4))
 {
  gameObject4.shapeColor="green";
  movingrect.shapeColor="green";
 }
 else
 {
  gameObject4.shapeColor="blue";
  movingrect.shapeColor="blue";
 }

 drawSprites();


}


