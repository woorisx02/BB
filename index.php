<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to B.Bug</title>
    <link rel="shortcut icon" href="imgs/favicon.ico">
    <link rel="stylesheet" href="flexSlider/css/flexslider.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    <script src="js/jquery-1.12.4.min.js"></script>
    <script src="flexSlider/js/jquery.flexslider.js"></script>
    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/support-common.css">
    <link rel="stylesheet" href="flexSlider/css/fs-slide.css">
    <link rel="stylesheet" href="css/index.css">
    <script src="js/common-script.js"></script>
    <script src="js/support.js"></script>
    <script>
        $(window).load(function() {
            $('.flexslider').flexslider({
                animation: "slide"
            });
        });
    </script>
</head>
<body>
        <header>
            <nav>
                <h1><a href="index.php" id="logo">B.B<span>ug</span></a></h1>
                <a href="#" id="trigger">
                    <span></span>
                    <span></span>
                    <span></span>
                </a>
                <div id="main-menu-bg"></div>
                <ul id="main-menu">
                    <li><a href="ebook.php">E-Book Service</a><div class="menu-bar"></div></li>
                    <li><a href="info.php">Information</a><div class="menu-bar"></div></li>
                    <li><a href="support.php">Support</a><div class="menu-bar"></div></li>
                    <li><a href="culture.php">Culture</a><div class="menu-bar"></div></li>
                </ul>

                <ul class="top-menu">
                    <li><a href="#"><span>login</span><i class="bi bi-person-fill"></i></a></li>
                    <li><a href="#"><span>join</span><i class="bi bi-lock-fill"></i></a></li>
                </ul>
            </nav>
            
        </header>
        
        <div id="main">

        <div class="flexslider">
                <ul class="slides">

                  <li>
                    <div class="main-bg main-bg-1">
                      <div class="main-contents">
                          <h3><span>Y</span>our Passport to <span>I</span>nfinite Worlds</h3>
                          <p class="p1"><span>Open</span> a Book, <span>Open Your</span> Mind</p>
                      </div>
                    </div>
                  </li>


                  <li>
                    <div class="main-bg main-bg-2">
                      <div class="main-contents">
                        <h3><span>A</span> journey of a <span>T</span>housand Words</h3>
                        <p class="p2"><span>R</span>ead, <span>D</span>ream, <span>Repeat</span></p>
                      </div>
                    </div>
                  </li>


                  <li>
                    <div class="main-bg main-bg-3">
                      <div class="main-contents">
                        <p class="p3"><span>Your</span> Best <span>Investment</span></p>
                        <h3><span>U</span>nleash Your <span>I</span>magination</h3>
                      </div>
                    </div>
                  </li>


                  <li>
                    <div class="main-bg main-bg-4">
                      <div class="main-contents">
                        <h3><span>R</span>eaders are
                        <span>L</span>eaders</h3>
                        <p class="p4"><span>R</span>ead, <span>L</span>earn, <span>Grow</span></p>
                      </div>
                    </div>
                  </li>


                </ul>
          </div>
            <div class="boxes">
                <div id="box-button">
                    <a href="ebook.php" class="main-btn btn1">E-Book</a>
                    <a href="info.php" class="main-btn btn2">Information</a>
                    <a href="support.php" class="main-btn btn3">Support</a>
                    <a href="culture.php" class="main-btn btn4">Culture</a>
                </div>
            </div>
        </div>
    </body>
    </html>
        
        
