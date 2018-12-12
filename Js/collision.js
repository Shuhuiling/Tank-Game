// object1:坦克  object2:地图

 // function checkCollision(object1,object2) {
	/*
	a-------b

	|       |

	c-------d
	*/
	// UP
	/*
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
	// 以上解法出现的问题：某些时刻穿墙明显
}
*/

// 坦克object1和障碍物object2的💥
// 坦克每次运动都要和所有的障碍物执行一遍
function checkCollision(object1,object2){
	var box1 = []; // box1[0,1,2,3]： 左 右 上 下
	box1[0] = object1.x;
	box1[1] = box1[0] + eachSize;
	box1[2] = object1.y;
	box1[3] = box1[2] + eachSize;
	var box2 = [];
	for(var i=0;i<10;i++){// 行
		for(var j=0;j<10;j++){// 列
			if(object2[i][j] == 2){
				box2[0] = eachSize * j;
				box2[1] = box2[0] + eachSize;
				box2[2] = eachSize * i;
				box2[3] = box2[2] + eachSize;
				var x1 = box1[0] > box2[0] ? box1[0] : box2[0];
				var y1 = box1[2] > box2[2] ? box1[2] : box2[2];
				var x2 = box1[1] < box2[1] ? box1[1] : box2[1];
				var y2 = box1[3] < box2[3] ? box1[3] : box2[3];
				// 判断两个矩形是否相交
				var interArea = (x2 - x1) * (y2 - y1);
				if(interArea > 0)
					object1.isRun = false;
			}
		}
	}
}

	
	
	

