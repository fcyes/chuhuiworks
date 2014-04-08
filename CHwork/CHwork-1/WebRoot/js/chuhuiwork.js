//logo动画
function move(){
	$("#1_1").animate({left:"205.5px",top:"227px"},800);
	$("#1_2").animate({left:"259px",top:"338px"},700);
	$("#1_3").animate({left:"292px",top:"285px"},500);
	$("#1_4").animate({left:"292px",top:"307px"},900);
	$("#1_5").animate({left:"326px",top:"258px"},650);
	$("#1_6").animate({left:"365px",top:"225px"},600);
	$("#1_7").animate({left:"312px",top:"226px"},750);
	$("#1_8").animate({left:"217px",top:"338px"},600);
	$("#1_9").animate({left:"348px",top:"338px"},750);
	$("#1_10").animate({left:"396px",top:"365px"},1000);
	$("#2_1").animate({left:"453px",top:"258px"},500);
	$("#2_2").animate({left:"548px",top:"258px"},700);
	$("#2_3").animate({left:"453px",top:"283px"},800);
	$("#2_4").animate({left:"539px",top:"283px"},600);
	$("#2_5").animate({left:"493px",top:"227px"},500);
	$("#2_6").animate({left:"581px",top:"225px"},600);
	$("#2_7").animate({left:"436px",top:"338px"},1000);
	$("#2_8").animate({left:"580px",top:"332px"},600);
	$("#2_9").animate({left:"460px",top:"361px"},700);
	$("#2_10").animate({left:"448.5px",top:"361px"},1000);
	$("#2_11").animate({left:"449.5px",top:"381px"},500);
	$("#2_12").animate({left:"483px",top:"393px"},1000);
	$("#2_13").animate({left:"570px",top:"393px"},900);
	$("#2_14").animate({left:"436px",top:"427px"},700);
	$("#3_1").animate({left:"483px",top:"393px"},600);
	$("#3_2").animate({left:"545px",top:"425px"},500);
	$("#3_3").animate({left:"406px",top:"524px"},900);
	$("#4_1").animate({left:"577px",top:"435px"},1000);
	$("#4_2").animate({left:"640px",top:"410px"},600);
	$("#4_3").animate({left:"658px",top:"400px"},900);
	$("#4_4").animate({left:"665px",top:"425px"},800);
	$("#4_5").animate({left:"697px",top:"425px"},700);
	$("#4_6").animate({left:"697px",top:"475px"},900);
	$("#4_7").animate({left:"697px",top:"516px"},1000);
	$("#5_1").animate({left:"860px",top:"400px"},700);
	$("#5_2").animate({left:"804px",top:"447px"},900);
	$("#5_3").animate({left:"810px",top:"447px"},500);
	$("#5_4").animate({left:"797px",top:"475px"},800);
	$("#5_5").animate({left:"912px",top:"472px"},1000);
	$("#5_6").animate({left:"855px",top:"475px"},500);
	$("#5_7").animate({left:"788px",top:"516px"},600);
	$("#5_8").animate({left:"780px",top:"554px"},1000);
}
function logomove(){
    setTimeout("move()", 1000);
    setTimeout(function logo2_show(){
        $("#6_1").fadeIn(1200);
    }, 2000);
    setTimeout(function logo3_show(){
        $("#6_2").fadeIn(1200);
    }, 2200);
    setTimeout(function logo4_show(){
        $("#6_3").fadeIn(1200);
    }, 2400);
    setTimeout(function moveup(){
      $("#logo").animate({top:"-200px"}, 600).animate({top:"-190px"}, 200).animate({top:"-200px"}, 300);
    },3000);
    var w = document.documentElement.clientWidth;
    setTimeout(function(){
      $("#car_road").animate({left:-(w-1000)/2+"px"}, 600);
    },4000);
}

