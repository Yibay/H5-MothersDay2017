// 根据输入年龄计算 数据
var data = {};

document.getElementById("submit").addEventListener("click",function(){
	// 记录年龄
	data.age = parseInt(document.getElementById("your-age").value);
	// 数字不合法
	if(!data.age){
		alert("请输入你的年龄");
		return;
	}
	var n = data.age;
	// 整理杂物
	data.livingRoom_point1 = [n,n * 36 * 78,n * 0.83 * 78].map(function(item){return parseInt(item);});
	// 扫地
	data.livingRoom_point2 = [n,n * 45 * 292,n * 0.3 * 292].map(function(item){return parseInt(item);});
	// 倒垃圾
	data.livingRoom_point3 = [n,n * 3.9 * 365,n * 0.13 * 365].map(function(item){return parseInt(item);});
	// 洗刷
	data.kitchen_point1 = [n,n * 20 * 365,n * 0.25 * 3 * 365].map(function(item){return parseInt(item);});
	// 买菜
	data.kitchen_point2 = [n,n * 1.1 * 300,n * 0.58 * 300].map(function(item){return parseInt(item);});
	// 做饭
	data.kitchen_point3 = [n,n * 3 * 300,n * 0.6 * 3 * 300].map(function(item){return parseInt(item);});
	// 叫起床
	data.bedroom_point1 = [n,n * 270,n * 0.8 * 270].map(function(item){return parseInt(item);});
	// 洗衣服
	data.bedroom_point2 = [n,n * 15 * 310,n * 0.8 * 310].map(function(item){return parseInt(item);});
	// 叠衣服
	data.bedroom_point3 = [n,n * 1.2 * 68,n * 0.75 * 68].map(function(item){return parseInt(item);});
	// 总时间
	data.total = data.livingRoom_point1[2] + data.livingRoom_point2[2] + data.livingRoom_point3[2]
				+ data.kitchen_point1[2] + data.kitchen_point2[2] + data.kitchen_point3[2]
				+ data.bedroom_point1[2] + data.bedroom_point2[2] + data.bedroom_point3[2]
	// 隐藏输入层
	document.getElementById("enter-age").style.display = "none";

	// 初始化fullpage (此时再初始化，为了方式弹出输入框时，造成样式变更)
	initFullpage();

});