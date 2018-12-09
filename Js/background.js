var bgObj = function(){
	this.width;
	this.height;
	this.widCount;
	this.heiCount;
	this.x;
	this.y;
	this.size;
}
bgObj.prototype.init = function(){
	this.width = 600;
	this.height = 600;
	this.widCount = 10; // 游戏区宽度色块个数
	this.heiCount = 10; // 游戏区高度色块个数
	this.x = 0; // 游戏区x的偏移量
	this.y = 0; // 游戏区y的偏移量
	this.size = 60; // 色块的尺寸：60*60
}
// 绘制背景色块
bgObj.prototype.drawBlank = function(map1){
	for(var i=0;i<this.widCount;i++){
		for(var j=0;j<this.heiCount;j++){
			if(map1[i][j] == 1){
				this.x = j*this.size;
				this.y = i*this.size;
				ctx2.beginPath();
				ctx2.rect(this.x,this.y,this.size,this.size);
				ctx2.fillStyle = "red";
				ctx2.fill();
				ctx2.closePath();
			}else if(map1[i][j] == 2){
				this.x = j*this.size;
				this.y = i*this.size;
				ctx2.beginPath();
				ctx2.rect(this.x,this.y,this.size,this.size);
				ctx2.fillStyle = "blue";
				ctx2.fill();
				ctx2.closePath();
			}
		}
	}
}