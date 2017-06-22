$(function () {


	// $('#activeUl>li').on('mouseenter',function(){
	// 	var number = $(this).index();
	// 	console.log(number)
	// 	$('#carousel-inner>div').removeClass('active');
	// 	$('.carousel-indicators>li').removeClass('active');
	// 	$('#carousel-inner>div').eq(number).addClass('active');
	// 	$('.carousel-indicators>li').eq(number).addClass('active');
	// })
	// 
	var screenHeight = document.documentElement.clientHeight;

	window.onload = function(){

		if($('#carousel-example-generic').height()>screenHeight){
			$('#carousel-example-generic').css({
				height:screenHeight,
				overflow:'hidden'
			})
		}

		if($('.body1').height()>screenHeight){
			$('.body1').css({
				height:screenHeight,
				overflow:'hidden'
			})
		}

		if($('.body2').height()>screenHeight){
			$('.body2').css({
				height:screenHeight,
				overflow:'hidden'
			})
		}

	}


	


 	var slideNumber = 0;
 	var flag = true;
 	$('#activeUl>ol>li').mouseenter(function(){
 		if(flag){
 			flag =false;
 			var number = $(this).index();	
            $("#carousel-example-generic").carousel(number);
            slideNumber = number ;
 			$('#activeUl>img').hide();
 			$('#activeUl>img').eq(slideNumber).show();
 			setTimeout(function(){
 					flag = true;
 			},1000)
 		}	
     });
     
  $('.carousel').carousel({
	  interval: 3000
	})



 	//轮播时执行的事件
 	$("#carousel-example-generic").on('slide.bs.carousel', function () {
 		var activeNumber = $('.carousel-indicators>li.active').attr('data-slide-to');
 		
 		slideNumber++;
 		if(slideNumber == 6){
 			slideNumber = 0;
 		}
 		$('#activeUl>img').hide();
 		$('#activeUl>img').eq(slideNumber).show();

    });


 	$('.carousel-indicators>li').click(function(){
 		var thisNumber = $(this).index();
 		slideNumber = thisNumber - 1;
 	});	
    

	var initNumber = 0;
	var maxNumber = $('.content>div').length;
	
	$('#next').click(function(){
		console.log(initNumber)
		
		$('.content>div').eq(initNumber).animate({
			'opacity':'0'
		},1500).hide();


		
		$('.content>div').eq(initNumber+1).animate({
			'opacity':'1',
		},1500).show();

		

		initNumber++;

		if(initNumber==maxNumber-1){
			$(this).hide();
		}
		if(initNumber>0){
			$('#prev').show();
		}

	});


	$('#prev').click(function(){
		console.log(initNumber)
		

		$('.content>div').eq(initNumber).animate({
			'opacity':'0'
		},1500).hide();


		
		$('.content>div').eq(initNumber-1).animate({
			'opacity':'1',
		},1500).show();


		initNumber--;

		if(initNumber==0){
			$(this).hide();
		}
		if(initNumber<maxNumber-1){
			$('#next').show();
		}

	});


})