function logo_to_about(){
	car_run();
	var h = document.documentElement.clientHeight;
	setTimeout(function(){
	  $("#wrapper").animate({top:-h+"px"},800);
	}, 1000);
	setTimeout("about_movie()", 1800);
}
function logo_to_service(){
	car_run();
	var w = document.documentElement.clientWidth;
	setTimeout(function(){
	  $("#wrapper").animate({left:-w+(w-1000)/2+"px"},800);
	}, 1000);
	setTimeout("service_movie()", 1800);
}
function logo_to_works(){
	car_run();
	var h = document.documentElement.clientHeight;
	setTimeout(function(){
	  $("#wrapper").animate({top:h+"px"},800);
    }, 1000);
	setTimeout("works_movie()", 1800);
}
function logo_to_contact(){
	car_run();
	var w = document.documentElement.clientWidth;
	setTimeout(function(){
	  $("#wrapper").animate({left:w+(w-1000)/2+"px"},800);
	}, 1000);
	setTimeout("contact_movie()", 1800);
}
function logo_to_message(){
	/* var h = document.documentElement.clientHeight; */
	/*  $("#wrapper").animate({top:-2*h+"px"},800); */
	$("#message_page").fadeIn(800);
}
function about_to_logo(){	
	car_back();
	about_movie_back();
	setTimeout(function(){$("#wrapper").animate({top:"0px"},800);}, 600);
	
}
function service_to_logo(){	
	car_back();
	service_movie_back();
	var w = document.documentElement.clientWidth;
	setTimeout(function(){$("#wrapper").animate({top:"0px",left:(w-1000)/2+"px"},800);}, 2000);
}
function contact_to_logo(){	
	car_back();
	contact_movie_back();
	var w = document.documentElement.clientWidth;
	setTimeout(function(){$("#wrapper").animate({top:"0px",left:(w-1000)/2+"px"},800);}, 600);
	
}
function works_to_logo(){	
	car_back();
	works_movie_back();
    setTimeout(function(){$("#wrapper").animate({top:"0px"},800);}, 2800);
}
function message_to_logo(){	
	car_back();
	/* $("#wrapper").animate({top:"0px"},800); */
	$("#message_page").fadeOut(800);
}

//about动画
function about_movie(){
	var w = document.documentElement.clientWidth;
	var h = document.documentElement.clientHeight;
	$("#about1").animate({left:w/2-631+"px"},400);
	setTimeout(function(){$("#about2").animate({top:h/2-383+"px"},600);}, 400);
	setTimeout(function(){$("#aboutwrapper").animate({left:w/2-400+271+"px"},600);}, 800);
	setTimeout(function(){$("#aboutback").animate({"top":h/2-335+"px"},200);}, 1200);
}

//about返回首页
function about_movie_back(){
	var w = document.documentElement.clientWidth;
	var h = document.documentElement.clientHeight;
	$("#about1").animate({left:w/2-1041+"px"},400);
	$("#about2").animate({top:h/2-883+"px"},400);
	$("#aboutwrapper").animate({left:w/2-400+1271+"px"},600);
	$("#aboutback").animate({"top":-50+"px"},50);
}

function about(){
	$("#head").mouseover(function (){
		$("#head img").show();
	});
	$("#head").mouseleave(function (){
		$("#head img").hide();
	});
}

//service动画
function service_movie(){
	var w = document.documentElement.clientWidth;
	//var h = document.documentElement.clientHeight;
	$("#s2_1").animate({left:w/2-348-360+"px",top:580+"px"},500);
	$("#s2_2").animate({left:w/2+360+"px",top:580+"px"},500);
	setTimeout(function() {
		$("#s2_1").addClass("s2_1");
		$("#s2_2").addClass("s2_2");
	}, 500);
	setTimeout(function() {
		$("#stick").animate({top:"0px"},400);
	}, 1000);
	setTimeout(function() {
		$("#stick_title").animate({left:"846px"},400);
	}, 1300);
	setTimeout(function() {
		$("#serviceimg").animate({left:"40px"},300);
	}, 1700);
	setTimeout(function() {
		$("#process").animate({top:"480px"},400);
	}, 2000);
	setTimeout(function() {
		$("#serviceback").animate({top:"30px"},400);
	}, 2300);
}

//service返回首页
function service_movie_back(){
	$("#serviceback").animate({top:"-50px"},300);
	$("#process").animate({top:"1080px"},1000);
	setTimeout(function() {
		$("#serviceimg").animate({left:"940px"},400);
	}, 200);
	setTimeout(function() {
		$("#stick_title").animate({left:"1046px"},300);
	}, 400);
	setTimeout(function() {
		$("#stick").animate({top:"-430px"},400);
	}, 600);
	setTimeout(function() {
		var w = document.documentElement.clientWidth;
		var h = document.documentElement.clientHeight;
		$("#s2_1").animate({left:w/2-348+"px",top:h/2-123+"px"},300);
		$("#s2_2").animate({left:w/2+"px",top:h/2-123+"px"},300);
		setTimeout(function() {
			$("#s2_1").removeClass("s2_1");
			$("#s2_2").removeClass("s2_2");
		}, 300);
	}, 800);
}

//contact动画
function contact_movie(){
	ticker();
	$("#contactback").animate({opacity:"1"},3000);
	$("#contact1").animate({opacity:"1"},200);
	$("#contact1").addClass("contact1");
	$("#content").animate({left:"200px"}, 400).animate({left:"190px"}, 200).animate({left:"200px"}, 300);
	$("#title").animate({left:"200px"}, 400).animate({left:"190px"}, 200).animate({left:"200px"}, 300);;
	var h = document.documentElement.clientHeight;
	$("#contact1_1").css({"top":h});
	$("#contact1_1").animate({top:"430px"}, 400).animate({top:"440px"}, 200).animate({top:"430px"}, 300);
    }

