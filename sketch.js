var gameState="home"
var god,godImage
var man,manImage
var mcloud,mcloudImage
var gcloud,gcloudImage
 
function preload(){
  godImage=loadImage("images/god.png");
  manImage=loadImage("images/man.png");
  mcloudImage=loadImage("images/mcloud.png");
  gcloudImage=loadImage("images/gcloud.png");
}

function setup() {
  createCanvas(800,400);

  god=createSprite(700,100,50,50)
  god.addImage("god",godImage);
  god.scale=0.3
   
  man=createSprite(100,330,50,50)
  man.addImage("man",manImage);
  man.scale=0.1

  mcloud=createSprite(200,200,50,50)
  mcloud.addImage("mancloud",mcloudImage);
  mcloud.scale=0.1

  gcloud=createSprite(520,200,50,50);
  gcloud.addImage("gcloud",gcloudImage);
  gcloud.scale=0.1
}

function draw() {
  background(0); 
  
  //homescreen page
  if(gameState==="home"){
    god.visible=false
    man.visible=false
    gcloud.visible=false
    mcloud.visible=false
    
    textSize(30);
    fill("yellow");
    stroke("black");
    text("Welcome to <name>!!",200,200)
    text("God is there to help us! She wants to talk with you",100,230)
    text("Press Right Arrow to have a conversation with her",100,260)
  }
    
    //homescreen 1 code(visibility of god and man)
    if(keyDown(RIGHT_ARROW)){
      gameState="homescreen1"
    }

    if(gameState==="homescreen1"){
      god.visible=true;
      man.visible=true;
      gcloud.visible=false
      mcloud.visible=false
      textSize(30)
      text("Press LEFT ARROW to Continue",260,350);
    }
    
    if(keyDown(LEFT_ARROW)){
      gameState="conv1"
    }
    
    //Conversation1 (man taking to god)
    if(gameState==="conv1"){
      god.visible=true;
      man.visible=true;
      textSize(20)
      text("Hello God!! Please guide me so that I can obtain salvation",100,150)
      mcloud.visible=true;
      gcloud.visible=false;
      textSize(30)
      text("Press DOWN ARROW to Continue",260,350);
      
    }
    
    
    
    if(keyDown(DOWN_ARROW)){
      gameState="conv2"
    }
    
    //Conversation2 (god taking to man)
    if(gameState==="conv2"){
      god.visible=true;
      man.visible=true;
      textSize(20)
      text("",100,150)
      mcloud.visible=false;
      gcloud.visible=true;
      textSize(30)
      text("Press UP ARROW to Continue",260,350);
      
      }
      
      if(keyDown(UP_ARROW)){
        gameState="conv3"
      }
      
       //Conversation3 (man taking to god)
      if(gameState==="conv3"){
      god.visible=true;
      man.visible=true;
      textSize(20)
      text("",100,150)
      mcloud.visible=true;
      gcloud.visible=false;
      textSize(30)
      text("Press ENTER to start Task",260,350)
      
      }

      if(keyDown(ENTER)){
        gameState="level1"
      }

      if(gameState==="level1"){
      god.visible=false;
      man.visible=false;
      gcloud.visible=false;
      mcloud.visible=false;
      }
  


  drawSprites();
}