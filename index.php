 <!DOCTYPE html>
  <!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang=""> <![endif]-->
  <!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8" lang=""> <![endif]-->
  <!--[if IE 8]>         <html class="no-js lt-ie9" lang=""> <![endif]-->
  <!--[if gt IE 8]><!--> <html class="no-js" lang=""> <!--<![endif]-->
  <head>

      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
      <title>Stanlin Joseph</title>
      <meta name="description" content="">
      <meta name="viewport" content="width=device-width, initial-scale=1">

      <!--Cascading Style Sheets-->
      <link rel="apple-touch-icon" href="apple-touch-icon.png">
      <link href='https://fonts.googleapis.com/css?family=Source+Code+Pro:400|Nosifer' rel='stylesheet' type='text/css'>
      <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
      <link rel="stylesheet" href="css/main.css">
      <link rel="stylesheet" href="css/musicplayer.css">
      <link rel="stylesheet" href="//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css">
  </head>

  <body>
    <div class="container-fluid">
          <!--[if lt IE 8]>
              <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
              <![endif]-->
    <nav id="myNavbar" class="navbar navbar-fixed-top">
          <button id="theButton" type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbarCollapse1" aria-expanded="false">
          </button>
          <button id="otherButton" type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbarCollapse1" aria-expanded="false" style="display:none">
          </button>
          <div id="navbarCollapse1" class="collapse">
          <div id="nav" class="row">
           <div class="col-xs-12 col-sm-9 nav-border">
             <div id="menu" class="row" style="font-family: 'Source Code Pro'; font-weight:200;">
                <a style="color:black;" href="#music">						
                   <div class="col-sm-3 text-center page"><h3>MUSIC</h3></div>
               </a>
               <a style="color:black;" href="#code">						
                  <div class="col-sm-3 text-center page"><h3>CODE</h3></div>
              </a>
              <a style="color:black;" href="#about">						
                  <div class="col-sm-3 text-center page"><h3>ABOUT</h3></div>
              </a>
              <a style="color:black;" href="#contact">						
                  <div class="col-sm-3 text-center page"><h3>CONTACT</h3></div>
              </a>
            </div><!--row-->
          </div>
      </div>
      <div style="margin:0px" class="row">
         <div class="col-xs-6">
            <img id="loading" src="img/ajax_load.gif" alt="loading" />
         </div>
         <div style="padding-right:50px;padding-top:15px;font-family:'Nosifer';" class="col-xs-6 text-right my-name">
          <h3><a style="color:#990000;" href="#home">Stanlin Joseph</a></h3>
        </div>
      </div><!--name-row-->
        </div>
    </nav><!--navbar-->
    <nav id="musicbar" class="navbar navbar-inverse navbar-fixed-bottom">
  <div id="css-ancestor" class="media-player" style="height:50px">
    <div id="mediaContainer"></div>
    <div class="row group">
      <div class="music-buttons col-xs-2 text-center">
      <div class="row">
        <div class="move-FW previous glyphicon glyphicon-backward">
        </div>
        <div id="playbutton" class="glyphicon glyphicon-play"></div>
            <div id="pausebutton" class="glyphicon glyphicon-pause">
        </div>
        <div class="move-FW next glyphicon glyphicon-forward">
        </div>
      </div>
      <div class="move-FW row" style="display:none">
        <div class="previous glyphicon glyphicon-backward">
        </div>
        <div class="next glyphicon glyphicon-forward">
        </div>
      </div>
  </div>
  <div class="col-xs-8" style="padding-top:15px">
      <div class="jp-progress">
          <div class="jp-seek-bar">
            <div class="jp-play-bar"></div>
          </div>
        </div>
      <div>
        <span style="float:left" class="jp-time-holder">
        <span class="jp-current-time" role="timer" aria-label="time">&nbsp;</span>
       </span>
                <span style="float:right" class="jp-time-holder">
        <span class="jp-duration" role="timer" aria-label="time">&nbsp;</span>
        </span>
        <p id="musicPlayerText" class="music-text text-center">
        </p>

    </div>
  </div>
  <div style="padding:0 4%" class="col-xs-2">
    <div class="time-vol row">
      <div class="col-xs-12 col-sm-6 time">
      </div>
      <div class="col-xs-12 col-sm-6 volume">
        <div style="height:50px; padding:0px 5%" class="col-xs-12">
        <div id="volumebutton" class="glyphicon glyphicon-volume-up"></div>
        <div id="slider-vertical"></div>
      </div>
      </div>
   </div>
  </div>
  </div>
</div>
</nav>  <!--music navbar-->
    <div style="display:none" class="trash-bin"><img id="trash" data-toggle="tooltip" data-placement="left" title="Done?" src="img/trash.png"></img></div>
  <div id="pageContent">
    <?php include('pages/home.html');?>
  </div><!--page content-->
</div><!--container-->
    <!--external js scripts-->
    <script src="https://code.jquery.com/jquery-2.2.0.min.js"></script>
    <script src="https://code.jquery.com/ui/1.11.4/jquery-ui.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script> 
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jplayer/2.9.2/jplayer/jquery.jplayer.min.js"></script>   
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jplayer/2.9.2/add-on/jplayer.playlist.min.js"></script>
    <script src="js/vendor/ugly-vendor.min.js"></script>
    <!--internal js scripts-->
    <script src="js/ugly-local.js"></script>
  <!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
  <script>
  (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
      function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
  e=o.createElement(i);r=o.getElementsByTagName(i)[0];
  e.src='//www.google-analytics.com/analytics.js';
  r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
  ga('create','UA-XXXXX-X','auto');ga('send','pageview');
  </script>
  </body>
  </html>
