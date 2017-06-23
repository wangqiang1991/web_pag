$(function () {

	var screenHeight = document.documentElement.clientHeight;




	
	//波浪动画
	var marqueeScroll = function (id1, id2, id3, timer) {
		var $parent = $("#" + id1);
		var $goal = $("#" + id2);
		var $closegoal = $("#" + id3);
		$closegoal.html($goal.html());
		function Marquee() {
			if (parseInt($parent.scrollLeft()) - $closegoal.width() >= 0) {
				$parent.scrollLeft(parseInt($parent.scrollLeft()) - $goal.width());
			}
			else {
				$parent.scrollLeft($parent.scrollLeft() + 1);
			}
		}

		setInterval(Marquee, timer);
	}
	var marqueeScroll1 = new marqueeScroll("marquee-box", "wave-list-box1", "wave-list-box2", 20);
	var marqueeScroll2 = new marqueeScroll("marquee-box3", "wave-list-box4", "wave-list-box5", 40);

	window.onload = function(){
		$('#history_div').css({
		height:$('.history_intr').height()
		});
		

		if($('#carousel-example-generic').height()>screenHeight){
			$('#carousel-example-generic').css({
				height:screenHeight,
				overflow:'hidden'
			})
		}

		if($('.com_intr').height()<screenHeight){
			$('.com_intr').css({
				paddingTop:screenHeight-$('.com_intr').height()
			})
		}




	};


	$('#pbSlider0').pbTouchSlider({
	  slider_Wrap: '#pbSliderWrap0',
	  slider_Threshold: 10,
	  slider_Speed:600,
	  slider_Ease:'ease-out',
	  slider_Drag : true,
	  slider_Arrows: {
	    enabled : true
	  },
	  slider_Dots: {
	    class :'.o-slider-pagination',
	    enabled : true
	  },
	  slider_Breakpoints: {
	      default: {
	          height: 850
	      },
	      tablet: {
	          height: 350,
	          media: 1024
	      },
	      smartphone: {
	          height: 250,
	          media: 768
	      }
	  }
	});

	


	
	// $('.carousel').carousel({
	//   interval: 2000
	// })


	data=[
		{'img':'index/img/history0.jpg','number':'01','time':'2016-4.12','intr':'商汇云智慧门店新品发布会'},
		{'img':'index/img/history0.jpg','number':'02','time':'2016-4.12','intr':'商汇云智慧门店新品发布会'},
		{'img':'index/img/history0.jpg','number':'03','time':'2016-4.12','intr':'商汇云智慧门店新品发布会'},
		{'img':'index/img/history0.jpg','number':'04','time':'2016-4.12','intr':'商汇云智慧门店新品发布会'},
		{'img':'index/img/history0.jpg','number':'05','time':'2016-4.12','intr':'商汇云智慧门店新品发布会'}
	];

	
	

	// $.each(data,function(v,k){
	// 	console.log(v,k);

	// 	$('#history_div').append(
	// 		'<ul class="history_intr">'+
	// 			'<li><img src="'++'"><div><p>01</p><p>2016-4.12</p><p>商汇云智慧门店新品发布会</p></div></li>'+
	// 			'<li><div><p>02</p><p>2016-4.25</p><p>商汇云商盟计划面向全国火热招商</p></div><img src="index/img/history1.jpg"></li>'+
	// 		'</ul>'
	// 	)
	// })
	 
		$("#backToP").click(function(){
                $('body,html').animate({scrollTop:0},1000);
                return false;
            });
		 $(window).scroll(function(){
                if ($(window).scrollTop()>10){
                   $("#backToP>a").fadeIn(1500);
                }
                else
                {
                    $("#backToP>a").fadeOut(1500);
                }
            });

	
	if(data.length%2){
		for(var i=0;i<data.length-1;i+=2){
		console.log(data[i],data[i+1],i)
		var ul='<ul class="history_intr">';
		ul+='<li><img src='+data[i].img+'><div><p>'+data[i].number+'</p><p>'+data[i].time+'</p><p>'+data[i].intr+'</p></div></li>';
		ul+='<li><div><p>'+data[i+1].number+'</p><p>'+data[i+1].time+'</p><p>'+data[i+1].intr+'</p></div><img src='+data[i+1].img+'></li>';
		ul+="</ul>";
		$('#history_div').append(ul)
	}
		var lastul='<ul class="history_intr">';
		lastul+='<li><img src='+data[data.length-1].img+'><div><p>'+data[data.length-1].number+'</p><p>'+data[data.length-1].time+'</p><p>'+data[data.length-1].intr+'</p></div></li>';
		lastul+="</ul>";
		$('#history_div').append(lastul)

	}else{
		for(var i=0;i<data.length;i+=2){
		console.log(data[i],data[i+1],i)
		var ul='<ul class="history_intr">';
		ul+='<li><img src='+data[i].img+'><div><p>'+data[i].number+'</p><p>'+data[i].time+'</p><p>'+data[i].intr+'</p></div></li>';
		ul+='<li><div><p>'+data[i+1].number+'</p><p>'+data[i+1].time+'</p><p>'+data[i+1].intr+'</p></div><img src='+data[i+1].img+'></li>';
		ul+="</ul>";
		$('#history_div').append(ul)
		}
	}

	$('#history_div>ul').eq(0).show();
	$('#history_div>ul').eq(1).show();
	var initNumber = 0;
	var maxNumber =$('.history_intr').length;
	$('body').on('click','#next',function(){
		console.log(initNumber,maxNumber)
			if(initNumber < maxNumber-2){
				$('.history_intr').eq(initNumber).hide();
				$('.history_intr').eq(initNumber+2).show();
				initNumber++;
			}
			if(initNumber==maxNumber-2){
				$('#next').hide();
			}
			if(initNumber > 0){
				$('#pre').show();
			}

	})
	$('body').on('click','#pre',function(){
		console.log(initNumber,maxNumber)
			if(initNumber >0){
				$('.history_intr').eq(initNumber+1).hide();
				$('.history_intr').eq(initNumber-1).show();
				initNumber--;
			}
			if(initNumber==0){
				$('#pre').hide();
			}
			if(initNumber < maxNumber-2){
				$('#next').show();
			}
	})


})