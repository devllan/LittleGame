$(function(){var t,i,e,n,o,s=$("#impres-wrap"),l=$("#offer"),r=null,c=l.find(".offer-list"),p=isMobile();function a(t,i){for(var e="",n=0;n<2*i;n++)e+="<li></li>";t.append(e),t.html(t.html()).width(function(){var t=$(this).children();return t.length*(t.eq(0).width()+parseInt(t.eq(0).css("margin-right")))}),t.each(function(){var t=$(this),i=t.data("dir");t.data.timer=null,i&&"right"==i&&t.css("left",t.parent().width()-t.width()+"px")})}(t=s.find(".mobile-con")).next(),i=$("#video"),e=t.children(".scroll.left").children("ul"),n=t.children(".scroll.right").children("ul"),o=t.children(".scroll-img").children("ul"),t.children(".scroll").css({left:"0"}),setInterval(function(){i.position().top<=-i.height()/2&&i.css("top","0px"),i.css("top",i.position().top-2+"px")},30),setInterval(function(){o.position().left<=-o.width()/2&&o.css("left","0px"),o.css("left",o.position().left-2+"px")},30),setInterval(function(){e.position().left<=-e.width()/2&&e.css("left","0px"),e.css("left",e.position().left-2+"px")},30),setInterval(function(){n.position().left>=n.parent().width()-n.width()/2&&n.css("left",n.parent().width()-n.width()+"px"),n.css("left",n.position().left+2+"px")},30),r=setInterval(function(){c.position().top<-c.height()/2&&c.css("top","0px"),c.stop().animate({top:c.position().top-c.children(":first").outerHeight()+"px"},500)},2e3),l.mouseenter(function(){p||(r=setInterval(function(){c.position().top<-c.height()/2&&c.css("top","0px"),c.stop().animate({top:c.position().top-c.children(":first").outerHeight()+"px"},500)},2e3))}).mouseleave(function(){p||clearInterval(r)}),a($(".scroll>ul"),10),a($(".scroll-img>ul"),6),$(".adv-pub").on("mouseenter","div",function(){$(this).addClass("active")}).on("mouseleave","div",function(){$(this).removeClass("active")});var f=$("#game-info>.item");p?setTimeout(function(){f.addClass("active")},2e3):$(".container").on("scroll",function(){var t=$(this).scrollTop();1400<=t&&t<2e3?f.addClass("active"):(t<500||2600<t)&&f.removeClass("active")})});