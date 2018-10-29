function Chronometer() {
  this.currentTime = 0;
  this.intervalId = 0;
}

Chronometer.prototype.startClick = function() {
  chronometer.intervalId = setInterval(function() {
      chronometer.setTime();
    chronometer.currentTime++;
  }, 1000);
};

Chronometer.prototype.setMinutes = function() {
  if (chronometer.currentTime >= 60) {
    return parseInt(chronometer.currentTime / 60);
  } else {
    return 0;
  }
};

Chronometer.prototype.setSeconds = function() {
  if (chronometer.currentTime >= 60) {
    return parseInt(chronometer.currentTime % 60);
  } else {
    return chronometer.currentTime;
  }
};

Chronometer.prototype.twoDigitsNumber = function(num) {
if(num < 10){
    return "0"+ num;
}else{
    return num.toString();
}

};

Chronometer.prototype.setTime = function() {
    var minutes = chronometer.twoDigitsNumber(chronometer.setMinutes());
    var seconds = chronometer.twoDigitsNumber(chronometer.setSeconds());

};

Chronometer.prototype.setMilliseconds = function() {};

Chronometer.prototype.stopClick = function() {
    clearInterval(chronometer.intervalId);
};

Chronometer.prototype.resetClick = function() {
    chronometer.currentTime = 0;
};

Chronometer.prototype.splitClick = function() {};
