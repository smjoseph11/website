$(document).ready(function(){
	var mediaPlayer = jQuery('#mediaContainer');

	mediaPlayer.jPlayer({
		swfPath: '/swf/Jplayer.swf',

		solution: "flash, html",

		supplied: 'mp3',

		cssSelector: {
			play: '#playButton',
			stop: '#stopButton'
		},

		ready: function() {jQuery(this).jPlayer("setMedia", {
			mp3: 'audios/The Branches.mp3'
		});}
		
	});
	$('#playbutton').click(function() {
		$('#mediaContainer').jPlayer('play');
	});
	$('#stopbutton').click(function(){
		$('#mediaContainer').jPlayer('stop');
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
		}
	})
	$("#amount").val($("#slider-vertical").slider("value"));
});
