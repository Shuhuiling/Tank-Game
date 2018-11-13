// 来回运动的圆，永不停止
var roundObj = function (){
	this.speed ;
	this.startPointStart;
	this.startPointEnd;
}

roundObj.prototype.init = function (){
	this.speed = 70;
	this.startPointStart =0;
	this.startPointEnd = 0;
}

roundObj.prototype.autoplay = function () {
	ctx1.clearRect(0,0,1500,400);
	var currentTime = new Date().valueOf();
	var elapaseTime = currentTime - startTime;
	var totalTime1 = elapaseTime / 1000 ; // 记录总持续时间
	var totalTime = elapaseTime / 1000 ;
	
	while(totalTime > 20){
		totalTime -= 20;
	}
	if(totalTime >= 0 && totalTime <= 10){
		this.startPointStart = 100 + (totalTime * this.speed);
		this.startPointEnd = this.startPointStart;
		circle(this.startPointStart);
	}else {
		this.startPointStart = this.startPointEnd - ((totalTime-10) * this.speed);
		circle(this.startPointStart);
	}

	ctx1.font = '20px "微软雅黑"';           
    ctx1.textBaseline = "middle";            
    ctx1.textAlign = "center"; 
    // .toFixed(0)不保留小数点，四舍五入              
    ctx1.fillText((totalTime1).toFixed(0),this.startPointStart,200);

}
function circle(center) {
	ctx1.beginPath();
	ctx1.arc(center,200,100,0,2*Math.PI);
	ctx1.closePath();
	ctx1.strokeStyle = "red";
	ctx1.stroke();
}

var round = new roundObj();
round.init();

var timer = null;
var startTime = new Date().valueOf();
timer = setInterval(function () {	
	round.autoplay();
},30);






	