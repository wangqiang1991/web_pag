$(function () {


	// $('#activeUl>li').on('mouseenter',function(){
	// 	var number = $(this).index();
	// 	console.log(number)
	// 	$('#carousel-inner>div').removeClass('active');
	// 	$('.carousel-indicators>li').removeClass('active');
	// 	$('#carousel-inner>div').eq(number).addClass('active');
	// 	$('.carousel-indicators>li').eq(number).addClass('active');
	// })


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