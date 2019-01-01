
; (function (w) {
    var Tools = {
        getRandom: function (min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        },
        id$: function (id) {
            return document.getElementById(id);
        }
    };
    w.Tools = Tools;
})(window);

// var now=new Date();
// if(now.getHours())

$(function () {
    if (!localStorage.getItem("guest")) {
        do {
            //let作用域在此花括号，，while无法访问；
            var guest = prompt("请输入您的姓名：");
            var reg = new RegExp("^[\u4e00-\u9fa5]{2,3}$");
            if (reg.test(guest)) {
                localStorage.setItem("guest", guest);
            }
        } while (!reg.test(guest));

        do {

            var need = null;
            need = prompt("can I help you?\n1.I want to play game\n2.I want to study\n3.look around");
            switch (need) {
                case "1":
                    alert("这里不是玩游戏的地方，请回吧");
                    window.close();
                    break;
                case "2":
                    let study = prompt("1.学习资料1\n2.学习资料2")
                    location.href = study === "1" ? "http://localhost:8080/%E4%BB%93%E5%BA%93/html/%E6%9D%8E%E9%B9%8F/%E6%89%AB%E9%9B%B7/saolei.html" : "http://localhost:8080/%E4%BB%93%E5%BA%93/html/%E6%9D%8E%E9%B9%8F/2048/2048.html";
                    break;
                case "3":
                    if(localStorage.getItem("guest")==="李鹏"){
                        alert("welcome back master");
                    }else{
                        alert("welcome to my humble abode!!!");
                    }
                    
                    break;
            }

        } while (!(need === "1" || need === "2" || need === "3"));
    }


    $("#btn-dm").click(function () {
        var str = $("#txt").val();
        if (str === "") {
            return;
        }
        $("<p>" + str + "</p>").appendTo($(document.body)).css({
            "position": "absolute",
            "left": document.documentElement.clientWidth,
            "top": Tools.getRandom(0, document.documentElement.clientHeight - this.offsetHeight) + "px",
            "padding": "5px",
            "font-size": Tools.getRandom(12, 24) + "px",
            "background-color": "rgba(" + Tools.getRandom(0, 255) + "," + Tools.getRandom(0, 255) + "," + Tools.getRandom(0, 255) + ",.5)",
        }).animate({
            "left": "-" + $(this).width() + "px",
            "transform": "translateX(-100%)",
        }, 10000, "linear", function () {
            this.remove();
        });
        $("#txt").val("");

    });
});













/*********************作业专区***************** 
 *              ...es6的扩展运算符
*/

/* var homework=[
    {question1:"js练习题编程一、 给定一个字符串例如:“abaasdffggghhjjkkgfddsssss3444343”;问题如下:1、 字符串的字节长度2、 取出指定位置的字符，如:0,3,5,9等3、 查找指定字符是否在以上字符串中存在，如:i，c ，b等4、 替换指定的字符，如:g替换为22,ss替换为b等操作方法5、 截取指定开始位置到结束位置的字符串，如:取得1-5的字符串6、 找出以上字符串中出现次数最多的字符和出现的次数7、 遍历字符串，并将遍历出的字符两头添加符号“@”输出至当前的文档页面。"}
]; */
