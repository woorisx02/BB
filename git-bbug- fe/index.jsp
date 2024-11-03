<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Welcome to B.Bug</title>
<link rel="shortcut icon" href="/resources/imgs/support/favicon.ico">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
<link href="https://cdn.jsdelivr.net/gh/sun-typeface/SUIT@2/fonts/variable/woff2/SUIT-Variable.css" rel="stylesheet">
<!--font-family: 'SUIT', sans-serif;-->
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet">
<!--font-family: "Playfair Display", serif;-->
<link rel="stylesheet" href="/resources/flexSlider/css/flexslider.css">
<link rel="stylesheet" href="/resources/flexSlider/css/fs-slide.css">
<link rel="stylesheet" href="/resources/css/reset.css">
<link rel="stylesheet" href="/resources/css/common.css">
<link rel="stylesheet" href="/resources/css/index.css">
<script src="/resources/js/jquery-1.12.4.min.js"></script>
<script src="/resources/flexSlider/js/jquery.flexslider.js"></script>
<script src="/resources/js/common-script.js"></script>
<script>
	$(function () {
		$(window).load(function () {
			$('.flexslider').flexslider({
				animation: "slide"
			});
		});
	});
</script>
</head>

<body>
	<header>
        <nav>
            <h1><a id="logo" href="/"><span>B.B</span>ug</a></h1>
            <a href="#" id="trigger"><i class="bi bi-list"></i><i class="bi bi-x-lg"></i></a>

            <ul id="main-menu">
                <li><a href="/ebook">E-Service</a><div class="menu-bar"></div></li>
                <li><a href="/support">Support</a><div class="menu-bar"></div></li>
                <li><a href="/culture">Culture</a><div class="menu-bar"></div></li>
				<li><a href="#">Information</a><div class="menu-bar"></div></li>
            </ul>
			
            <ul class="top-menu">
                <li><a href="#"><span>login</span><i class="bi bi-person-fill"></i></a></li>
                <li><a href="#"><span>join</span><i class="bi bi-lock-fill"></i></a></li>
            </ul>
        </nav>
    </header> 
 
    <div class="flexslider">
      <ul class="slides">
        <li>
          <div class="main-bg main-bg-1">
            <div class="main-contents">
              <h3><span>Y</span>our Passport to <span>I</span>nfinite Worlds</h3>
              <p><span>Open</span> a Book, <span>Open Your</span> Mind</p>
            </div>
          </div>
        </li>
        <li>
          <div class="main-bg main-bg-2">
            <div class="main-contents">
              <h3><span>A</span> journey of a <span>T</span>housand Words</h3>
              <p><span>R</span>ead, <span>D</span>ream, <span>Repeat</span></p>
            </div>
          </div>
        </li>
        <li>
          <div class="main-bg main-bg-3">
            <div class="main-contents">
              <p><span>Your</span> Best <span>Investment</span></p>
              <h3><span>U</span>nleash Your <span>I</span>magination</h3>
            </div>
          </div>
        </li>
        <li>
          <div class="main-bg main-bg-4">
            <div class="main-contents">
              <h3><span>R</span>eaders are <span>L</span>eaders</h3>
              <p><span>R</span>ead, <span>L</span>earn, <span>Grow</span></p>
            </div>
          </div>
        </li>
      </ul>
    </div>
	
	<ul class="btn-group">
		<li><a href="/ebook" class="main-btn">E-Book</a></li>
		<li><a href="/support" class="main-btn">Support</a></li>
		<li><a href="/culture" class="main-btn">Culture</a></li>
		<li><a href="#" class="main-btn">Information</a></li> 
	</ul>
</body>
</html>