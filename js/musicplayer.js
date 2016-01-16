var volume = 60;
$(document).ready(function(){
	var pics = ["img/The Branches.jpg", "img/Nostalghia1.gif"];
	var currentpic = 0;
	var myPlaylist = new jPlayerPlaylist({
		jPlayer: "#mediaContainer",
		cssSelectorAncestor: ".mediaPlayer",
		cssSelector: {
			pause: '#pauseButton',
		},
	}, [
	{
		title:"The Branches",
		artist:"Stanlin Joseph",
		mp3:"media/The Branches.mp3",
   	    poster: "img/IMG_9252.JPG"

	},
	{
		title:"The Muted-Colored Dream",
		artist:"Stanlin Joseph",
		mp3:"media/The Muted-Colored Dream.mp3",
   	    poster: "img/Nostalghia1.gif"

	}
	], {

		swfPath: '/swf/Jplayer.swf',
		solution: "flash, html",
		supplied: 'mp3',
		volume: '0.6',
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
	$('#branches').click(function(){
		$('#musicbar').css('visibility', 'visible');
		$('.trash-bin').css('bottom','50px');
		myPlaylist.play(0);
		
	});
	$('#next').click(function(){
		$('#branches').attr('src', pics[++currentpic]);
		myPlaylist.next();
	});
	$('#previous').click(function(){
		$('#branches').attr('src', pics[--currentpic]);
		myPlaylist.previous();
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
