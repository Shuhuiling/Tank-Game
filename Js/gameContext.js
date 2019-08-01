var levelManagerObj = function(){
	this.curLevel = [];
	this.size;
	this.audio = new Audio();
}

levelManagerObj.prototype.init = function(levelConfig){
	this.size = 60;
	this.curLevel = this.generatLevel(levelConfig);
}

levelManagerObj.prototype.generatLevel = function(levelConfig){
	var width = levelConfig.length;
	var height = levelConfig[0].length;
	var level = [];
	for(var i=0;i<width;i++){
		level[i] = [];
		for(var j=0;j<height;j++){
			if(levelConfig[i][j] == 2){
				level[i][j] = new brickObj();
				level[i][j].init();
				level[i][j].y = i * this.size;
				level[i][j].x = j * this.size;
			}
		}
	}
	return level;
}

levelManagerObj.prototype.drawLevel = function(){
	for(var i = 0; i < this.curLevel.length; i ++){
		for(var j =0; j < this.curLevel[i].length;j++){
			// 砖块对象存在时
			if (this.curLevel[i][j]) {
				this.curLevel[i][j].draw();
			}
		}
	}
}

levelManagerObj.prototype.checkCollision = function(box1){
	// var isCheckCollision = false;
	for(var i = 0; i < this.curLevel.length; i ++){
		for(var j =0; j < this.curLevel[i].length;j++){
			// 砖块对象存在时
			if (this.curLevel[i][j]) {
				if (this.curLevel[i][j].checkCollision(box1)) return this.curLevel[i][j];
			}
		}
	}
	return null;
}
// function process(code){
// 	..........
// 	..........;
// }
// while(code == bug) {
// 	process(code);
// 	continue;
// }