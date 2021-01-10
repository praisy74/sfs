var jerry4,jerry1,jerry3,jerry2,tom1,tom2,tom3,tom4;
var tom,jerry;
function preload() {
    //load the images here
    //jerry1=loadImage("jerryOne.png");
   // jerryThree=loadImage("jerryThree.png");
    //jerryTwo=loadImage("jerryTwo.png");
    //jerryFour=loadImage("jerryFour.png");
   // tom1=loadImage("tomOne.png");
    //tomThree=loadImage("tomThree.png");
    //tomTwo=loadImage("tomTwo.png");
    //tomFour=loadImage("tomFour.png");
    
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom=createSprite(200,200,40,40);
   // tom.addImage("ad",tom1);
    jerry=createSprite(300,150,10,10);
    //jerry.addImage("d",jerry1);


}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
