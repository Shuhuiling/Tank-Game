// ai坦克基类
var alTank = function() {
	this.x;
	this.y;
	this.direction;// 0 1 2 3 
	this.speed = 1;
	this.tankBody = new Image();
}
alTank.prototype.init = function(){
	this.tankBody.src = "img/enemy3U.jpg";
}
alTank.prototype.draw= function(){
	var speed = this.speed;
	this.direction = parseInt(Math.random()*4);
	console.log(this.direction);
	if(this.direction%2 == 0){
		// 0，2 y值在变化
		speed = this.direction == 0 ? -speed : speed;
		this.y += speed;
		if(this.y <= 0) this.y =0;
		if(this.y >= 540) this.y =540; 
	}else{
		// 1，3 x值在变化
		speed = this.direction == 1 ? speed : -speed;
		this.x += speed;
		if(this.x <= 0) this.x =0;
		if(this.x >= 540) this.x =540;
	}

	// ctx1.translate(this.x+30,this.y+30);
	// ctx1.rotate((Math.PI / 180) * (90*this.direction));
	// ctx1.translate(-this.x-30,-this.y-30);
	ctx1.drawImage(this.tankBody,this.x,this.y);
	
}

