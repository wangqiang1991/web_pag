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
 	$('#activeUl>ol>li').click(function(){
 			var number = $(this).index();	
            $("#carousel-example-generic").carousel(number);
 		$('#activeUl>img').hide();
 		$('#activeUl>img').eq(slideNumber).show();
           	
     });

 	//轮播时执行的事件
 	$("#carousel-example-generic").on('slide.bs.carousel', function () {
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
	console.log(maxNumber)
	$('#next').click(function(){

		$('.content>div').eq(initNumber).children('.front').animate({
			left:'8%',
			opacity:'0'	
		},1000);
		$('.content>div').eq(initNumber).children('.back').animate({
			marginLeft:'-20px',
			opacity:'0'	
		},1000);
		$('.content>div').eq(initNumber).delay(1000).animate({
			opacity:'0'	
		},1000);


		$('.content>div').eq(initNumber+1).children('.front').animate({		
			opacity:'1',
			left:'5%'	
		},1000);
		$('.content>div').eq(initNumber+1).children('.back').animate({
			marginLeft:'0',
			opacity:'1'	
		},1000);
		$('.content>div').eq(initNumber+1).delay(1000).animate({
			opacity:'1'
		},1000);

		

		initNumber++;

		if(initNumber==maxNumber-1){
			$(this).hide();
		}
		if(initNumber>0){
			$('#prev').show();
		}

	});


	$('#prev').click(function(){

		

		$('.content>div').eq(initNumber).children('.front').animate({
			left:'3%',	
			opacity:'0'
		},1000);
		$('.content>div').eq(initNumber).children('.back').animate({
			marginLeft:'20px',
			opacity:'0'
		},1000);
		$('.content>div').eq(initNumber).delay(1000).animate({
			opacity:'0'	
		},1000);

		
		$('.content>div').eq(initNumber-1).children('.front').animate({		
			opacity:'1',
			left:'5%'	
		},1000);
		$('.content>div').eq(initNumber-1).children('.back').animate({
			marginLeft:'0',
			opacity:'1'	
		},1000);
		$('.content>div').eq(initNumber-1).delay(1000).animate({
			opacity:'1'
		},1000);

		initNumber--;

		if(initNumber==0){
			$(this).hide();
		}
		if(initNumber<maxNumber-1){
			$('#next').show();
		}

	});


})