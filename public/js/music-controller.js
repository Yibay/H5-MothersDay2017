//音频对象

var music = {};
//背景音乐
// var music = new Audio("http://hugehuge.oss-cn-hangzhou.aliyuncs.com/static/H5Resource/serviceStationStartover/bgm.mp3");
music.bg_music = new Audio("http://hugehuge.oss-cn-hangzhou.aliyuncs.com/static/H5Resource/motherday2017/music/池頼広 - 安寧2.mp3");
// 自动播放
music.bg_music.play();
// 在微信情况下,兼容iOS系统,首次自动播放
document.addEventListener("WeixinJSBridgeReady",function(){
    music.bg_music.play();
});
// 循环播放
music.bg_music.addEventListener("ended",function(){
    music.bg_music.play();
});

//雨声－买菜
music.rain = new Audio("http://hugehuge.oss-cn-hangzhou.aliyuncs.com/static/H5Resource/motherday2017/music/小雨-买菜.mp3");
// 循环播放
music.rain.addEventListener("ended",function(){
    music.rain.play();
});

//扫地
music.sweep = new Audio("http://hugehuge.oss-cn-hangzhou.aliyuncs.com/static/H5Resource/motherday2017/music/扫地.mp3");
// 循环播放
music.sweep.addEventListener("ended",function(){
    music.sweep.play();
});

//敲门
music.knock = new Audio("http://hugehuge.oss-cn-hangzhou.aliyuncs.com/static/H5Resource/motherday2017/music/敲门.mp3");
// 循环播放
music.knock.addEventListener("ended",function(){
    music.knock.play();
});

//水声
music.water = new Audio("http://hugehuge.oss-cn-hangzhou.aliyuncs.com/static/H5Resource/motherday2017/music/水声.mp3");
music.water_closed = false;
// 循环播放
music.water.addEventListener("ended",function(){
    music.water.play();
});
music.waterPlay = function(){
    if(!this.water_closed){
        music.water.play();
    }
};

//猫叫
music.cat = new Audio("http://hugehuge.oss-cn-hangzhou.aliyuncs.com/static/H5Resource/motherday2017/music/猫叫.mp3");
// 循环播放
// music.cat.addEventListener("ended",function(){
//     music.cat.play();
// });

//洗碗
music.wash = new Audio("http://hugehuge.oss-cn-hangzhou.aliyuncs.com/static/H5Resource/motherday2017/music/碗碟-洗碗.mp3");
// 循环播放
music.wash.addEventListener("ended",function(){
    music.wash.play();
});

//风声－扔垃圾、晒衣服
music.wind = new Audio("http://hugehuge.oss-cn-hangzhou.aliyuncs.com/static/H5Resource/motherday2017/music/风-扔垃圾-晒衣服.mp3");
// 循环播放
music.wind.addEventListener("ended",function(){
    music.wind.play();
});

//鸟叫－扔垃圾
music.bird = new Audio("http://hugehuge.oss-cn-hangzhou.aliyuncs.com/static/H5Resource/motherday2017/music/鸟叫1-扔垃圾.mp3");
// 循环播放
music.bird.addEventListener("ended",function(){
    music.bird.play();
});

//声音按钮
// 因为Safari 不支持js改变audio的volume, 部分支持 静音muted
$("#sound").on("click", function() {
    if (!music.bg_music.muted) {
        for (var prop in music) {
            // 遍历时 prop为字符串只能通过[],引到属性值
            if (music.hasOwnProperty(prop) && music[prop] instanceof Audio) {
                // iOS Safari不支持audio volume 修改
                music[prop].volume = 0;
                // 但支持 muted 静音
                music[prop].muted = true;
            }
        }
        $(this).css("background-image", "url(./public/images/scene/关@2x.png)");
    }
    else {
        for (var prop in music) {
            // 遍历时 prop为字符串只能通过[],引到属性值
            if (music.hasOwnProperty(prop) && music[prop] instanceof Audio) {
                music[prop].volume = 1;
                music[prop].muted = false;
            }
        }
        $(this).css("background-image", "url(./public/images/scene/开@2x.png)");
    }
});

// 设置音频 循环播放
// (function(){
// 	for(var prop in music){
// 		//遍历时 prop为字符串，只能通过［］，引到对象属性值
// 		if(music.hasOwnProperty(prop) && music[prop] instanceof Audio){
// 			music[prop].addEventListener("ended",function(){
// 				music[prop].play();
// 			});
// 		}
// 	}
// })();