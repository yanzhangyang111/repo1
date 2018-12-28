
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

$(function () {
    if (!sessionStorage.getItem("guest")) {
        do {
            //let作用域在此花括号，，while无法访问；
            var guest = prompt("请输入您的姓名：");
            var reg = new RegExp("^[\u4e00-\u9fa5]{2,3}$");
            if (reg.test(guest)) {
                sessionStorage.setItem("guest", guest);
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
                    if(sessionStorage.getItem("guest")==="李鹏"){
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