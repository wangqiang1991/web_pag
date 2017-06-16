$(function () {
	$('#message').animate({
		opacity:'1'
	},2000);

	
	 var screenHeight = document.documentElement.clientHeight;
    window.onload = function () {
        if($('header').height()>screenHeight){
            $('header').css({
                height:screenHeight,
                overflow:'hidden'
            })

           var height =$('header>img').height()*0.1;
           $('#message').css({
           	height:height
           })

        }
    }


	
})