//contact返回首页
function contact_movie_back(){
	$("#contactback").animate({opacity:"0"},50);
	$("#contact1").animate({opacity:"0"},200);
	$("#contact1").removeClass("contact1");
	$("#content").animate({left:"-570px"}, 400);
	$("#title").animate({left:"-570px"}, 400);
	var h = document.documentElement.clientHeight;
	$("#contact1_1").animate({top:h+"px"}, 400); 
    }
//打字效果
function ticker(){
	jQuery("#ticker").ticker({
		rate: 30,
		delay: 400
	}).trigger("play").trigger("stop");
}

//works动画
function works_movie(){
    var w = document.documentElement.clientWidth;
    var h = document.documentElement.clientHeight;
    $("#works1").animate({left:w/2-241-380+"px"},600).animate({left:w/2-241-370+"px"},200).animate({left:w/2-241-380+"px"},300);
    $("#works2").animate({left:w/2+380+"px"},600).animate({left:w/2+370+"px"},200).animate({left:w/2+380+"px"},300);
    $("#worksback").animate({left:w/2+327+"px",top:h/2-340+"px"},1600);
    setTimeout(function(){$("#sc_menu_wrapper").animate({opacity:1},1000);}, 1100);
  }

//works返回首页
function works_movie_back(){
    var w = document.documentElement.clientWidth;
    //var h = document.documentElement.clientHeight;
    $("#sc_menu_wrapper").animate({opacity:0},1000);
    $("#worksback").animate({left:w/2+327+"px",top:-100+"px"},300);
    setTimeout(function(){
    	$("#works1").animate({left:w/2-241+"px"},600).animate({left:w/2-251+"px"},200).animate({left:w/2-241+"px"},300);
    	$("#works2").animate({left:w/2+"px"},600).animate({left:w/2+10+"px"},200).animate({left:w/2+"px"},300);
    }, 1000);
}

//works
function works(){
	//图片全屏
    $("a.fancybox").fancybox({
    	wrapCSS : 'fancybox-custom',
    	closeClick : true,
    	openEffect : 'none',
    	helpers : {
    		title : {
    			type : 'inside'
    		},
    		overlay : {
    			css : {
    				/* 'background' : 'rgba(238,238,238,0.85)' */
    				'background' : 'rgba(000,000,000,0.85)'
    			}
    		}
    	} 
    });
    
    //图片放大一点
    $("ul.thumb li a img").hover(function() {
    	var h = $(this).height();
    	var w = $(this).width();
    	var l = $(this).offset().left;
    	var t = $(this).position().top;
    	var mt = $(this).parent().parent().height();
    	$(this).animate({opacity:0.2,marginLeft: -15+"px",width: w+30+"px",height: h+30+"px"}, 0.000000001);
    	$(".large").css({"left" : l-w-20+"px","top": t-h/2+mt-50+"px"}).show();

      /* $(".large").hover(function() {
      $(".large").css({"left" : l-w-20+"px","top": t-h/2+mt-50+"px"}).show();
      o.css({marginLeft: -15+"px",
      width: w+30+"px",
      height: h+30+"px"});
      },function(){
      o.css({marginLeft: 0+"px",width: w+"px",height: h+"px"});
      }); */

    	} , function(h,w) {
    		$(".large").hide();
    		$(this).animate({opacity:1,marginLeft: 0+"px",width: w+"px",height: h+"px"}, 0.000001);
    }); 

    //鼠标滚动图片
    function makeScrollable(wrapper, scrollable){
    	var wrapper = $(wrapper), scrollable = $(scrollable);
    	scrollable.hide();
    	var loading = $('<div class="loading">Loading...</div>').appendTo(wrapper);
    	var interval = setInterval(function(){
    		var images = scrollable.find('img');
    		var completed = 0;
    		images.each(function(){
    			if (this.complete) completed++;
    		});
    		if (completed == images.length){
    			clearInterval(interval);
    			setTimeout(function(){
    				loading.hide();
    				wrapper.css({overflow: 'hidden'});
    				scrollable.slideDown('slow', function(){
    					enable();
    				});
    			}, 1000);
    		}
    	}, 100);
    	function enable(){
    		var inactiveMargin = 99;
    		var wrapperWidth = wrapper.width();
    		var wrapperHeight = wrapper.height();
    		var scrollableHeight = scrollable.outerHeight() + 5*inactiveMargin;
    		var tooltip = $('<div class="sc_menu_tooltip"></div>')
    			.css('opacity', 0)
    			.appendTo(wrapper);
    		var lastTarget;
    		wrapper.mousemove(function(e){
    			lastTarget = e.target;
    			var wrapperOffset = wrapper.offset();
    			var tooltipLeft = e.pageX - wrapperOffset.left;
    			tooltipLeft = Math.min(tooltipLeft, wrapperWidth - 75);
    			var tooltipTop = e.pageY - wrapperOffset.top + wrapper.scrollTop() - 40;
    			if (e.pageY - wrapperOffset.top < wrapperHeight/2){
    				tooltipTop += 80;
    			}
    			tooltip.css({top: tooltipTop, left: tooltipLeft});
    			var top = (e.pageY - wrapperOffset.top) * (scrollableHeight - wrapperHeight) / wrapperHeight - inactiveMargin;
    			if (top < 0){
    				top = 0;
    			}
    			wrapper.scrollTop(top);
    		});
    		wrapper.mouseleave(function(){
    			lastTarget = false;
    			tooltip.stop(true).css('opacity', 0).text('');
    		});
    	}
    }
    $(function(){
    	makeScrollable("div.sc_menu_wrapper", "div.sc_menu");
    });
}

