// 视频控制
var video = $("#video").get(0);
var video_box = $(".video-box .poster").get(0);
// 增加控制事件
video_box.addEventListener("click",videoControl);
// 控制视频播放 函数
function videoControl(){
	if(video.paused){
		// 隐藏封面
		$(video_box).css("opacity","0");
		// 背景音乐停止
		music.bg_music.pause();
		// 视频播放
		video.play();
	}
	else{
		// 显示封面
		$(video_box).css("opacity","1");
		// 视频停止
		video.pause();
		// 背景音乐播放
		music.bg_music.play();
	}

}
// 视频结束
video.addEventListener("ended",function(){
	$(".video-box").hide();
	$("#scene-total .heart").css("opacity","1");
	// 背景音乐播放
	music.bg_music.play();
});