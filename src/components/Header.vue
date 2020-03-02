<template>
  <div>
    <div id="loader">
        <div class="box-one"></div>
        <div class="box-two"></div>
        <div class="box-three"></div>
        <div class="box-four"></div>
    </div>
    <nav class="menu">
        <ul class="menu-ul">
            <li> <a href="#about"> About </a> </li>
            <li> <a href="#skill-education"> Education </a> </li>
            <li> <a href="#experience-testimonials"> Experience </a> </li>
            <li> <a href="#portfolio"> Portfolio </a> </li>
            <li> <a href="#contact"> Contact </a> </li>
        </ul>
        <div class="menu-holder">
            <div class="menu-bar"></div>
        </div>
    </nav>
    <section id="home" class="header" style="background-image: url('./../assets/images/cover.jpg')">
        <div class="sector">
            <div class="box">
                <h1> J </h1>
            </div>
            <h1 class="main-title"> John Doe </h1>
            <h4 class="tagline"> Web | UI designer </h4>
        </div>
    </section> 
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Roboto+Mono:100,100i,300,300i,400,400i,500,500i,700,700i&display=swap&subset=cyrillic,cyrillic-ext,greek,greek-ext,latin-ext,vietnamese');
/* -------------------------------------
           Table of Contents
* -------------------------------------- 
    0.  Global
    1.  Menu
    2.  Header
    3.  About
    4.  Skills
    5.  Education & Work Experience
    6.  Testimonials
    7.  Work Process
    8.  Portfolio
    9.  Fun facts
    10. Contact
    11. Extras
            11.1  Loader
            11.2  Line art
            11.3  Texture
            11.4  Social links
            11.5  Owl Carousel Modified
    12. Responsive

*/


/* -------------------------------------
            0. GLOBAL
* ------------------------------------- */
body {
    font-family: "Roboto Mono", sans-serif; 
    height: 100%;
    color: #444;
}

a, a:hover, a:visited, a:active, a:focus {
    color: #101010;
    font-weight: 500;
    text-decoration: none;
}

a:hover {
    font-weight: 700;
}

h1, h2, h3, h4, h5, h6 {
    font-family: 'Lato', sans-serif;
    margin: 20px 0;
    color: #101010; 
}

section {
    margin-bottom: 30px;
    padding: 50px 0 0 0; 
    position: relative;
}

.btn-cl {
    color: #101010;
    border: 1px solid #444;
    padding: 5px 15px;
    background: transparent;
    margin-top: 20px;
    border-radius: 0;
    outline: none;
}

.btn-cl:hover, .btn-cl:focus, .btn-cl:active, .btn-cl:visited {
    color: #444;
    border: 1px solid #aaa;
    background: transparent;
    outline: none;
    box-shadow: none;
    font-weight: 400;
}

.sep-mini {
    margin-top: 30px;
    width: 20px;
    position: relative;
    height: 1px;
    background: #101010;
}

.icon-holder {
    display: inline-block;
    position: relative;
}

.i-size-big {
    font-size: 60px;
}

.i-size-med {
    font-size: 40px;
}

.i-size-small {
    font-size: 30px;
}

.i-size-big, .i-size-med, .i-size-small {
    color: #101010;
}

.icon-holder:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50%;
    height: 1px;
    background: #101010;
}

.icon-holder-center {
    display: inline-block;
    position: relative;
    margin: 0 auto;
}

.icon-holder-center:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    -webkit-transform: translateX(-50%);
            transform: translateX(-50%);
    width: 50%;
    height: 1px;
    background: #101010;
}

.section-holder {
  border: 1px solid #aaa;
  padding: 30px 30px 50px; 
}

.section-title {
    position: relative;
}

.section-title:before {
    content: '';
    position: absolute;
}

.section-big-title {
    position: absolute;
    opacity: 1;
    bottom: 0;
    left: 0;
    display: inline-block;
    font-size: 180px;
    font-weight: 700;
    z-index: -1;
    margin: 0;
    color: #ececec;
}
/* -------------------------------------
            1. MENU
* ------------------------------------- */
.menu {
    position: fixed;
    bottom: 30px;
    left: 30px;
    z-index: 999;
    padding: 20px 40px 20px 20px;
}

.menu-ul {
    padding: 0;
    list-style: none;
    display: none;
    transition: opacity .15s ease-in;
    margin: 0 0 15px;
    border-bottom: 1px solid #aaa;
}

.menu-ul li {
    margin-bottom: 20px;
}

.menu-ul li.current a {
    border-bottom: 2px solid #101010;
}

.menu.menu-active {
    background: rgba(255,255,255,.8);
}

.menu.menu-active .menu-ul {
    display: block;
    opacity: 1;
}

.menu.menu-active .menu-bar {
    background: none;
}

.menu.menu-active .menu-bar:before {
    top: 0;
    -webkit-transform: rotate(45deg);
            transform: rotate(45deg);
}

.menu.menu-active .menu-bar:after {
    -webkit-transform: rotate(-45deg);
            transform: rotate(-45deg);
    bottom: 0;
}

.menu.menu-active .menu-holder {
    background: transparent;
}

.menu-holder {
    width: 50px;
    height: 50px;
    position: relative;
    background: rgba(255,255,255,.8);
    cursor: pointer;
}

.menu-bar {
    height: 2px;
    background: #101010;
    position: absolute;
    top: 24px;
    left: 8px;
    right: 8px;
}

.menu-bar:after, .menu-bar:before {
    position: absolute;
    display: block;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #101010;
    content: "";
    transition-property: top, -webkit-transform;
    transition-property: top, transform;
    transition-property: top, transform, -webkit-transform;
    transition-duration: .25s;
    transition-timing-function: cubic-bezier(.23,1,.23,1);
    transition-delay: transform .35s ease-in;
}
.menu-bar:before {
    top: -12px;
}

.menu-bar:after {
    bottom: -12px;
}


/* -------------------------------------
            2. HEADER
* ------------------------------------- */
.header {
    background-size: cover;
    background-position: center;
    height: 400px;
    width: 100%;
    position: relative;
}

.header:before {
    content: '';
    background: linear-gradient(to right,#101010 50%, #444);
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: .2;
}

.header:after {
    content: '';
    background: url('./../assets/images/pattern.png');
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: .8;
}

.sector {
    position: absolute;
    top: 50%;
    width: 100%;
    text-align: center;
    -webkit-transform: translateY(-50%);
            transform: translateY(-50%);
    color: #fff; 
    z-index: 1;
}

.sector .box {
    display: inline-block;
    border: 1px solid #f8f8f8;
    padding: 5px 20px;
}

.sector .box h1 {
    color: #fff;
}

.sector .main-title {
    margin: 30px 0;
    font-size: 75px;
    font-weight: 300;
    color: #fff;
}

.sector .tagline {
    margin-bottom: 0;
    color: #fff;
}
</style>
