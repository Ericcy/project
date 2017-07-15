//1. 让支持多种样式
function animate(element, obj, fn) {
  clearInterval(element.timer);
  element.timer = setInterval(function () {
    
    var flag = true;
    
    for (var k in obj) {
      var attr = k;
      var target = obj[k];
      if (attr === "opacity") {
        var leader = getStyle(element, attr);
        //console.log(leader);
        //parseInt 改成了parseFlot
        leader = parseFloat(leader) || 0;
        
        var step = (target - leader) / 20;
        //step放大1000倍
        step = step * 1000;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        leader += step/1000;
        //1. 去掉px
        element.style[attr] = leader;
        if (leader != target) {
          flag = false;
        }
      } else if (attr === "zIndex") {
        
        element.style.zIndex = target;
        
      } else {
        var leader = getStyle(element, attr);//带px
        leader = parseInt(leader) || 0;
        
        var step = (target - leader) / 20;
        ///保证step最少都跑1px
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        leader += step;
        element.style[attr] = leader + "px";
        if (leader != target) {
          flag = false;
        }
      }
      
      
    }
    
    if (flag) {
      clearInterval(element.timer);
      fn && fn();
    }
  }, 15);
}

//获取计算后的样式
function getStyle(element, attr) {
  if (window.getComputedStyle) {
    return window.getComputedStyle(element, null)[attr];
  } else {
    return element.currentStyle[attr];
  }
}