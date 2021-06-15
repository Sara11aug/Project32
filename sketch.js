const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;
    //getBackgroundImg();
}

function draw(){
    // add condition to check if any background image is there to add
    if (backgroundImg)
        background(backgroundImg);

    Engine.update(engine);

    // write code to display time in correct format here
    fill("black");
    stroke(2);
    textSize(20);
    text("Time = "+ hour +":" +minute, 100,100);

}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    //change the data in JSON format
    var responseJSON = await response.json();
    // write code slice the datetime
    datetime = responseJSON.datetime;
    hour = datetime.slice(11,13);
    minute = datetime.slice(14,16);
    console.log(hour);
    // add conditions to change the background images from sunrise to sunset
    if (hour>=04 && hour<=06){
        bg = "sunrise1.png";
    } else if (hour>=06 && hour<=07){
        bg = "sunrise2.png";
    } else if(hour>=08 && hour<=10){
        bg = "sunrise3.png";
    } else if(hour>=11 && hour<=12){
        bg = "sunrise4.png";
    }else if(hour>=13 && hour<=15){
        bg = "sunrise5.png";
    }else if(hour==16){
        bg = "sunset7.png";
    }else if(hour==17){
        bg = "sunset8.png";
    }else if(hour>=18 && hour<=19){
        bg = "sunset10.png";
    }else if (hour==0 && hour<=03){
        bg = "sunset12.png";
    } else {
        bg = "sunset11.png";
    }
    //load the image in backgroundImg variable here
    backgroundImg = loadImage(bg);
}
