<template>
  <section id="contact">
        <!-- Big Section Background Title -->
        <h1 class="section-big-title til hidden-xs hidden-sm" data-in-effect="fadeInUp" data-out-effect="fadeInDown">contact</h1><!-- /. large title -->
        <div class="container">
            <div class="row">
                <div class="col-sm-4">
                    <div class="section-holder texture">
                        <!-- draw line art -->
                        <div class="line-art-top">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <!-- /.top line -->
                        <div class="line-art-bottom">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <!-- /.bottom line -->
                        <div class="line-art-left">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <!-- /.left line -->
                        <div class="line-art-right">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <!-- /.right line -->
                        
                        <div class="icon-holder i-size-big">
                            <i class="ion-ios-wineglass-outline"></i>
                        </div>
                        <h3> Lets Talk </h3>
                        <h5>Location: 4826 Horner Ave, Toronto</h5>
                        <h5>Email: contact@yourmail.com</h5>
                        <h5>Phone: 416-850-6996</h5>
                        <a href="https://maps.google.com/maps?q=4826+Horner+Avet,+Toronto,+Canada&amp;hl=en&amp;t=v&amp;hnear=4826+Horner+Avet,+Toronto,+Canada" class="mfp-iframe popup-it"><h4 class="map-open"> Open Map </h4></a>
                        <div class="social-links">
                            <a href="#url"> <i class="ion-social-twitter-outline i-size-small"></i> </a>
                            <a href="#url"> <i class="ion-social-facebook-outline i-size-small"></i> </a>
                            <a href="#url"> <i class="ion-social-dribbble-outline i-size-small"></i> </a>
                            <a href="#url"> <i class="ion-social-github-outline i-size-small"></i> </a>
                        </div><!-- /.social-links -->
                    </div><!-- /.section-holder -->
                </div><!-- /.col-sm-4 -->

                <div class="col-sm-8">
                    <div class="section-holder">
                        <div class="icon-holder i-size-big">
                            <i class="ion-ios-email-outline"></i>
                        </div>
                        <h3> Reach me </h3>
                        <form class="form-horizontal" id="contactForm">
                            <div class="form-group">

                               <div class="col-sm-6">

                                   <input type="text" class="form-control" id="inputName" placeholder="Your Name" required>
                                    <span class="form-control-feedback">
                                        <i class="ion-ios-grid-view-outline"></i>
                                    </span>

                                </div>

                                <div class="col-sm-6">
                                    <input type="email" class="form-control" id="inputEmail" placeholder="Your Email" required>

                                    <span class="form-control-feedback">
                                        <i class="ion-ios-grid-view-outline"></i>
                                    </span>
                                </div>
                            </div><!-- /.form-group -->

                            <div class="form-group">
                                <div class="col-sm-6">
                                    <input type="text" class="form-control" id="inputPhone" placeholder="Phone (optional)">

                                    <span class="form-control-feedback">
                                        <i class="ion-ios-grid-view-outline"></i>
                                    </span>
                                </div>
                                <div class="col-sm-6">
                                    <input type="text" class="form-control" id="inputSubject" placeholder="Subject" required>

                                    <span class="form-control-feedback">
                                        <i class="ion-ios-grid-view-outline"></i>
                                    </span>
                                </div>
                            </div><!-- /.form-group -->
                            <div class="form-group message">
                                <div class="col-sm-12">
                                    <textarea class="form-control" id="inputMessage" rows="4" placeholder="Message" required></textarea>

                                    <span class="form-control-feedback">
                                        <i class="ion-ios-grid-view-outline"></i>
                                    </span>
                                </div>
                            </div><!-- /.form-group -->
                            <div class="form-group">
                                <div class="col-sm-8">
                                    <button type="submit" id="form-submit" class="btn btn-cl">SEND MESSAGE</button>
                                </div>
                            </div><!-- /.form-group -->
                            <div class="clearfix"></div>
                        </form><!-- /.contact-form -->
                        <div id="msgSubmit" class="h3 text-center hidden"></div>
                    </div><!-- /.section-holder -->
                </div><!-- /.col-sm-8 -->
            </div><!-- /.row -->
        </div><!-- /.container -->
    </section><!-- /.contact -->
</template>

