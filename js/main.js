$(document).ready(function(){
 $('[data-toggle="tooltip"]').tooltip(); 
	checkURL();
	$('a').click(function(e){
		checkURL(this.hash);
	});
		setInterval("checkURL()",250);	//check for a change in the URL every 250 ms to detect if the history buttons have been used
	$('.donut').click(function(){
		$('.trash-bin').show();
		$('body').css({'cursor':'url(../img/donut.png), pointer','height':'100%'});
	});
	    	console.log($('#trash').attr('src'));
	//some game for awhile at least
	$('.trash-bin').on({
    'click': function(){

    	switch($('#trash').attr('src')){
    		case "img/trash.png":
	    		console.log("trash");
	    		$('body').css({'cursor':'url(../img/donut.png), pointer','height':'100%'});
	    		$('#trash').attr('src','img/donut2.gif');
	    		$('#trash').tooltip('hide')
	    		.attr('data-original-title', "Have another!")
				.tooltip('fixTitle')
				.tooltip('show');
	    	break;
    		case "img/donut2.gif":
    		console.log("donut again");
    		$('#trash').attr('src','img/trash.png');
    		$('#trash').tooltip('hide')
    		.attr('data-original-title', "Done?")
			.tooltip('fixTitle')
			.tooltip('show');
    		default:
    		console.log("more to come");
    	}
        $('body').css({'cursor':'auto','height':'100%'});
    }
});
});
var lasturl="";

function checkURL(hash)
{
	if(!hash) hash=window.location.hash;

	if(hash !=lasturl)
	{
		lasturl=hash;
		loadPage(hash);
	}
}
function loadPage(url)
{
	url=url.replace('#','');
	$('#loading').css('visibility', 'visible');
	$.ajax({
		type: "POST",
		url: "../load_page.php",
		data: 'page='+url,
		dataType: "html",
		success: function(msg){

			if(parseInt(msg)!=0)
			{
				$("#pageContent").html(msg);
				$('#loading').css('visibility', 'hidden');
				$('#soundcloud').hide();
			}
		}
	});
}
$(document).on('click', '#soundcloud_clickable', function(){
	$("#soundcloud").slideToggle("slow");
});
