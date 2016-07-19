
/**
 * 
 * @authors liuyanhao (374659635@qq.com)
 * @date    2016-07-19 10:48:22
 * @version $Id$
 */

 //显示多级菜单
function navlist() {
    $.getJSON('/nav', function (json, textStatus) {
        var navjson = JSON.parse(json.navList);
        var endstr = "";
        var str = "";
        var strul = "";
        initNav(navjson);
        //初始化根目录
        function initNav(navjson) {
            navjson.forEach(function (element) {
                str = "<div class='navlist'><p class='right'>" + element.name + "</p>";
                createElement(element)
                str += "</div>"
                endstr += str;
            });
            $(".nav-content").append(endstr)
        }

        //生成所有子目录
        function createElement(element) {
            if (element.children && element.children.length) {
                str += strul;
                strul = '<ul>';
                element.children.forEach(function (eleeach) {
                    eleeach.value ? strul += "<li data-path = " + eleeach.value + ">" + eleeach.name + "</li>" : strul += "<li data-path = 'directory' class='right'>" + eleeach.name + "</li>";
                    createElement(eleeach)
                })
                str += strul + '</ul>';
                strul = '';
            }
        }
    });
}
navlist()

