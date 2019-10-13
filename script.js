let door1=document.getElementById('door1');

let door2=document.getElementById('door2');

let door3=document.getElementById('door3');
let openDoor1;
let openDoor2;
let openDoor3;
let closedoorpath='https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg';
let beachdoorpath='https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg';
let botdoorpath='https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg';
let spacedoorpath='https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg';
const randomChoreDoorGenerator=()=>
{
const numcloseddoors=3;
const choreDoor=Math.floor(Math.random()*numcloseddoors);
console.log(choreDoor);


if(choreDoor === 0) {
    openDoor1 = botdoorpath;
    openDoor2 = beachdoorpath;
    openDoor3 = spacedoorpath;
  } else if (choreDoor === 1) {
    openDoor2 = botdoorpath;
    openDoor3 = beachdoorpath;
    openDoor1 = spacedoorpath;
    
  } 
  else if(choreDoor===2){
    openDoor3 = botdoorpath;
    openDoor1 = beachdoorpath;
    openDoor2 = spacedoorpath; 
  }
}
randomChoreDoorGenerator();

door1.onclick=()=>{
    //door1.setAttribute('src',"https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg");
door1.src=openDoor1;


}
door2.onclick=()=>{
    door2.src=openDoor2;
    }

    
door3.onclick=()=>{
    door3.src=openDoor3;
    }