<script>
export default {
  name: 'Reachme',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
/* -------------------------------------
          10. CONTACT FORM
* ------------------------------------- */

.map-open {
    position: relative;
}

.map-open:after {
    content: '';
    position: absolute;
    left: 0;
    width: 20px;
    background: #101010;
    height: 1px;
    bottom: -10px;
}

#contact .form-control{
    border: 0;
    background: transparent;
    border-bottom: 1px solid #101010;
    box-shadow: none;
    border-radius: 0;
    -webkit-border-radius:0;
    -moz-border-radius:0;
}

#contact input, #contact textarea {
    text-indent: 10px;
}

#contact input.form-control{
    height: 50px;
}

#contact .form-control:focus {
    border-bottom: 1px solid #aaa;
    box-shadow: none;
}

#contact .form-control-feedback {
    left: 0;
    height: 50px;
    line-height: 50px;
}

#contact .message .form-control-feedback {
    line-height: 33px;
}

#msgSubmit {
    text-align: center;
    float: none;
    font-weight: 400;
    padding: 10px;
    font-size: 16px;
    color: #101010;
    border: 1px solid #aaa;
    transition: all .25s ease-in;
}

/* -------------------------------------
            11. EXTRAS
* ------------------------------------- */

/* ------------ 11.1 LOADER ------------ */
#loader{
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    z-index: 9999;;
}


#loader .box-one, #loader .box-two, #loader .box-three, #loader .box-four{
    position: absolute;
    left: 50%;
    top: 50%;
    width: 34px;
    height: 34px;
    border: 1px solid #101010;

}

#loader .box-one{
    -webkit-animation-name: loader-animation-one;
            animation-name: loader-animation-one;
    -webkit-animation-duration: 4s;
            animation-duration: 4s;
    -webkit-animation-fill-mode: forwards;
            animation-fill-mode: forwards;
    -webkit-animation-iteration-count: infinite;
            animation-iteration-count: infinite;
    -webkit-animation-timing-function: linear;
            animation-timing-function: linear;
}

#loader .box-two{
    -webkit-animation-name: loader-animation-two;
            animation-name: loader-animation-two;
    -webkit-animation-duration: 4s;
            animation-duration: 4s;
    -webkit-animation-fill-mode: forwards;
            animation-fill-mode: forwards;
    -webkit-animation-iteration-count: infinite;
            animation-iteration-count: infinite;
    -webkit-animation-timing-function: linear;
            animation-timing-function: linear;
}
#loader .box-three{
    -webkit-animation-name: loader-animation-three;
            animation-name: loader-animation-three;
    -webkit-animation-duration: 8s;
            animation-duration: 8s;
    -webkit-animation-fill-mode: forwards;
            animation-fill-mode: forwards;
    -webkit-animation-iteration-count: infinite;
            animation-iteration-count: infinite;
    -webkit-animation-timing-function: linear;
            animation-timing-function: linear;
}

#loader .box-four{
    -webkit-animation-name: loader-animation-four;
            animation-name: loader-animation-four;
    -webkit-animation-duration: 8s;
            animation-duration: 8s;
    -webkit-animation-fill-mode: forwards;
            animation-fill-mode: forwards;
    -webkit-animation-iteration-count: infinite;
            animation-iteration-count: infinite;
    -webkit-animation-timing-function: linear;
            animation-timing-function: linear;
}

@-webkit-keyframes loader-animation-one{
    0%{
        transform:rotate(0deg) translate(-50%, -50%);
        -moz-transform: rotate(0deg) translate(-50%, -50%);
        -webkit-transform: rotate(0deg) translate(-50%, -50%);
    }
    25%{
        transform:rotate(-90deg) translate(-50%, -50%);
        -moz-transform: rotate(-90deg) translate(-50%, -50%);
        -webkit-transform: rotate(-90deg) translate(-50%, -50%);
    }
    50%{
        transform:rotate(0deg) translate(-50%, -50%);
        -moz-transform: rotate(0deg);
        -webkit-transform: rotate(0deg) translate(-50%, -50%);
    }
    75%{
        transform:rotate(90deg) translate(-50%, -50%);
        -moz-transform: rotate(90deg) translate(-50%, -50%);
        -webkit-transform: rotate(90deg) translate(-50%, -50%);
    }
    100%{
        transform:rotate(0deg) translate(-50%, -50%);
        -moz-transform: rotate(0deg) translate(-50%, -50%);
        -webkit-transform: rotate(0deg) translate(-50%, -50%);
    }

}

