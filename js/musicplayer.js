var volume = 60;
$(document).ready(function(){
	var myPlaylist = new jPlayerPlaylist({
		jPlayer: "#mediaContainer",
		cssSelectorAncestor: "#mediaPlayer",
		cssSelector: {
			play: '#muted-dream',
			stop: '#stopButton',
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
		myPlaylist.play(0);
	});
	$('#stopbutton').click(function(){
		$('#mediaContainer').jPlayer('stop');
	});
	$('#muted-dream').click(function(){
		$('#musicbar').css('visibility', 'visible');
		myPlaylist.play(0);
		
	});
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

$(function(){
	$("#slider-horizontal").slider({
		orientation: "horizontal",
		range: "min",
		min: 0,
		max: 100,
		value: 0,
		slide: function(event, ui){
			$("#amount").val(ui.value);
		}
	})
	$("#amount").val($("#slider-horizontal").slider("value"));
});
