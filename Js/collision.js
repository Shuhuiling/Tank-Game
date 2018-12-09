// object1:坦克  object2:地图
function checkCollision(object1,object2) {
	/*
	a-------b

	|       |

	c-------d
	*/
	// UP
	var aX,aY,bX,bY=0;
	var rowIndex_A,colIndex_A=0;
	var rowIndex_B,colIndex_B=0;
	if(object1.direction == 0){
		// A点
		aY = object1.y-3; // y轴值
		rowIndex_A = parseInt(aY/60); // 行索引
		console.log(aY);
		console.log(rowIndex_A);
		aX = object1.x; // x轴值
		colIndex_A = parseInt(aX/60); // 列索引
		// B点
		bY = object1.y-3;
		rowIndex_B = parseInt(bY/60);
		bX = object1.x+60;
		colIndex_B = parseInt(bX/60);
		if(object2[rowIndex_A][colIndex_A] == 2 || object2[rowIndex_B][colIndex_B] == 2){
			object1.isRun = false;
		}
	}
}