@keyframes loader-animation-one{
    0%{
        transform:rotate(0deg) translate(-50%, -50%);
        -moz-transform: rotate(0deg) translate(-50%, -50%);
        -webkit-transform: rotate(0deg) translate(-50%, -50%);
    }
    25%{
        transform:rotate(-90deg) translate(-50%, -50%);
        -moz-transform: rotate(-90deg) translate(-50%, -50%);
        -webkit-transform: rotate(-90deg) translate(-50%, -50%);
    }
    50%{
        transform:rotate(0deg) translate(-50%, -50%);
        -moz-transform: rotate(0deg);
        -webkit-transform: rotate(0deg) translate(-50%, -50%);
    }
    75%{
        transform:rotate(90deg) translate(-50%, -50%);
        -moz-transform: rotate(90deg) translate(-50%, -50%);
        -webkit-transform: rotate(90deg) translate(-50%, -50%);
    }
    100%{
        transform:rotate(0deg) translate(-50%, -50%);
        -moz-transform: rotate(0deg) translate(-50%, -50%);
        -webkit-transform: rotate(0deg) translate(-50%, -50%);
    }

}
@-webkit-keyframes loader-animation-two{
    0%{
        transform:rotate(0deg) translate(-50%, -50%);
        -moz-transform: rotate(0deg) translate(-50%, -50%);
        -webkit-transform: rotate(0deg) translate(-50%, -50%);
    }
    25%{
        transform:rotate(90deg) translate(-50%, -50%);
        -moz-transform: rotate(90deg) translate(-50%, -50%);
        -webkit-transform: rotate(90deg) translate(-50%, -50%);
    }
    50%{
        transform:rotate(0deg) translate(-50%, -50%);
        -moz-transform: rotate(0deg) translate(-50%, -50%);
        -webkit-transform: rotate(0deg) translate(-50%, -50%);
    }
    75%{
        transform:rotate(-90deg) translate(-50%, -50%);
        -moz-transform: rotate(-90deg) translate(-50%, -50%);
        -webkit-transform: rotate(-90deg) translate(-50%, -50%);
    }
    100%{
        transform:rotate(0deg) translate(-50%, -50%);
        -moz-transform: rotate(0deg) translate(-50%, -50%);
        -webkit-transform: rotate(0deg) translate(-50%, -50%);
    }
}
@keyframes loader-animation-two{
    0%{
        transform:rotate(0deg) translate(-50%, -50%);
        -moz-transform: rotate(0deg) translate(-50%, -50%);
        -webkit-transform: rotate(0deg) translate(-50%, -50%);
    }
    25%{
        transform:rotate(90deg) translate(-50%, -50%);
        -moz-transform: rotate(90deg) translate(-50%, -50%);
        -webkit-transform: rotate(90deg) translate(-50%, -50%);
    }
    50%{
        transform:rotate(0deg) translate(-50%, -50%);
        -moz-transform: rotate(0deg) translate(-50%, -50%);
        -webkit-transform: rotate(0deg) translate(-50%, -50%);
    }
    75%{
        transform:rotate(-90deg) translate(-50%, -50%);
        -moz-transform: rotate(-90deg) translate(-50%, -50%);
        -webkit-transform: rotate(-90deg) translate(-50%, -50%);
    }
    100%{
        transform:rotate(0deg) translate(-50%, -50%);
        -moz-transform: rotate(0deg) translate(-50%, -50%);
        -webkit-transform: rotate(0deg) translate(-50%, -50%);
    }
}


@-webkit-keyframes loader-animation-three{
    0%{
        transform:rotate(0deg) translate(-50%, -50%);;
        -moz-transform: rotate(0deg) translate(-50%, -50%);;
        -webkit-transform: rotate(0deg) translate(-50%, -50%);;
    }
    25%{
        transform:rotate(-360deg) translate(-50%, -50%);;
        -moz-transform: rotate(-360deg) translate(-50%, -50%);;
        -webkit-transform: rotate(-360deg) translate(-50%, -50%);;
    }
    50%{
        transform:rotate(0deg) translate(-50%, -50%);;
        -moz-transform: rotate(0deg) translate(-50%, -50%);;
        -webkit-transform: rotate(0deg) translate(-50%, -50%);;
    }
    75%{
        transform:rotate(360deg) translate(-50%, -50%);;
        -moz-transform: rotate(360deg) translate(-50%, -50%);;
        -webkit-transform: rotate(360deg) translate(-50%, -50%);;
    }
    100%{
        transform:rotate(0deg) translate(-50%, -50%);;
        -moz-transform: rotate(0deg) translate(-50%, -50%);;
        -webkit-transform: rotate(0deg) translate(-50%, -50%);;
    }

}


