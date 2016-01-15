var volume = 60;
$(document).ready(function(){
	var myPlaylist = new jPlayerPlaylist({
		jPlayer: "#mediaContainer",
		cssSelectorAncestor: "#mediaPlayer",
		cssSelector: {
			play: '#muted-dream',
			pause: '#pauseButton',
		},
	}, [
	{
		title:"The Branches",
		artist:"Stanlin Joseph",
		mp3:"media/The Branches.mp3",
	}
	], {

		swfPath: '/swf/Jplayer.swf',
		solution: "flash, html",
		supplied: 'mp3',
		volume: '0.6'
	});

	$('#playbutton').click(function() {
		$('#mediaContainer').jPlayer('play');
		$('#pausebutton').css('color', 'white');
		$('#playbutton').css('color', 'grey');

	});
	$('#pausebutton').click(function(){
		myPlaylist.pause();
		$('#playbutton').css('color', 'white');
		$('#pausebutton').css('color', 'grey');
	});
	$('#muted-dream').click(function(){
		$('#musicbar').css('visibility', 'visible');
		$('.trash-bin').css('bottom','50px');
		myPlaylist.play(0);
		
	});
	$("#exit-player").click(function(){
		$('#musicbar').css('visibility', 'hidden');	
		$('.trash-bin').css('bottom','0px');
		$('#mediaContainer').jPlayer('stop');
	})
});
$('#volumebutton').hover(function(){
	$('#slider-vertical').css({'opacity':'1', 'visibility':'visible'});
})
$('.volume').hover(function(){},function(){
	$('#slider-vertical').css({'opacity':'0', 'visibility':'hidden'});
})
$(function(){
	$("#slider-vertical").slider({
		orientation: "vertical",
		range: "min",
		min: 0,
		max: 100,
		value: 60,
		slide: function(event, ui){
			$("#amount").val(ui.value);
			$('#mediaContainer').jPlayer('volume', ui.value/100);
		}
	})
	$("#amount").val($("#slider-vertical").slider("value"));
});
