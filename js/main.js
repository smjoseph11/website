var lastScrollTop = 0;
$(document).ready(function(){
$(".collapse").on('show.bs.collapse', function(){
	$('body').animate({
		'padding-top': 300
	}, 300
	);
});
$(".collapse").on('hide.bs.collapse', function(){
	$('body').animate({
		'padding-top': 100
	}, 300
	);
});
	if($(window).width() >= 768){
		$('#navbarCollapse1').addClass('in');
	}
 navHeight = $('#nav').height().toString();
 $("#myNavbar a").click(function(){
 	  $(".navbar-collapse").collapse('hide');
 });
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
	//some game
	$('.trash-bin').on({
    'click': function(){

    	switch($('#trash').attr('src')){
    		case "img/trash.png":
	    		console.log("trash");
	    		$('body').css({'cursor':'auto','height':'100%'});
	    		$('#trash').attr('src','img/donut2.png');
	    		$('#trash').tooltip('hide')
	    		.attr('data-original-title', "Have another!")
				.tooltip('fixTitle')
				.tooltip('show');
	    	break;
    		case "img/donut2.png":
    		console.log("donut again");
	    	$('body').css({'cursor':'url(../img/donut.png), pointer','height':'100%'});
    		$('#trash').attr('src','img/trash.png');
    		$('#trash').tooltip('hide')
    		.attr('data-original-title', "Done?")
			.tooltip('fixTitle')
			.tooltip('show');
			break;
    		default:
    		console.log("more to come");
    	}
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
$(window).resize(function(){
	if($(this).width() >= 768){
		$('#navbarCollapse1').addClass('in');
	}
	else{
		$('#navbarCollapse1').removeClass('in');
	}
});
$( window ).scroll(function() {
   var st = $(this).scrollTop();
   if(st==0){
   	$(".navbar-toggle").click();
   	$('#myNavbar').removeClass('nav-background');
   }
   	  $('#otherButton').show();
   if (st > lastScrollTop){
	  $('.collapse').collapse("hide");
   } else {
	  if(st == 0){
	    $('#otherButton').hide();
		$('.collapse').collapse("show");
	}
   }
   lastScrollTop = st;
});
$(document).on('click', '.navbar-toggle', function(){
	$('.collapse').collapse("toggle");
	$('#myNavbar').addClass('nav-background');
});
