 $(function(){
 	var impresWrap = $("#impres-wrap");
 	var offer = $("#offer");
	var	speed = 2;
	var timerl = null, timerr = null, timerImg = null, timerVideo = null, timerOffer = null;
	var offerList = offer.find('.offer-list');
	var isMobileFlag = isMobile();
    autoPlay();
	function autoPlay(){
		var _this = impresWrap.find('.mobile-con');
		var next = _this.next();
		var video = $("#video");
		var left = _this.children('.scroll.left').children('ul');
		var right = _this.children('.scroll.right').children('ul');
		var leftImg = _this.children('.scroll-img').children('ul');
        _this.children('.scroll').css({'left' : '0'});
		timerVideo = setInterval(function(){
			if (video.position().top <= -video.height()/2) {
				video.css('top', '0px');
			}
			video.css('top', (video.position().top-speed) + 'px');
		},30);
		timerImg = setInterval(function(){
			if (leftImg.position().left <= -leftImg.width()/2) {
				leftImg.css('left', '0px');
			}
			leftImg.css('left', (leftImg.position().left-speed) + 'px');
		},30);
			
		timerl = setInterval(function(){
			if (left.position().left <= -left.width()/2) {
				left.css('left', '0px');
			}
			left.css('left', (left.position().left-speed) + 'px');
		},30);
		timerr = setInterval(function(){
			if ( right.position().left >= (right.parent().width() - right.width()/2) ) {
				right.css('left', (right.parent().width()-right.width()) + 'px');
			}
			right.css('left', (right.position().left+speed) + 'px');
		},30);
		timerOffer = setInterval(function(){
			if (offerList.position().top < -offerList.height()/2) {
				offerList.css('top','0px')
			}
			offerList.stop().animate({
				'top' : (offerList.position().top - offerList.children(':first').outerHeight()) + 'px'
			},500);
		},2000);
	}

	
	function fnFade(obj,callback){
		if (!obj.hasClass('no-fade')) {
			obj.hide();
			obj.stop().fadeIn(1000,function(){
				if (callback && typeof callback == 'function') {
					callback();
				}
			});
			
		}
	}
	
	offer.mouseenter(function(){
		if(!isMobileFlag){
			timerOffer = setInterval(function(){
				if (offerList.position().top < -offerList.height()/2) {
					offerList.css('top','0px')
				}
				offerList.stop().animate({
					'top' : (offerList.position().top - offerList.children(':first').outerHeight()) + 'px'
				},500);
			},2000);
		}
	}).mouseleave(function(){
		if(!isMobileFlag){
			clearInterval(timerOffer);
		}
	});
	
	goScrollInit($(".scroll>ul"),10);
	goScrollInit($(".scroll-img>ul"),6);
	function goScrollInit(list,len){
		var liStr = '';
		for (var i=0; i<2*len; i++) {
			liStr += '<li></li>';
		}
		list.append(liStr);
		list.html(list.html()).width(function(){
			var child = $(this).children();
			return child.length * (child.eq(0).width() + parseInt(child.eq(0).css('margin-right')));
		});
		list.each(function(){
			var _this = $(this);
			var dir = _this.data('dir');
			_this.data['timer'] = null;
			if (dir && dir == 'right') {
				_this.css('left',(_this.parent().width()-_this.width()) + 'px')
			}
		});
	}
	
	$(".adv-pub").on('mouseenter','div',function(){
		$(this).addClass('active');
	}).on('mouseleave','div',function(){
		$(this).removeClass('active');
	});

    var gameItem = $('#game-info>.item');
    if( isMobileFlag ){
        setTimeout(function(){
            gameItem.addClass('active');
        },2000);
    }else{
        $('.container').on('scroll',function(){
            var h = $(this).scrollTop();
            if( h >= 1400 && h < 2000){
                gameItem.addClass('active');
            }else if( h < 500 || h > 2600){
                gameItem.removeClass('active');
            }
        });
    } 

		
		
	
 });
