var brickObj = function(){
	this.x;
	this.y;
	this.brickBody = new Image();
	this.size = 60;
	this.isHit;
	this.hasBoomed = false;
	this.frameIndex = 0;
	this.boomSrc = new Image();
}
brickObj.prototype.init = function(){
	this.brickBody.src = "img/walls.jpg";
	this.boomSrc.src = "img/tankAll.jpg";
	this.isHit = false;
}
brickObj.prototype.draw = function(){
	// 该砖块与子弹撞击成功
	if (this.isHit) {
		this.nowTime = Date.now();
		var elaspTime = this.nowTime - this.startTime;
		if(elaspTime > 998){
			this.hasBoomed = true;
		}else{
			this.frameIndex = parseInt(elaspTime/333);
			ctx1.drawImage(
        	 this.boomSrc
		     ,this.frameIndex*30 + 300//截取原始图片的 x坐标
		     ,0//截取原始图片的 y坐标
		     ,30//截取原始图片的 宽度
		     ,30 // 截取的高度
		     ,this.x//图片在canvas画布上的x坐标
		     ,this.y//图片在canvas画布上的y坐标
		     ,this.size//绘制图片的宽度
		     ,this.size//绘制图片的高度
                 );
		}
	}else if(this.hasBoomed){
		return;
	}
	else{
		ctx1.drawImage(this.brickBody,this.x,this.y);		
	}
	// drawAnimation
}

brickObj.prototype.checkCollision = function(box1){
	if (this.hasBoomed) {
		return false;
	}
	var box2 = [];
	box2[0] = this.x;
	box2[1] = this.x + this.size;
	box2[2] = this.y;
	box2[3] = this.y + this.size;
	var x1 = box1[0] > box2[0] ? box1[0] : box2[0];	
	// x1 -= 8;
	var y1 = box1[2] > box2[2] ? box1[2] : box2[2];
	// y1 -= 8;
	var x2 = box1[1] < box2[1] ? box1[1] : box2[1];
	// x2 -= 8;
	var y2 = box1[3] < box2[3] ? box1[3] : box2[3];
	// y2 -= 8;
	// 判断下一步两个矩形是否相交，才确定坦克是否能向前走
	if(x1 < x2 && y1 < y2){
		var interArea = (x2 - x1) * (y2 - y1);
		if(interArea > 0)
			return true;
		
	}
	return false;
}

brickObj.prototype.boom = function(){
	this.startTime = Date.now();
	this.isHit = true;
	this.frameIndex = 0;
	var audio = new Audio();
	audio.src = "audio/tankCrack.mp3";
	audio.play();
}