function initFullpage(){
	var isCalculated = false;
	var isShow = false;
	$('#dowebok').fullpage({
		onLeave: function(index, nextIndex, direction){
			//首次 离开第一屏，将计算结果 传给 总结屏幕
			if(index === 1 && !isCalculated){
				isCalculated = true;
				var scene_total_p = html2node("<div class='artical'><p>" + data.age + "年来</p><p>" + data.total + "个小时</p><p>您为我付出</p><p>以后的漫长岁月</p><p>我陪您变老</p></div>")
				$("#scene-total .fp-tableCell").append(scene_total_p);
			}
			// 离开视频页
			if(index === 4){
				// 显示视频封面
				$(video_box).css("opacity","1");
				$(video).css("opacity", "0");
				// 视频暂停
				video.pause();
				// 背景音乐播放
				music.bg_music.play();
			}
		},
		afterLoad: function(index, nextIndex, direction){
			// 第1页 控制
			if(nextIndex === 1){
				music.cat.currentTime = 0;
				music.cat.play();
			}
			else{
				music.cat.pause();
			}
			// 第2页 控制
			if(nextIndex === 2){
				music.waterPlay();
			}
			else{
				music.water.pause();
			}
			// 第4页 控制
			if(nextIndex === 4){
				$("#arrow").hide();
				//首次 滑倒总结屏幕，显示文字入场动画
				if(!isShow){
	    			isShow = true;
	    			$("#scene-total p").addClass("active");
	    			// 出完字后 淡入视频
	    			setTimeout(function(){
	    				// 显示视频外框
	    				$(video).css("display","block");
	    				// 渐入封面
	    				$(video_box).fadeIn(1000, function(){
	    					// 显示视频
	    					$(video).css("opacity", "1");
	    					// 如果视频在播，防止poster延迟遮挡
	    					if(!video.paused){
	    						$(video_box).css("opacity","0");
	    					}
	    				});
	    			},5000);
				}
				else {
					// 显示视频
					$(video).css("opacity", "1");
				}
			}
			else{
				$("#arrow").show();
			}
		}
	});    
	//彩蛋 可点击的灯
    $(".scene-kitchen .light").on("click",function(){
    	$(".scene-kitchen .light").hide();
    	$(".scene-kitchen .light-active").show();
    });
    $(".scene-kitchen .light-active").on("click",function(){
    	$(".scene-kitchen .light-active").hide();
    	$(".scene-kitchen .light").show();
    });
	//彩蛋 猫叫
	$(".scene-livingRoom .cat").on("click",function(){
		music.cat.play();
	});
}

