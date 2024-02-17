$(document).ready(function () {
    $("#button-to-bottom").click(function () {
        var element = document.getElementById('button-to-top');
        $('html, body').animate({
            scrollTop: (getOffset2(element).top - 50)
        }, 3000);
    });
    $("#button-to-top").click(function () {
        var element = document.getElementById('button-to-bottom');
        $('html, body').animate({
            scrollTop: (getOffset2(element).top - 50)
        }, 3000);
    });
});

function getOffset(el) {
    el = el.getBoundingClientRect();
    return {
        left: el.left + window.scrollX,
        top: el.top + window.scrollY
    }
}
function getOffset2(el) {
    var _x = 0;
    var _y = 0;
    while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
        _x += el.offsetLeft - el.scrollLeft;
        _y += el.offsetTop - el.scrollTop;
        el = el.offsetParent;
    }
    return { top: _y, left: _x };
}