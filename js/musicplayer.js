var volume = 60;
$(document).ready(function(){
	var moved=false;
	if($(window).width() < 768){
		$('.music-buttons').css('padding-top','0px');
		moveFW();
		moved=true;
	}
	function moveFW(){
		$(".move-FW").toggle();
	}
	var moveFWonce = _.once(moveFW, 300);

	$(window).on('resize', function(){
		if($(window).width() < 768){
			$('.music-buttons').css('padding-top','0px');
			if(!moved){
				moveFW();
				moved=true;
			}
		}
		else{
			$('.music-buttons').css('padding-top','11px');
			if(moved){
				moveFW();
				moved=false;
			}
		}
	});
	var pics = ["img/The Branches.jpg", "img/Nostalghia1.gif"];
	var myPlaylist = new jPlayerPlaylist({
		jPlayer: "#mediaContainer",
		cssSelectorAncestor: ".media-player",
		cssSelector: {
			pause: '#pauseButton',
		},
	}, [
	{
		title:"The Branches",
		artist:"Stanlin Joseph",
		mp3:"media/Branches Version.mp3",
   	    poster: "img/The Branches.JPG"

	},
	{
		title:"The Muted-Colored Dream",
		artist:"Stanlin Joseph",
		mp3:"media/The Muted-Colored Dream.mp3",
   	    poster: "img/Nostalghia1.gif"

	},
	{
		title:"Rollercoaster Moon",
		artist:"Stanlin Joseph",
		mp3:"media/Rollercoaster Moon.mp3",
   	    poster: "img/Rollercoaster.jpg"
	}
	], {

		swfPath: '/swf/Jplayer.swf',
		solution: "flash, html",
		supplied: 'mp3',
		volume: '0.6',
		play: function(e) {
			$('.music-text').text(myPlaylist.playlist[myPlaylist.current].title)
			$('#branches').attr('src', myPlaylist.playlist[myPlaylist.current].poster);
		}
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
		myPlaylist.play(myPlaylist.current);
	}); 
	$('.next').click(function(){	
		myPlaylist.next();
		$('#branches').attr('src', myPlaylist.playlist[myPlaylist.current].poster);
	});
	$('.previous').click(function(){
		myPlaylist.previous();
		$('#branches').attr('src', myPlaylist.playlist[myPlaylist.current].poster);
	});
	$("#exit-player").click(function(){
		$('#musicbar').css('visibility', 'hidden');	
		$('.trash-bin').css('bottom','0px');
		$('#mediaContainer').jPlayer('stop');
	});
	$("#branches").click(function(){
		$('#next').show();
		$('#previous').show();
	});
});
$('#volumebutton').hover(function(){
	$('#slider-vertical').css({'opacity':'1', 'visibility':'visible'});
});
$('.volume').hover(function(){},function(){
	$('#slider-vertical').css({'opacity':'0', 'visibility':'hidden'});
});
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
$("#musicbar").on('change', function(){
		console.log("musicbar changed");
	});