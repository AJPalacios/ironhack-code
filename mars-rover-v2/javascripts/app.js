// Rover Object Goes Here
var rover = { 
  name: "Mars Rover",
  direction: "N",
  x: 0,
  y: 0,
  travelLog: []
}
console.log(rover.x, rover.y)
// ======================
var mars = [
  ["Alien",null,null,null,null,null,"Alien",null,null,null],
  ["Alien",null,null,"Alien",null,null,null,null,"Alien",null],
  ["Alien", null, null, null, null, null, null, null, null, null],
  [null, null, null, "Alien", null, null, "Alien", null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  ["Alien",null,null,"Alien",null,"Alien",null,"Alien",null,null],
  [null, "Alien", null, null, null, null, null, null, null, null],
  [null, null, null, null, null, "Alien", null, null, null, null],
  [null, null, "Alien", null, null, null, null, null, null, null],
  [null, null, null, null, null, null, "Alien", null, null, "Alien"]
];

// ======================
function turnLeft(){

  switch(rover.direction){
    case "N":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "N";
      break;

  }
  travel(rover)
  console.log("turnLeft was called! Rover direction is " + rover.direction);
}

function turnRight(){

  switch(rover.direction){
    case "N":
      rover.direction = "E";
      break;
    case "E":
    rover.direction = "S";
      break;
    case "S":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "N";
      break;
  }
  travel(rover)
  console.log("turnRight was called! Rover direction is " + rover.direction);
}

function moveForward(){

  var obstacle;

  switch(rover.direction){

    case "N":
      if (rover.x == 0){
        console.log("You have reached the edge of the Mars")
      }else{
        obstacle = checkObstacle(mars, rover.x - 1, null);
        if (obstacle == null) {
          rover.x -= 1;
          currentCoords(mars,rover,rover.x + 1, null);
        }else{
          console.log("Stop you found: " + obstacle);
        }

      }
      break;
    case "E":
      if (rover.y == 9) {
        console.log("You have reached the edge of the Mars")
      }else{
        obstacle = checkObstacle(mars, null, rover.y + 1)
        if (obstacle == null) {
          rover.y + 1;
          currentCoords(mars, rover, null, rover.y -1)
        }else{
          console.log("Stop you found: "+ obstacle)
        }
      }
      break;

    case "S":
      if (rover.x == 9) {
        console.log("You have reached the edge of the Mars")
      }else{
        obstacle = checkObstacle(mars, rover, rover.x + 1, null)
        if (obstacle == null) {
          rover.x += 1
          currentCoords(mars, rover, rover.x - 1, null)
        }else{
          console.log("Stop you found: "+ obstacle)
        }
      }
      break;
    
    case "W":
      if (rover.y == 0) {
        console.log("You have reached the edge of the Mars")
      }else{
        obstacle = checkObstacle(mars, null, rover.y - 1)
        if (obstacle == null) {
          rover.y -= 1
          currentCoords(mars, rover, null, rover.y + 1)
        }else{
          console.log("Stop you found: "+ obstacle)
        }
      }

      break;
  }

  travel(rover)

  console.log("moveForward was called")
}

function moveBackward(rover){}

function commands(comm){

  var command = comm;

  var commLower = command.toLowerCase();

  var n =  commLower.length;

  for (let index = 0; index < n; index++) {
    
    if (command[index] == "r") {
      turnRight()
    }else if(command[index] == "l"){
      turnLeft();
    }else if (command[index] == "f") {
      moveForward();
    }else if(command[index]){
      moveBackward();
    }else{
      break;
    }
    
  }

}

function travel(){
  rover.travelLog.push(rover.x);
  rover.travelLog.push(rover.y);
}

function currentCoords(planetTerrain, rover, roverX, roverY){
  if (roverX != null && roverY != null) {
    planetTerrain[rover.x][rover.y] = rover.name;
    planetTerrain[rover.x][rover.y] = null;
  }else if(roverY != null && roverX != null){
    planetTerrain[rover.x][rover.y] = rover.name;
    planetTerrain[rover.x][rover.y] = null;
  }
}

function checkObstacle(terrain,roverX, roverY){
  if (roverX != null && roverY == null) {
    if (terrain[roverX][rover.posY] == null) {
      return null;
    } else {
      return terrain[roverX][myRobot.posY];
    }
  } else if (roverY != null && roverX == null) {
    if (terrain[rover.x][roverY] == null) {
      return null;
    } else {
      return terrain[myRobot.x][roverY];
    }
}
}
