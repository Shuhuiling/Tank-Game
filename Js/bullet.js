var bulletObj = function(){
	this.x;
	this.y;
	this.r
	this.speed;
	this.dir;
	this.alive;
}
bulletObj.prototype.init = function(tank,gameContext){
	this.gameContext = gameContext;
	this.dir = tank.direction;
	this.r = 5;
	// this.speed = Math.random() * 0.17 + 0.03; // 大约在0.1
	this.speed = 0.1;
	this.alive = true;
	if(this.dir % 2 == 0){
		this.x = tank.x + eachSize/2;
		this.y = this.dir == 0 ? tank.y : tank.y+eachSize;
	}
	else{
		this.x = this.dir == 1 ? tank.x+eachSize : tank.x;
		this.y = tank.y + eachSize/2;
	}
}
bulletObj.prototype.getArc = function(){
	var center = [];
	center[0] = this.x - this.r;
	center[1] = this.x + this.r;
	center[2] = this.y - this.r;
	center[3] = this.y + this.r;
	return center;
}


bulletObj.prototype.draw = function(deltaTime){
	// 获取子弹的下一个位置的圆心坐标, center代表数组:【x,y】
	var center = this.getArc();
	// brickCollision 是被子弹碰撞的砖块对象
	var brickCollision = this.gameContext.checkCollision(center);

	// 碰撞
	if(brickCollision){
		this.alive = false;
		brickCollision.boom();
		
	}else{
		this.alive = true;
	}
	if(this.alive){
		var dir = this.dir;
		var distance = this.speed * deltaTime;
		if(dir%2 == 0){
			// 0，2 y值在变化
			if(dir == 0){
				this.y -= distance;
			}
			else{
				this.y += distance;
			}
		}else{
			// 1，3 x值在变化
			if(dir == 1){
				this.x += distance;
			}
			else{
				this.x -= distance;
			}	
		}
		ctx1.beginPath();
		ctx1.arc(this.x,this.y,this.r,0,2*Math.PI);
		ctx1.fillStyle = "yellow";
		ctx1.fill();
		ctx1.closePath();
	}else{
		return;
	}
	
}