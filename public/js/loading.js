/**
 * Created by liuke on 17/2/18.
 * Updated by liuke on 17/5/8.
 */

//工具函数
function extend(o1, o2){
    for(var i in o2){
        if(typeof o1[i] === "undefined"){
            o1[i] = o2[i];
        }
    }
    return o1;
}
function html2node(str){
    var container = document.createElement("div");
    container.innerHTML = str;
    return container.children[0];
}

//Loading 组件
function Loading(){
    //构造函数 获取常用节点
    this.body = document.getElementsByTagName("body")[0];
}
extend(Loading.prototype,{
    //默认模版
    _template_str : '' +
        '<div id="loading" style="position: fixed;z-index: 999;top: 0;left: 0;width: 100vw;height: 100vh;background: #fff;">' +
            '<p id="progress" style="margin: 0;line-height: 100vh;text-align: center;font-size: 40px;color: #000;"><b>0%</b></p>' +
        '</div>',
    //设置模版
    setTemplate : function(bg_image, word_style){
        //设置 背景图
        bg_image = bg_image ? "url(" + bg_image + ") 0 0/100% 100% no-repeat;" : "#fff";
        //设置 进度图背景色
        word_style = word_style ? word_style : "";
        //重新生成 模版
        this._template_str = '' +
        '<div id="loading" style="position: fixed;z-index: 999;top: 0;left: 0;width: 100vw;height: 100vh;'
            + 'background: ' + bg_image + '">'
            + '<p id="progress" style="margin: 0;line-height: 100vh;text-align: center;font-size: 40px;color: #000;">'
                +'<b style="' + word_style + '">0%</b>'
            + '</p>' +
        '</div>';
    },
    //展示 Loading页
    show : function(){
        var loading = document.getElementById("loading");
        if(loading != null){
            loading.style.display = "block";
        }
        else{
            var _template = html2node(this._template_str);
            //cloneNode(true) 包含子节点
            loading = _template.cloneNode(true);
            this.body.appendChild(loading);
        }
        return loading;
    },
    //隐藏 Loading页
    hide : function(){
        var loading = document.getElementById("loading");
        if(loading != null){
            setTimeout(function(){
                loading.style.display = "none";
            },0);
        }
    },
    //进度条 加载
    loadingProgress : function(imagesArray, image_base_url){
        var _self = this;
        imagesArray = imagesArray.map(function(item, index, array){
            return image_base_url + item;
        });
        var progress = (document.getElementById("progress")).getElementsByTagName("b")[0];
        var length = imagesArray.length;
        var loaded_num = 0;
        var image = null;
        for(var i=0;i<length;i++){
            image = new Image();
            image.src = imagesArray[i];
            image.onload = function(){
                setTimeout(function(){
                    loaded_num++;
                    progress.innerHTML = parseInt(loaded_num / length * 100) + "%";
                    if(loaded_num === length){
                        _self.hide();
                    }
                },0);
            };
            image.onerror = function(){
                setTimeout(function(){
                    loaded_num++;
                    progress.innerHTML = parseInt(loaded_num / length * 100) + "%";
                    if(loaded_num === length){
                        _self.hide();
                    }
                },0);
            };
        }

    }
});

//实例化 Loading组件
var LoadingPage = new Loading();

/* 
    api 说明：
 */

// a. 设置模版(可选)
// LoadingPage.setTemplate();
// 如：
    // LoadingPage.setTemplate("./public/images/scene/加载.gif",
    // "position: absolute;top: 52.5%;left: 52%;transform: translateX(-50%);font-family: 汉仪小麦简;font-size: 4.5vw;line-height: 1em;");


// b. 显示 Loading页（必选）
// LoadingPage.show();

// c. 加载图片（必选）

// c1. 覆写 mage_base_url
// var image_base_url = "static/H5Resource/serviceStationStartover/images/";

// c2. 覆写 image_array
// var image_array = ["page1/organizers.png","page1/time.png","page1/title.png",
//                     "page2/process.png",
//                     "page3/people1.jpg","page3/people1word.png",
//                     "page3/people2.jpg","page3/people2word.png",
//                     "page3/people3.jpg","page3/people3word.png",
//                     "page3/people4.jpg","page3/people4word.png",
//                     "page3/people5.jpg","page3/people5word.png",
//                     "page3/people6.jpg","page3/people6word.png",
//                     "page3/people7.jpg","page3/people7word.png",
//                     "page3/people8.jpg","page3/people8word.png",
//                     "page3/title.png",
//                     "page4/code.png",
//                     "arrow.png","bg.jpg","leaf1.png","leaf2.png"];

// c3. 执行 LoadingPage.loadingProgress()
// LoadingPage.loadingProgress(image_array, image_base_url);

// ps: 图片加载完成后，会自动隐藏loading，图片数组为［］则不隐藏loading。故意这么设计的


