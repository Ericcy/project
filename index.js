/**
 * Created by Administrator on 2017/5/18.
 */
  //顶部二维码部分
(function () {
  var wxCode = document.getElementById("wxCode");
  var wx_top = wxCode.children[0];
  var big_wx = wxCode.children[1];

  wx_top.onmouseover = function () {
    big_wx.style.display = "block";
  }
  wx_top.onmouseout = function () {
    big_wx.style.display = "none";
  }
})();

//banner轮播图

(function () {
  var slide = document.getElementById("slide");
  var rightBtn = document.getElementById("rightBtn");
  var leftBtn = document.getElementById("leftBtn");
  var lang_con = slide.children;

  var down = document.getElementById("down");
  var lbtn = down.children[0];
  var rbtn = down.children[1];

  var count = 0;
  rightBtn.onclick = function () {
    if (count < lang_con.length - 1) {
      count++;
      var target = -count * 851;
      animate(slide, {left: target});
    }
    //slide.style.left=-851+"px";
  }
  leftBtn.onclick = function () {
    if (count > 0) {
      count--;
      var target = -count * 851;
      animate(slide, {left: target});
    }
  }

  lbtn.onclick = function () {
    if (count > 0) {
      count--;
      var target = -count * 851;
      animate(slide, {left: target});
    }
  }
  rbtn.onclick = function () {
    if (count < lang_con.length - 1) {
      count++;
      var target = -count * 851;
      animate(slide, {left: target});
    }
  }
})();

//用户反馈
//$(function () {
//   $(".con_b2 .tj").click(function () {
//      var content=$(".con_b2 textarea").value;
//     if(content.length==0){
//       $(".con_b2 textarea").value="";
//       return;
//     };
//     var li=document.createElement("li");
//     var $ul=$(".con_text ul");
//     $ul.insertBefore(li,$ul.children[0]);
//     li.innerText=content;
//     var button=document.createElement("input");
//     button.type="button";
//     button.value="删除";
//     li.appendChild(button);
//     $(".button").click(function () {
//       $ul.removeChild(this.parentNode);
//     });
//     $(".con_b2 textarea").value="";
//   });
//});

(function () {
  var con_text = document.getElementsByClassName("con_text")[0];
  var ul = con_text.getElementsByTagName("ul")[0];
  var tj = document.getElementsByClassName("tj")[0];
  var textarea = document.getElementsByTagName("textarea")[0];
  tj.onclick = function () {
    var content = textarea.value.trim();
    if (content.length == 0) {
      textarea.value = "";
      return;
    }
    var li = document.createElement("li");
    ul.insertBefore(li, ul.children[0]);
    li.innerText = content;
    //var button=document.createElement("input");
    //button.type="button";
    //button.value="删除";
    //li.appendChild(button);
    //button.onclick=function () {
    //  ul.removeChild(button.parentNode);
    //}
    textarea.value = "";
  }
  textarea.onkeydown = function (e) {
    e = e || window.event;
    //console.log(e);
    if (e.keyCode == 13) {
      tj.click();
    }
  }

})();

//$(function () {
//
//  //找对象
//  $con_text = $(".con_text");
//  $ul = $(".con_text ul");
//  $li = $(".con_text ul li");
//  $tj = $(".tj");
//  $con_b2 = $(".con_b2");
//  $textarea = $(".con_b2 textarea");
//
//    $input = $("<input>");
//    $input.attr("type", "button");
//    $input.val("删除");
//    $input.appendTo($li);
//
//
//
//  //给提交按钮注册点击事件
//  $tj.click(function () {
//    var content = $textarea.val();
//    console.log(content.trim());
//    if (content.length == 0) {
//      $textarea.val("");
//      return;
//    }
//    var $li = $("<li></li>");
//    $ul.prepend($li);
//    $li.text(content);
//
//    $input = $("<input>");
//    $input.attr("type", "button");
//    $input.val("删除");
//    $input.appendTo($li);
//
//
//    $ul.on("click","li", (function () {
//      $li.remove();
//    }));
//
//    $textarea.val("");
//  });
//  //$ul.on("click","li", (function () {
//  //  $li.remove();
//  //}));
//});


//手风琴
//$(function () {
//  var $li=$(".b_nav li");
//  for(var i = 0; i < $li.length; i++) {
//    $li.mouseenter(function () {
//      $(this).stop().animate({"width": 350}).siblings().stop().animate({"width": 50});
//    });
//    $li.mouseleave(function () {
//      $li.stop().animate({width: 100});
//    });
//  }
//
//});
