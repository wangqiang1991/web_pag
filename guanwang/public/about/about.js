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





 		//中心点横坐标
        var dotLeft = ($(".container").width()-$(".dot").width())/2;
        //中心点纵坐标
        var dotTop = ($(".container").height()-$(".dot").height())/2;
        //起始角度
        var stard = 0;
        //半径
        var radius = 200;
        //每一个BOX对应的角度;
        var avd = 270/$(".box").length;
        //每一个BOX对应的弧度;
        var ahd = avd*Math.PI/180;
        
        
        
        //设置圆的中心点的位置
        $(".dot").css({"left":dotLeft,"top":dotTop});
        $(".box").each(function(index, element){
        	console.log(index)
            $(this).css({"left":Math.sin((ahd*index))*radius+dotLeft,"top":Math.cos((ahd*index))*radius+dotTop});
        });



})