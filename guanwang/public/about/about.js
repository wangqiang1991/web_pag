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


    var screenHeight = document.documentElement.clientHeight;
    var screenWidth = document.documentElement.clientWidth;
    console.log(screenWidth)
    window.onload = function () {
        // if($('header').height()>=screenHeight){
        //     $('header').css({
        //         height:screenHeight,
        //         overflow:'hidden'
        //     })
        // }
        if($('.culture').height()>screenHeight){
            $('.culture').css({
                height:screenHeight,
                overflow:'hidden'
            })
        }

        if(screenWidth>1400)
            $('#shici').css({
                marginLeft:-$('#shici').width()/2,
                marginTop:-$('#shici').height()/2   
            })
        // console.log($('#shici').width())
        


    }




 		//中心点横坐标
        var dotLeft = ($(".container").width()-$(".dot").width())/2;
        //中心点纵坐标
        var dotTop = ($(".container").height()-$(".dot").height())/2;
        //半径
        var radius = 200;
        //每一个BOX对应的角度;
        var avd = 270/$(".box").length;
        //每一个BOX对应的弧度;
        var ahd = avd*Math.PI/180;
        
        
        
        //设置圆的中心点的位置
        $(".dot").css({"left":dotLeft,"top":dotTop});
        $(".box").each(function(index, element){
            $(this).css({"left":Math.sin((ahd*index))*radius+dotLeft,"top":Math.cos((ahd*index))*radius+dotTop});
        });


        var initnumber = 0;
        var datalength = $('#history_div>div').length;	
        var angle = 270/datalength;
        var starangle =0;
        var endangle =0;
        $('#down').click(function(){
        	if(initnumber<datalength-1){
        				clearInterval(timer);
        				$('#history_div>div').eq(initnumber).hide();
        				$('#dot>img').eq(initnumber).hide();
        				starangle = angle*initnumber
        				$('#tip').css({
        							'transform':'rotate('+-starangle+'deg)'
        						});
        				$('.box').eq(initnumber).removeClass('tipchoice')			
        				initnumber++;
        				$('#history_div>div').eq(initnumber).show();
        				$('#dot>img').eq(initnumber).show();
        				endangle = angle*initnumber;
        				var aveangle = starangle;
        				var timer =setInterval(function(){
        						$('#tip').css({
        							'transform':'rotate('+-aveangle+'deg)'
        						});	
        						aveangle+=angle/40;
        						console.log(aveangle);
        						if(aveangle > endangle){
        							clearInterval(timer);
        						}
        				},50);
        				setTimeout(function(){

        					$('.box').eq(initnumber).addClass('tipchoice')
        				},2000)
        			}
        	if(initnumber == datalength-1){
        		$(this).hide();
        	}
        	if(initnumber>0){
        		$('#up').show()
        	}
        })

         $('#up').click(function(){
        	if(initnumber>=1){
        				clearInterval(timer);
        				$('#history_div>div').eq(initnumber).hide();
        				$('#dot>img').eq(initnumber).hide();
        				starangle = angle*initnumber
        				$('#tip').css({
        							'transform':'rotate('+-starangle+'deg)'
        						});
        				$('.box').eq(initnumber).removeClass('tipchoice')			
        				initnumber--;
        				$('#history_div>div').eq(initnumber).show();
        				$('#dot>img').eq(initnumber).show();
        				endangle = angle*initnumber;
        				var aveangle = starangle;
        				var timer =setInterval(function(){
        						$('#tip').css({
        							'transform':'rotate('+-aveangle+'deg)'
        						});	
        						aveangle-=angle/40;
        						console.log(aveangle);
        						if(aveangle < endangle){
        							clearInterval(timer);
        						}
        				},50);
        				setTimeout(function(){

        					$('.box').eq(initnumber).addClass('tipchoice')
        				},2000)
        			}
        	if(initnumber == 0){
        		$(this).hide();
        	}
        	if(initnumber <= datalength-1){
        		$('#down').show()
        	}
        })


         $('#scene').parallax();   
   				

})