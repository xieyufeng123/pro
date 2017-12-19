$(function(){
//按钮缩进
  var isOpen=false;
    $(".my-res-btn").on('click',function(){
    if(isOpen===false){
      $(".my-nav-list").removeClass('menuClose').addClass("menuOpen");
      isOpen=true;
    }else{
      $(".my-nav-list").removeClass('menuOpen').addClass("menuClose");
      isOpen=false;
    }
  });
  var isToggleOpen=false;
  $("[data-toggle='menu-toggle']").on('click',function(e){
    e.preventDefault();
    console.log("click OK");
    if(isToggleOpen===false){
      $(this).parent().parent().removeClass('menuOpen').addClass("menuOpenR");
      isToggleOpen=true;
    }else{
      $(this).parent().parent().removeClass('menuOpenR').addClass("menuOpen");
      isToggleOpen=false;
    }
  });
  //隐藏导航栏
  $(window).bind("scroll",function(){
    var top=$(this).scrollTop();
    //console.log(top);
    if(top>0){
      $(".my-nav-main").removeClass('navOpen').addClass('navClose');
      $(".my-nav-list").removeClass('navOpen').addClass('navClose');
      $(".my-shopping-list").removeClass('shopOpen').addClass('shopClose');
    }else{
      $(".my-nav-main").removeClass('navClose').addClass('navOpen');
      $(".my-nav-list").removeClass('navClose').addClass('navOpen');
      $(".my-shopping-list").removeClass('shopClose').addClass('shopOpen');
    }
    if(top>800){
      $(".my-banner-main").css({opacity:0});
    }else{
      //console.log(top/500);
      var opc=1+(-top/800);
      $(".my-banner-main").css({opacity:opc});
    }
  })
});
//遮罩滑动效果
var time=200;
//for(var i=0;i<$(".hot_show_child").length;i++){mouseleave
//$(".hot_show").off("mouseenter");
$(".hot_show_child").bind("mouseenter mouseleave",function(e) {
  var w = $(this).width();
  var h = $(this).height();
  var x = (e.pageX - this.offsetLeft - (w / 2)) * (w > h ? (h / w) : 1);
  var y = (e.pageY - this.offsetTop - (h / 2)) * (h > w ? (w / h) : 1);
  var direction = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4; //direction的值为“0,1,2,3”分别对应着“上，右，下，左”
  var eventType = e.type;
  var dirName = new Array('上方','右侧','下方','左侧');
  var shade=$(this).children(".hot_zz");
  console.log(shade);
  shade.css({margin:0});
  if(e.type == 'mouseenter'){
    switch (direction){
      case 0:
        shade.css({marginTop:-250});shade.stop().animate({marginTop:0},time);
        console.log(1);
        break;
      case 1:
        shade.css({marginLeft:180});shade.stop().animate({marginLeft:0},time);
        console.log(2);
        break;
      case 2:
        shade.css({marginTop:250});shade.stop().animate({marginTop:0},time);
        console.log(3);
        break;
      case 3:
        shade.css({marginLeft:-180});shade.stop().animate({marginLeft:0},time);
        console.log(4);
        break;
    }
  }else{
    switch (direction){
      case 0:
        shade.stop().animate({marginTop:-250},time);
        console.log(1);
        break;
      case 1:
        shade.stop().animate({marginLeft:180},time);
        console.log(2);
        break;
      case 2:
        shade.stop().animate({marginTop:250},time);
        console.log(3);
        break;
      case 3:
        shade.stop().animate({marginLeft:-180},time);
        console.log(4);
        break;
    }
  }

});
//遮罩滑动随鼠标方向
window.onresize=function(){
  //console.log("屏幕宽度变化");
  var width=document.documentElement.clientWidth+17;
  if(width<=767){
    //console.log(width);
    console.log('屏幕为 超小屏');
  }else{
    console.log('屏幕为大屏');

  }
};