const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;
var hour;


function preload() {
    getBackgroundImg();
   

}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    if(backgroundImg)
    background(backgroundImg);
    Engine.update(engine);
    noStroke();
    textSize(35)
    fill("white")
    

    if (hour>=12 ) {
        text("Time  " + hour%12+" PM ", width-300, 50)   
    }
    else if (hour == 0){
        text("Time   12 AM" ,width-300, 50 )
    }
    else  {
        text("Time  " + hour%12+" PM ", width-300, 50)   
    }


   

}

async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    hour = datetime.slice(11,13);
    console.log(hour);

    if(hour>=02 && hour<=04){
        bg = "sunrise1.png";
    }
    else if (hour>=04 && hour<=06){
        bg = "sunrise2.png";
    
    }
    else if (hour>=06 && hour<=08){
        bg = "sunrise3.png";
    
    }
    else if (hour>=08 && hour<=09){
        bg = "sunrise4.png";
    
    }
    else if (hour>=09 && hour<=11){
        bg = "sunrise5.png";
    
    }    else if (hour>=11 && hour<=13){
        bg = "sunrise6.png";
    
    }    else if (hour>=13 && hour<=15){
        bg = "sunset7.png";
    
    }    else if (hour>=15 && hour<=17){
        bg = "sunset8.png";
    
    }    else if (hour>=17 && hour<=20){
        bg = "sunset9.png";
    
    }    else if (hour>=20 && hour<=00){
        bg = "sunset10.png";
    
    }    else if (hour>=00 && hour<=02){
        bg = "sunset11.png";
    
    }    else {
        bg = "sunset12.png";
    
    } 

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);

}