//contact
function contact(){
	var aP = $('#content span');
	var aLi = $('#content .bd-box li');
	var aImg = $('#content .bd-box li img');
	var aSpan = $('#content .bd-box li span');
	aLi.each(function(index){
		$(this).mouseover(function(){
			aP.eq(index).fadeIn(100);
			aSpan.eq(index).stop();
			aImg.eq(index).stop();
			aImg.eq(index).css({zIndex:1}).animate({
				top:37,
				height:0
			},80,'',function(){
				$(this).hide();
				aSpan.eq(index).show().css({zIndex:2}).animate({
					top:0,
					height:75
				},80);
			});
		});
		$(this).mouseout(function(){
			aP.eq(index).fadeOut(100);
			aSpan.eq(index).stop();
			aImg.eq(index).stop();
			aSpan.eq(index).css({zIndex:1}).animate({
				top:37,
				height:0
			},80,'',function(){
				$(this).hide();
				aImg.eq(index).show().css({zIndex:2}).animate({
					top:0,
					height:75
				},80);
			});
		});
	});
} 

//service
function service(){
	var bP = $('#stick_process span');
	var bLi = $('#process .pro-box li');
	var bImg = $('#process .pro-box li img');
	var bSpan = $('#process .pro-box li span');
	bLi.each(function(index){
    	$(this).mouseover(function(){
    		$("#stick_title").hide();
    		$("#process_content span").eq(index).show();
    		bP.eq(index).show().animate({left:0+"px"},100);
    		bSpan.eq(index).stop();   
    		bImg.eq(index).stop();
    		bSpan.eq(index).animate(function(){},10 ,'',function(){   
    			bSpan.eq(index).show().css({zIndex:2}).animate({
    				top:67
    			},100);
    		});  
    	}); 
    	$(this).mouseout(function(){
    		$("#stick_title").show();
    		$("#process_content span").eq(index).hide();
    		bP.eq(index).hide().animate({left:41+"px"},100);
    		bSpan.eq(index).stop();
    		bImg.eq(index).stop();
    		bSpan.eq(index).animate(function(){},10 ,'',function(){
    			bSpan.eq(index).show().css({zIndex:2}).animate({
    				top:111
    			},100);
    		});  
    	});
	});
}

function car_run(){
	var w = document.documentElement.clientWidth;
    $("#about_car").animate({left:w+"px"},Math.random()*1000);
    $("#service_car").animate({left:w+"px"},Math.random()*1000);
    $("#works_car").animate({left:w+"px"},Math.random()*1000);
    $("#contact_car").animate({left:w+"px"},Math.random()*1000);
    var gasabout = $("#gas_about").fadeOut(150).fadeIn(150);
    var gasservice = $("#gas_service").fadeOut(150).fadeIn(150);
    var gasworks = $("#gas_works").fadeOut(150).fadeIn(150);
    var gascontact = $("#gas_contact").fadeOut(150).fadeIn(150);
    setInterval(function gas(){
    gasabout;
    }, Math.random()*1000);
    setInterval(function gas(){
    gasservice;
    }, Math.random()*1000);
    setInterval(function gas(){
    gasworks;
    }, Math.random()*1000);
    setInterval(function gas(){
    gascontact;
    }, Math.random()*1000);
    setTimeout(function(){
    	clearInterval(gasabout);
    	clearInterval(gasservice);
    	clearInterval(gasworks);
    	clearInterval(gascontact);
    }, 1000);
}

function car_back() {
	$("#about_car").css({"left":"0px"});
	$("#works_car").css({"left":"0px"});
	$("#service_car").css({"left":"0px"});
	$("#contact_car").css({"left":"0px"});
}