@keyframes loader-animation-three{
    0%{
        transform:rotate(0deg) translate(-50%, -50%);;
        -moz-transform: rotate(0deg) translate(-50%, -50%);;
        -webkit-transform: rotate(0deg) translate(-50%, -50%);;
    }
    25%{
        transform:rotate(-360deg) translate(-50%, -50%);;
        -moz-transform: rotate(-360deg) translate(-50%, -50%);;
        -webkit-transform: rotate(-360deg) translate(-50%, -50%);;
    }
    50%{
        transform:rotate(0deg) translate(-50%, -50%);;
        -moz-transform: rotate(0deg) translate(-50%, -50%);;
        -webkit-transform: rotate(0deg) translate(-50%, -50%);;
    }
    75%{
        transform:rotate(360deg) translate(-50%, -50%);;
        -moz-transform: rotate(360deg) translate(-50%, -50%);;
        -webkit-transform: rotate(360deg) translate(-50%, -50%);;
    }
    100%{
        transform:rotate(0deg) translate(-50%, -50%);;
        -moz-transform: rotate(0deg) translate(-50%, -50%);;
        -webkit-transform: rotate(0deg) translate(-50%, -50%);;
    }

}
@-webkit-keyframes loader-animation-four{
    0%{
        transform:rotate(0deg) translate(-50%, -50%);;
        -moz-transform: rotate(0deg) translate(-50%, -50%);;
        -webkit-transform: rotate(0deg) translate(-50%, -50%);;
    }
    25%{
        transform:rotate(360deg) translate(-50%, -50%);;
        -moz-transform: rotate(360deg) translate(-50%, -50%);;
        -webkit-transform: rotate(360deg) translate(-50%, -50%);;
    }
    50%{
        transform:rotate(0deg) translate(-50%, -50%);;
        -moz-transform: rotate(0deg) translate(-50%, -50%);;
        -webkit-transform: rotate(0deg) translate(-50%, -50%);;
    }
    75%{
        transform:rotate(-360deg) translate(-50%, -50%);;
        -moz-transform: rotate(-360deg) translate(-50%, -50%);;
        -webkit-transform: rotate(-360deg) translate(-50%, -50%);;
    }
    100%{
        transform:rotate(0deg) translate(-50%, -50%);;
        -moz-transform: rotate(0deg) translate(-50%, -50%);;
        -webkit-transform: rotate(0deg) translate(-50%, -50%);;
    }
}
@keyframes loader-animation-four{
    0%{
        transform:rotate(0deg) translate(-50%, -50%);;
        -moz-transform: rotate(0deg) translate(-50%, -50%);;
        -webkit-transform: rotate(0deg) translate(-50%, -50%);;
    }
    25%{
        transform:rotate(360deg) translate(-50%, -50%);;
        -moz-transform: rotate(360deg) translate(-50%, -50%);;
        -webkit-transform: rotate(360deg) translate(-50%, -50%);;
    }
    50%{
        transform:rotate(0deg) translate(-50%, -50%);;
        -moz-transform: rotate(0deg) translate(-50%, -50%);;
        -webkit-transform: rotate(0deg) translate(-50%, -50%);;
    }
    75%{
        transform:rotate(-360deg) translate(-50%, -50%);;
        -moz-transform: rotate(-360deg) translate(-50%, -50%);;
        -webkit-transform: rotate(-360deg) translate(-50%, -50%);;
    }
    100%{
        transform:rotate(0deg) translate(-50%, -50%);;
        -moz-transform: rotate(0deg) translate(-50%, -50%);;
        -webkit-transform: rotate(0deg) translate(-50%, -50%);;
    }
}


/* ------------ 11.2 LINE ART ------------ */
.line-art-top{
    position: absolute;
    top:0;
    left: 50%;
    -webkit-transform: translateX(-50%) rotate(90deg);
            transform: translateX(-50%) rotate(90deg);
    margin-top: -14px;
}

