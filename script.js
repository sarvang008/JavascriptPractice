let door1=document.getElementById('door1');

let door2=document.getElementById('door2');

let door3=document.getElementById('door3');
let startButton=document.getElementById('start');
let openDoor1;
let openDoor2;
let openDoor3;
let closedoorpath='https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg';
let beachdoorpath='https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg';
let botdoorpath='https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg';
let spacedoorpath='https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg';
let numcloseddoors;
let currentlyplaying=false;
const isclicked=(door)=>{
  if(door.src===closedoorpath)
  return true;
  else
  return false;

}
const isBot=(door)=>{
  if(door.src===botdoorpath)
  return true;
  else
  return false;

}
const playdoor=(door)=>
{
numcloseddoors--;
if(numcloseddoors===0)
{
gameover('win');
}
else if(isBot(door))
{
  gameover('loose');
}
}
const randomChoreDoorGenerator=()=>
{

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


door1.onclick=()=>{
    //door1.setAttribute('src',"https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg");
    if(isclicked(door1)&& currentlyplaying===true)
    {
      door1.src=openDoor1;
      playdoor(door1);
    }   

}
door2.onclick=()=>{
  if(isclicked(door2)&& currentlyplaying===true)
     { 
        door2.src=openDoor2;
          playdoor(door2);
      }
  }

    
door3.onclick=()=>{
  if(isclicked(door3)&& currentlyplaying===true)
  {
    door3.src=openDoor3;
    playdoor(door3);
  }
    }

    const gameover=(status)=>{

      if(status==='win')
      {
        startButton.innerHTML='You Win!! Play Again';
      }
      else
      {
        startButton.innerHTML="You Loose!! Play Again";
      }
      currentlyplaying=false;

    }
startButton.onclick=()=>{
  startround();
}
function startround()
{
  console.log('in startround');
  if(currentlyplaying!==true)
  {
  door1.src=closedoorpath;
  door2.src=closedoorpath;
  door3.src=closedoorpath;
  numcloseddoors=3;
  currentlyplaying=true;
  startButton.innerHTML='start';
  randomChoreDoorGenerator();
  }

}
