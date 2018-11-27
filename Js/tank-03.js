// 在800*600的平面内，给定坦克的初始位置(370，540）
// 按上下左右键控制坦克的方向，不按键不动，按键才动，碰壁转向;
// 图片使用rotate，优化性能
var tankObj = function() {
	this.x;
	this.y;
	this.speed;
	this.tankBody = new Image();
	this.dir_l;
	this.dir_r;
	this.dir_u;
	this.dir_d;
}
tankObj.prototype.init = function() {
	this.x = 370;
	this.y = 540;
	this.speed = 1;
	this.tankBody.src = "img/enemy3D.jpg";
	this.dir_l = 0;
	this.dir_r = 0;
	this.dir_u = 0;
	this.dir_d = 0;
}
tankObj.prototype.drawTank = function() {
	if(this.dir_l == 1){
		this.x -= this.speed;
		if(this.x <= 0) this.x =0;
		// 通过旋转画布的方式 替代图片资源的加载
		ctx1.translate(this.x+30,this.y+30);
		ctx1.rotate((Math.PI / 180) * 270);
		ctx1.translate(-this.x-30,-this.y-30);
		// this.tankBody.src = "img/enemy3R.jpg";
	}
	if(this.dir_r == 1){
		this.x += this.speed;
		if(this.x >= 740) this.x =740;
		ctx1.translate(this.x+30,this.y+30);
		ctx1.rotate((Math.PI / 180) * 90);
		ctx1.translate(-this.x-30,-this.y-30);
		// this.tankBody.src = "img/enemy3L.jpg";
	}
	if(this.dir_u == 1){
		this.y -= this.speed;
		if(this.y <= 0) this.y =0;
		// this.tankBody.src = "img/enemy3D.jpg";
	}
	if(this.dir_d == 1){
		this.y += this.speed;
		if(this.y >= 540) this.y =540;
		ctx1.translate(this.x+30,this.y+30);
		ctx1.rotate((Math.PI / 180) * 180);
		ctx1.translate(-this.x-30,-this.y-30);
		// this.tankBody.src = "img/enemy3U.jpg";
	}
	ctx1.drawImage(this.tankBody,this.x,this.y);
}


