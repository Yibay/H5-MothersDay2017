// 防止弹出输入框，让页面被压扁
function changeScreen(){
	$("#enter-age").css("width",window.innerWidth).css("height",window.innerHeight);
}
changeScreen();
window.addEventListener("resize", changeScreen);