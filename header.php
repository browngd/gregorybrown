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
    <title>Resume - Greg Brown</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Professional Resume for Greg Brown">
    <meta name="author" content="Gregory Brown">
    <style type="text/css">
        body { padding-top: 35px; }
    </style>
    <style type="text/css">
        body { padding-top: 55px\9; }
    </style>

    <link href="css/black.css" type="text/css" rel="stylesheet"  title="black">
    <link href="css/blue.css" type="text/css" rel="alternate stylesheet" title="blue">
<script type="text/javascript" src="js/styleswitcher.js"></script>
    <!--[if IE 7]>
    <link rel="stylesheet" href="css/font-awesome-ie7.min.css">
    <![endif]-->
    <script type="text/javascript">
        var $buoop = {vs:{i:7,f:11,o:11,s:5,n:9}}
        $buoop.ol = window.onload;
        window.onload=function(){
        try {if ($buoop.ol) $buoop.ol();}catch (e) {}
        var e = document.createElement("script");
        e.setAttribute("type", "text/javascript");
        e.setAttribute("src", "http://browser-update.org/update.js");
        document.body.appendChild(e);
        }
    </script>

</head>
<body>
    <!-- navbar -->
    <div class="navbar navbar-inverse navbar-fixed-top" style="position:fixed">
        <div class="navbar-inner">
            <div class="container">
            <!-- <button class="btn btn-navbar">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button> -->
            <ul class="nav">
                <li <?=echoActiveClassIfRequestMatches("index")?>>
                    <a href="index.php" rel="tooltip" data-placement="bottom" title="Home"><i class="icon-home icon-large icon-fixed-width"></i>
                    </a>
                </li>
                <li <?=echoActiveClassIfRequestMatches("blog")?>>
                    <a href="blog.php" rel="tooltip" data-placement="bottom" title="Blog"><i class="icon-align-left icon-large icon-fixed-width"></i>
                    </a>
                </li>
                <li <?=echoActiveClassIfRequestMatches("resume")?>>
                    <a href="resume.php" rel="tooltip" data-placement="bottom" title="Resume"><i class="icon-file-alt icon-large icon-fixed-width"></i>
                    </a>
                </li>
                <li <?=echoActiveClassIfRequestMatches("portfolio")?>>
                    <a href="portfolio.php" rel="tooltip" data-placement="bottom" title="Portfolio"><i class="icon-picture icon-large icon-fixed-width"></i>
                    </a>
                </li>
                <li <?=echoActiveClassIfRequestMatches("contact")?>>
                    <a href="contact.php" rel="tooltip" data-placement="bottom" title="Contact"><i class="icon-envelope-alt icon-large icon-fixed-width"></i>
                    </a>
                </li>
            </ul>
            <ul class="nav pull-right">
                <li>
                    <a href="http://www.linkedin.com/in/browngd/" rel="tooltip" data-placement="bottom" title="LinkedIn"><i class="icon-linkedin-sign icon-large icon-fixed-width"></i>
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/browngd" rel="tooltip" data-placement="bottom" title="Twitter"><i class="icon-twitter icon-large icon-fixed-width"></i>
                    </a>
                </li>
                <li>
                    <a href="https://www.facebook.com/browngd" rel="tooltip" data-placement="bottom" title="Facebook"><i class="icon-facebook-sign icon-large icon-fixed-width"></i>
                    </a>
                </li>
                <li>
                    <a href="https://plus.google.com/114483832302146340327/posts" rel="tooltip" data-placement="bottom" title="Google+"><i class="icon-google-plus-sign icon-large icon-fixed-width"></i></a>
                </li>
            </ul>
            <!-- .nav-collapse
            <div class="nav-collapse collapse">
            </div>
            .nav-collapse -->
        </div>
    </div>
</div>
<!-- /navbar -->
<!-- style switcher -->
<div class="style-binding">
    <div class="style-switcher">
        <a href="#" onclick="setActiveStyleSheet('black');return false;">
            <div class="style-switcher-black"></div>
        </a>
        <a href="#" onclick="setActiveStyleSheet('blue');return false;">
            <div class="style-switcher-blue"></div>
        </a>
        <a href="#" onclick="setActiveStyleSheet('red');return false;">
            <div class="style-switcher-red"></div>
        </a>
        <a href="#" onclick="setActiveStyleSheet('white');return false;">
            <div class="style-switcher-white"></div>
        </a>
    </div>
</div>
<!-- /style switcher -->
<div class="platform">
    <!-- header -->
    <div class="header">
        <div class="row">
            <div class="margin-bottom-5">
                <div class="span pic-div">
                    <div class="pic"></div>
                </div>
                <div class="name-text">
                    <h1>Gregory Brown</h1>
                </div>
                <div class="major-text">
                    <div class="line">
                        Freelance Web Designer
                    </div>
                    <div class="line">
                        Network/Systems Administrator
                    </div>
                </div>
                <div class="buttons">
                    <a href="#" class="btn btn-danger btn-large btn-inverse">
                        <i class="icon-rocket icon-large"></i>
                        &nbsp;&nbsp;Hire Me!
                    </a>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="#" class="btn btn-success btn-large btn-inverse">
                        <i class="icon-picture icon-large"></i>
                        &nbsp;&nbsp;Portfolio
                    </a>
                </div>
            </div>
        </div>
    </div>
    <!-- /header -->