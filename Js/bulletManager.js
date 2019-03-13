var bulletmanagerObj = function(){
	this.bullets = [];
}
bulletmanagerObj.prototype.drawBullet = function(deltaTime){
	for(var i=0;i<this.bullets.length;i++){
		if(this.bullets[i].alive){
			this.bullets[i].draw(deltaTime);
		}
		
	}
}
bulletmanagerObj.prototype.addBullet = function(bullet){
	this.bullets.push(bullet);
}