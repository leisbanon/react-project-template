var evt = "resize";
window.addEventListener(evt, resize, false);
function resize() {
    //设置标准屏幕可见宽度的（Iphone6+）
    var k = 375;
    if(window.orientation == 0 || window.orientation == 180) {
        //竖屏
    } else {
        //横屏
        k = 320;
    }
    
    if(document.documentElement.clientWidth <= k) {
        document.documentElement.style.fontSize = document.documentElement.clientWidth / 750 * 100 +'px';
    }else {
        //这里如果屏幕可见宽度大于 标准屏幕宽度，统一设置标准函数宽度为375px OR 320px.
        document.documentElement.style.fontSize = k / 750 * 100 +'px';
    }
};
resize();
