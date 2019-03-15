// object1:坦克  object2:地图

// function checkCollision(object1,object2) {
	/*
	a-------b  ->  x

	|       |

	c-------d

	|
	y
	*/
/*
	var aX,aY,bX,bY,dX,dY,cX,cY=0;
	var rowIndex_A,colIndex_A=0;
	var rowIndex_B,colIndex_B=0;
	var rowIndex_C,colIndex_C=0;
	var rowIndex_D,colIndex_D=0;
	var overlap=5;
	// Up
	if(object1.direction == 0){
		// A点
		aY = object1.y-overlap; // y轴值 y值比正常值小，才能在正常的y值到达障碍物前停止
		rowIndex_A = parseInt(aY/eachSize); // 行索引
		console.log(aY);
		console.log(rowIndex_A);
		aX = object1.x; // x轴值
		colIndex_A = parseInt(aX/eachSize); // 列索引
		// B点
		bY = aY;
		rowIndex_B = parseInt(bY/eachSize);
		bX = aX+eachSize;
		colIndex_B = parseInt(bX/eachSize);
		if(object2[rowIndex_A][colIndex_A] == 2 || object2[rowIndex_B][colIndex_B] == 2){
			object1.isRun = false;
		}
	}
	// Right
	else if(object1.direction == 1){
		// B点
		bX = object1.x+eachSize+overlap;
		colIndex_B = parseInt(bX/eachSize);
		bY = object1.y;
		rowIndex_B = parseInt(bY/eachSize);
		// D点
		dX = bX;
		colIndex_D = parseInt(dX/eachSize);
		dY = bY + eachSize;
		rowIndex_D = parseInt(dY/eachSize);
		if(object2[rowIndex_D][colIndex_D] == 2 || object2[rowIndex_B][colIndex_B] == 2){
			object1.isRun = false;
		}
	}
	// Down
	else if(object1.direction == 2){
		// C点
		
		// D点

	}
}
*/

// 坦克object1和障碍物object2的💥
// 坦克每次运动都要和所有的障碍物执行一遍
// 子弹和障碍物的碰撞	
function checkCollision1(box1,object2){
	var box2 = [];
	for(var i=0;i<10;i++){// 行
		for(var j=0;j<10;j++){// 列
			if(object2[i][j] == 2){
				box2[0] = eachSize * j;
				box2[1] = box2[0] + eachSize;
				box2[2] = eachSize * i;
				box2[3] = box2[2] + eachSize;
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
						
						return false;
					
				}
			}
		}
	}
	return true;
}


	

