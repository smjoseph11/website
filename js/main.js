$(document).ready(function(){
	checkURL();
	$('a').click(function(e){
		checkURL(this.hash);
	});
		setInterval("checkURL()",250);	//check for a change in the URL every 250 ms to detect if the history buttons have been used
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
