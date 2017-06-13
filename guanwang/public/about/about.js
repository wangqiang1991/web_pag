$(function () {
	
	$('.culture_nav li').click(function(){
		var thisNumber = $(this).index();
		$('.culture_content>div').hide();
		$('.culture_nav li').removeClass('_choice');
		$(this).addClass('_choice');
		if(thisNumber == 0){
			$('#yuanjing').show();
		}
		if(thisNumber == 1){
			$('#jiazhi').show();
		}
		if(thisNumber == 2){
			$('#shici').show();
		}
		if(thisNumber == 3){
			$('#shiming').show();
		}
		if(thisNumber == 4){
			$('#jinsheng').show();
		}
	})


	$('.explain').click(function(){
		   var _class =  $(this).attr('class');
		 if(_class == 'glyphicon glyphicon-menu-down explain'){
		 	$(this).parent().children().eq(2).css({
				height:'auto'
			});
			$(this).removeClass('glyphicon glyphicon-menu-down explain')
			$(this).addClass('glyphicon glyphicon-menu-up explain')
		 }  
		 if(_class == 'glyphicon glyphicon-menu-up explain'){
		 	$(this).parent().children().eq(2).css({
				height:'60px'
			});
			$(this).removeClass('glyphicon glyphicon-menu-up explain')
			$(this).addClass('glyphicon glyphicon-menu-down explain')
		 } 
		
	})


})