.line-art-bottom{
    position: absolute;
    bottom:0;
    left: 50%;
    -webkit-transform: translateX(-50%) rotate(90deg);
            transform: translateX(-50%) rotate(90deg);
    margin-bottom: -14px;
}

.line-art-left{
    position: absolute;
    top:50%;
    left: 0;
    -webkit-transform: translateY(-50%);
            transform: translateY(-50%);
    margin-left: 5px;
}

.line-art-right{
    position: absolute;
    top:50%;
    right: 0;
    -webkit-transform: translateY(-50%);
            transform: translateY(-50%);
    margin-right: 5px;
}

.line-art-top div, .line-art-bottom div, .line-art-left div, .line-art-right div{
    background: #101010;
    width: 10px;
    height: 1px;
    -webkit-transform: rotate(45deg);
            transform: rotate(45deg);
}

.line-art-top div:nth-child(1), .line-art-top div:nth-child(2), .line-art-top div:nth-child(3), .line-art-top div:nth-child(4),
.line-art-bottom div:nth-child(1), .line-art-bottom div:nth-child(2), .line-art-bottom div:nth-child(3), .line-art-bottom div:nth-child(4),
.line-art-left div:nth-child(1), .line-art-left div:nth-child(2), .line-art-left div:nth-child(3), .line-art-left div:nth-child(4),
.line-art-right div:nth-child(1), .line-art-right div:nth-child(2), .line-art-right div:nth-child(3), .line-art-right div:nth-child(4){
    margin: 5px;
}


/* ------------ 11.3 TEXTURE ------------ */
.texture, 
#msgSubmit, 
#fun-fact .counter li, 
.process li:first-child, 
.process li:last-child,
.box-it:before {
    background: url("./../assets/images/texture.png");
}


/* ------------ 11.4 SOCIAL LINKS ------------ */
.social-links {
    display: inline-block;
}
.social-links a {
    margin-right: 5px;
    display: inline-block;
    text-decoration: none;
    font-weight: 400;
    color: #101010;
}

.social-links a:hover {
    text-decoration: none
}


/* ------------ 11.5 OWL CAROUSEL MODIFIED ------------ */
.owl-theme .owl-controls {
    margin-top: 10px;
}

.port-holder.owl-theme .owl-controls {
    margin-top: 0;
    margin-left: 15px;
    margin-right: 15px;
}

.owl-prev , .owl-next {
    display: inline-block;
    font-size: 25px;
    color: #101010;
}

.owl-prev {
  margin-right: 15px;
}


/* -------------------------------------
              12. RESPONSIVE
* ------------------------------------- */

@media (max-width: 991px) { 

    body {
        font-size: 12px;
    }

    section {
        margin-bottom: 0;
    }

    a {
        font-size: 13px;
    }
    
    .header {
        margin-bottom: 30px;
    }

    h1 { /* 36px */
        font-size: 30px;
    }

    h2 { /* 30px */
        font-size: 24px;
    }

    h3 { /* 24px */
        font-size: 18px;
    }

    h4 { /* 18px */
        font-size: 14px;
    }

    h5 { /* 14px */
        font-size: 12px;
    }

    h6 { /* 12px */
        font-size: 10px;
    }

    .sector .main-title {
        font-size: 50px;
    }

    [class*=col] {
        margin-bottom: 30px;
    }

    .menu {
        left: 0;
        bottom: 40px;
        padding: 15px 15px 0 15px;
    }

    .menu .menu-holder {
        border: 1px solid #101010;
    }

    .menu.menu-active .menu-holder {
        border: 1px solid transparent;
    }

    .i-size-med {
        font-size: 35px;
    }

    .i-size-big {
        font-size: 50px;
    }

    .img-holder {
        max-width: 350px;
        margin: 0 auto;
    }

    .skillbar-title {
        font-size: 13px;
    }

    .time-year {
        position: relative;
        font-size: 15px;
        color: #101010;
        font-weight: 400;
        opacity: 1;
        -webkit-transform: none;
        transform: none;
    }

    .icon-holder-time {
        top: 50px;
    }
    
    .box-it {
        max-width: 350px;
        margin:0 auto;
    }

}

@media (max-width: 479px) { 
    .process li {
        border: 1px solid #aaa;
        min-width: 90px;
        display: inline-block;
        margin: 10px 5px 18px;
    }
}
</style>
