<?php require('blog/wp-blog-header.php'); ?>
<?php

function echoActiveClassIfRequestMatches($requestUri)
{
    $current_file_name = basename($_SERVER['REQUEST_URI'], ".php");

    if ($current_file_name == $requestUri)
        echo 'class="active"';
}

?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>BitCrunched!</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="Full service Computer and Technology Solutions" content="">
    <meta name="BitCrunched!" content="">
    <link href="<?php echo home_url(); ?>/css/new.css" type="text/css" rel="stylesheet"  title="black">

  </head>
  <body>
    <!-- navbar -->
    <div class="navbar navbar-fixed-top" style="position: fixed">
      <div class="navbar-inner">
        <div class="container">
          <button type="button" class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="brand" href="#"><span style="color: #889D07 !important">Bit</span>Crunched!</a>
          <div class="nav-collapse collapse">
            <ul class="nav pull-right">
              <li <?=echoActiveClassIfRequestMatches("index")?>><a href="<?php echo home_url(); ?>/index.php">Home</a></li>
              <li <?=echoActiveClassIfRequestMatches("about")?>><a href="<?php echo home_url(); ?>/about.php">About</a></li>
              <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown">Services <b class="caret"></b></a>
                <ul class="dropdown-menu">
                  <li class="nav-header">Residential</li>
                  <li><a href="<?php echo home_url(); ?>/web-design.php">Web Design</a></li>
                  <li><a href="<?php echo home_url(); ?>/computer-repair.php">Computer Repair</a></li>
                  <li><a href="<?php echo home_url(); ?>/computer-upgrades.php">Computer Upgrades</a></li>
                  <li><a href="<?php echo home_url(); ?>/virus-removal.php">Virus Removal</a></li>
                  <li><a href="<?php echo home_url(); ?>/networking.php">Networking</a></li>
                  <li><a href="<?php echo home_url(); ?>/network-security.php">Network Security</a></li>
                  <li><a href="<?php echo home_url(); ?>/remote-support.php">Remote Support</a></li>
                  <li class="divider"></li>
                  <li class="nav-header">Additional Commercial Services</li>
                  <li><a href="<?php echo home_url(); ?>/it-audtiting.php">IT Auditing</a></li>
                  <li><a href="<?php echo home_url(); ?>/it-consulting.php">IT Consulting</a></li>
                </ul>
              </li>
              <li <?=echoActiveClassIfRequestMatches("/blog/index")?>><a href="<?php echo home_url(); ?>/blog">Blog</a></li>
              <li <?=echoActiveClassIfRequestMatches("/blog/contact")?>><a href="<?php echo home_url(); ?>/contact">Contact</a></li>
            </ul>
          </div><!--/.nav-collapse -->
        </div>
      </div><!-- /.navbar-inner -->
    </div>
    <div id="top-shadow"></div>
    <!-- .navbar -->