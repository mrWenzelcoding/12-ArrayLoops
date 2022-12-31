//Declaring Variables
let y = [];
let speed = [];
let size = []
let counter;


function setup() {
  createCanvas(600, 600);
  
  counter = 0;
 
//Set intial speed of the snowflakes
  let i = 0;
  while(i<100){
    speed[i] = 3;
    y[i] = random(0,height)
    size[i] = random(5,10)
    i++;
  }
  
}

function draw() {
  background(0,30,100,100);
  
  let j = 0;
  while(j<100){
    ellipse(6*j ,y[j], size[j]);
    y[j] = y[j] + speed[j]*size[j]*.1;
   
    if(y[j] > height){
    y[j]=0;
      if(counter<height*2){
        counter++ 
      }

  }
    j++;
  }
   rect(0,height,width,-counter/10) 
}