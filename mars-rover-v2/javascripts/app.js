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
  [null,"Alien",null,null,null,null,"Alien",null,null,null],
  [null,null,null,"Alien",null,null,null,null,"Alien",null],
  [null, null, null, null, null, null, null, null, null, null],
  [null, null, null, "Alien", null, null, "Alien", null, null, null],
  [null, null, null, null, null, null, null, null, null, null],
  ["Alien",null,null,"Alien",null,"Alien",null,"Alien",null,null],
  [null, "Alien", null, null, null, null, null, null, null, null],
  [null, null, null, null, null, "Alien", null, null, null, null],
  [null, null, "Alien", null, null, null, null, null, null, null],
  [null, null, null, null, null, null, "Alien", null, null, "Alien"]
];

// ======================

function moveForward(){

  document.getElementById("logConsole").innerHTML = "Move Forward was called!";

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
  editPlanet()
  console.log("moveForward was called")
}

function moveBackward(){

  document.getElementById("logConsole").innerHTML = "Move Backward was called!";

  var obstacle;

  switch (rover.direction) {
    
    case "N":
      if (rover.x == 9) {
        console.log("You have reached the edge of the Mars")
      }else{
        obstacle = checkObstacle(mars, rover.x + 1, null);
        if (obstacle == null) {
          rover.x += 1;
          currentCoords(mars, rover, rover.x - 1, null);
        }else{
          console.log(" Stop you found: " + obstacle);
        }

      }

      break;

      case "E":
        if (rover.y == 0) {
          console.log("You have reached the edge of the Mars")
        }else{
          obstacle = checkObstacle(mars, null, rover.y - 1);
          if (obstacle == null) {
            
            rover.y -=1
            currentCoords(mars, rover, null, rover.y + 1)
          }else{
            console.log(" Stop you found: " + obstacle);
          }
        }

        break;
      
      case "S":
        if (rover.x == 0) {
          console.log("You have reached the edge of the Mars")
        }else{
          obstacle = checkObstacle(mars, rover.x - 1, null)
          if (obstacle == null) {

            rover.x -= 1
            currentCoords(mars, rover, rover.x + 1, null)

          }else{
            console.log(" Stop you found: " + obstacle);
          }
        }

        break;
      
      case "W":
        if (rover.y == 9) {
          console.log("You have reached the edge of the Mars")
        }else{
          obstacle = checkObstacle(mars, null, rover.y + 1)
          if (obstacle == null) {
            rover.y += 1
            currentCoords(mars, rover, null, rover.y - 1)
          }else{
            console.log(" Stop you found: " + obstacle);
          }
        }
        break;

  }
  travel(rover);
  editPlanet()
  console.log("moveBackguard was called")
}


function turnLeft(){

  document.getElementById("logConsole").innerHTML = "turn Left was called!";

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

  document.getElementById("logConsole").innerHTML = "turn Right was called!";

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



function commands(comm){

  var input_value = document.getElementById("roverCommand").value;
  
  var command = input_value;

  console.log(command)

  var commLower = command.toLowerCase();

  var n =  commLower.length;

  for (var index = 0; index < n; index++) {
    console.log(command[index])
    if (command[index] == "r") {
      turnRight()
    }else if(command[index] == "l"){
      turnLeft();
    }else if (command[index] == "f") {
      moveForward();
    }else if(command[index] == "b"){
      moveBackward();
    }else{
      break;
    }
    
  }

  showRoad()

}

function travel(){
  rover.travelLog.push(rover.x);
  rover.travelLog.push(rover.y);
}

function currentCoords(planetTerrain, roverX, roverY){
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

    if (terrain[roverX][rover.y] == null) {
      return null;
    } else {
      return terrain[roverX][rover.y];
    }
  } else if (roverY != null && roverX == null) {
    if (terrain[rover.x][roverY] == null) {
      return null;
    } else {
      return terrain[rover.x][roverY];
    }
  }
}

function showRoad() {



  var table = document.getElementById("world");

  var myRover = document.getElementById("rover").value;

  var row, travelRow, travelCol;
  if (myRover == rover.name) {
    console.log(rover.travelLog.length);
    console.log(rover.travelLog);
  }
  

  for(row  = 0 ; row < rover.travelLog.length-2 ; row++){
      travelRow = rover.travelLog[row];
      travelCol = rover.travelLog[row+1];
      row++;
      
      table.rows[travelRow].cells[travelCol].innerHTML = rover.name;
  }

  document.getElementById("logConsole").innerHTML = "travel Log: " + rover.travelLog ;

}

function createPlanet(planet) {
  var table = document.getElementById("world");
  var tr, td, tn, indexRow, indexCol;

  for (indexRow = 0; indexRow < planet.length; indexRow++) {
    tr = document.createElement("tr");
    for (indexCol = 0; indexCol < planet[indexRow].length; indexCol++) {
      td = document.createElement("td");
      if (planet[indexRow][indexCol] !== null) {
        tn = document.createTextNode(planet[indexRow][indexCol]);
        td.appendChild(tn);
      } else {
        tn = null;
      }
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
}

function editPlanet() {
  var table = document.getElementById("world");
  var indexRow, indexCol;

  for (indexRow = 0; indexRow < 10; indexRow++) {
    for (indexCol = 0; indexCol < 10; indexCol++) {
      table.rows[indexRow].cells[indexCol].innerHTML =
        mars[indexRow][indexCol];
    }
  }
}