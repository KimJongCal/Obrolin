var current = 1; //keeps track of the current div
var height = $('.roles').height(); //the height of the roles div
var numberDivs = $('.roles').children().length; //the number of children of the roles div
var first = $('.roles div:nth-child(1)'); //the first div nested in roles div
setInterval(function() {
    var number = current * -height;
    first.css('margin-top', number + 'px');
    if (current === numberDivs) {
        first.css('margin-top', '0px');
        current = 1;
    } else current++;
}, 2000);

$(function(){
	Profile.load();
});

Profile = {
	load:function(){
		this.links();
		this.social();
		this.accordion();
	},
	links:function(){
		$('a[href="#"]').click(function(e){
			e.preventDefault();
		});
	},
	social:function(){
		$('.accordion .about-me .photo .photo-overlay .plus').click(function(){
			$('.social-link').toggleClass('active');
			$('.about-me').toggleClass('blur');
		});
		$('.social-link').click(function(){
			$(this).toggleClass('active');
			$('.about-me').toggleClass('blur');
		});
	},
	accordion:function(){
		var subMenus = $('.accordion .sub-nav').hide();
		$('.accordion > a').each(function(){
			if($(this).hasClass('active')){
				$(this).next().slideDown(100);
			}
		});
		$('.accordion > a').click(function(){
			$this = $(this);
			$target =  $this.next();
			$this.siblings('a').removeAttr('class');
			$this.addClass('active');
			if(!$target.hasClass('active')){
				subMenus.removeClass('active').slideUp(100);
				$target.addClass('active').slideDown(100);
			}
			return false;
		});
	}
}