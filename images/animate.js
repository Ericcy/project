/**
 * Created by HUCC on 2017/3/31.
 */
function animate(element, target, fn) {
  //一进来，就清空定时器，保证只有一个定时器在跑
  if (element.timer) {
    clearInterval(element.timer);
  }
  
  element.timer = setInterval(function () {
    var leader = element.offsetLeft;
    //什么时候给负值
    var step = target > leader ? 40 : -40;
    
    if (Math.abs(target - leader) >= Math.abs(step)) {
      leader = leader + step;
      element.style.left = leader + "px";
    } else {
      clearInterval(element.timer);
      //抱过去
      element.style.left = target + "px";
      fn && fn();
    }
    
  }, 15);
}