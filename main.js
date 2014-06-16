
$( document ).ready(function() {


	/*Aerial View Map */

	//IE fallback to offset map pins correctly
	if(!Modernizr.csstransforms){
		$('.map-pin').each(function(i){
			$(this).css('margin-left','-' + Math.floor($(this).width()/2) + 'px')
			$(this).css('margin-top','-' + $(this).height());
		});
	}
	
	//Zooms into pin, and fades in overlay
	$('.map-pin').click(function(){
		var left = $(this).position().left + ($(this).width()/2);
		var top = $(this).position().top + ($(this).height()/2);
		$('#map-viewport').css('transform-origin', left +'px ' + top + 'px').addClass('anim-map-pin-zoom');
		$('#map-overlay').attr('src',$(this).data('linked-image')).delay(200).fadeIn(1000);
	});	
	
	//Closes overlay
	$('#map-overlay').click(function(){
		$('#map-viewport').removeClass('anim-map-pin-zoom');
		$('#map-overlay').fadeOut(500);
	});
	
});