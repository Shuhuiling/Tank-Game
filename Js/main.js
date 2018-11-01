var can1 = document.getElementById("canvas1");
var ctx1 = can1.getContext('2d');

ctx1.arc(100,200,100,0,2*Math.PI);
ctx1.strokeStyle = "red";
ctx1.stroke();

var timer = null;
var startTime = new Date().valueOf();


var round = new roundObj();
round.init();


timer = setInterval(function () {	
	round.autoplay();
},30);


