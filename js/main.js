var lastScrollTop = 0;
var donuts = 3;
var resizeTimer;
var xsAction=false;
$(document).ready(function(){
	var currentWidth = $(window).width();
	if(currentWidth >= 768){
			$('#navbarCollapse1').addClass('in');
			$('body').css('padding-top','100px');
	}
	else{
			$('body').css('padding-top','0px');

	}
	$(".collapse").on('show.bs.collapse', function(){
		currentWidth = $(window).width();
			if(currentWidth < 768){
				$('body').animate({
					'padding-top': 280
				}, 300
				);
			}
			else{
				$('body').animate({
					'padding-top': 100
				}, 300
				);
			}
	});
	$(".collapse").on('hide.bs.collapse', function(){
		currentWidth = $(window).width();
			$('body').animate({
				'padding-top': 0
			}, 300
			);
	});
	$(window).on('resize', function(){
		currentWidth = $(window).width();
		if(currentWidth >= 768 && $(window).scrollTop() == 0){
			xsAction=true;
			$('.collapse').collapse("show");
		}
		else{
			if(xsAction==true){
				$('body').css('padding-top', '280');
				$('.collapse').collapse("hide");
				$('body').animate({
					'padding-top': 0
				}, 500
				);
				xsAction=false;
			}
		}
	});
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
	$('.trash-bin').on({'click': function(){
    	switch($('#trash').attr('src')){
    		case "img/trash.png":
    			donuts--;
	    		console.log("trash");
	    		$('body').css({'cursor':'auto','height':'100%'});
	    		if(donuts==0){
	    			console.log("wood");
					$('body').css({'cursor':'auto','height':'100%'});
					$('#trash').attr('src','img/Wood.png');
					$('#trash').tooltip('hide')
					.attr('data-original-title', "All done, but here's a piece of wood instead")
					.tooltip('fixTitle')
					.tooltip('show');
	    		}
	    		else{
		    		$('#trash').attr('src','img/donut2.png');
		    		$('#trash').tooltip('hide')
		    		.attr('data-original-title', "Have another!")
					.tooltip('fixTitle')
					.tooltip('show');
				}
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
			case "img/Wood.png":
			    console.log("wood!");
	    		$('body').css({'cursor':'url(../img/wood-pointer.jpg), pointer','height':'100%'});
    			$('#trash').attr('src','img/fire.gif');
    			$('#trash').tooltip('hide')
    			.attr('data-original-title', "Burn?")
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
$( window ).scroll(function() {
   var st = $(this).scrollTop();
   if(st==0){
   	$('#myNavbar').removeClass('nav-background');
   }
   	  $('#theButton').show();
   if (st > lastScrollTop){
	  $('.collapse').collapse("hide");
	  $('#myNavbar').removeClass('nav-background');
   } else {
	  if(st == 0 && $(window).width()>=768){
	    $('#theButton').hide();
		$('.collapse').collapse("show");
	}
   }
   lastScrollTop = st;
});
$(document).on('click', '.navbar-toggle', function(){
	$('.collapse').collapse("toggle");
	if($(window).scrollTop()!=0){
		$('#myNavbar').toggleClass('nav-background');
	}
});
$(document).on('click', '.page', function(){
	if($(window).width()<768){
		$('.collapse').collapse("hide");
	}
})
