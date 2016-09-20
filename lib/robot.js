

function Robot(){
  // implement your solution here!
  this.bearing = 'north';
  this.directions = ['north', 'east', 'south', 'west'];
  this.coordinates = [0,0];
}

Robot.prototype.orient = function(direction){
  if (this.directions.includes(direction)){
    this.bearing = direction;
  } else {
    throw new Error('Invalid Robot Bearing');
  }
};


Robot.prototype.turnLeft = function(){
  switch(this.bearing) {
      case 'north':
        this.bearing = 'west';
        break;
      case 'east':
        this.bearing = 'north';
        break;
      case 'south':
        this.bearing = 'east';
        break;
      case 'west':
        this.bearing = 'south';
        break;
  }
};

Robot.prototype.turnRight = function(){
  switch(this.bearing) {
      case 'north':
        this.bearing = 'east';
        break;
      case 'east':
        this.bearing = 'south';
        break;
      case 'south':
        this.bearing = 'west';
        break;
      case 'west':
        this.bearing = 'north';
        break;
  }
};

Robot.prototype.at = function (x, y) {
  this.coordinates = [x, y];
};


Robot.prototype.advance = function(){
  if (this.bearing == 'north'){
    this.coordinates[1] += 1;
  } else if(this.bearing == 'east'){
    this.coordinates[0] += 1;
  } else if(this.bearing == 'south'){
    this.coordinates[1] -= 1;
  } else if(this.bearing == 'west'){
    this.coordinates[0] -= 1;
  }
};

Robot.prototype.instructions = function(commands){
  var result = [];
  commands.split("").forEach(function(command){
    if (command == "L"){
      result.push("turnLeft");
    } else if (command == "R"){
      result.push("turnRight");
    } else if (command == "A"){
      result.push("advance");
    }
  });
  return result;
};


Robot.prototype.place = function(object){
  this.coordinates = [object.x, object.y];
  this.bearing = object.direction;
};

Robot.prototype.evaluate = function(commands){
  this.commands.forEach(function(command){
    this[command]();
  }, this);
};
