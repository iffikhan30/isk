<template>
  <section id="about">
        <!-- Big Section Background Title -->
        <h1 class="section-big-title til hidden-xs hidden-sm" data-in-effect="fadeInUp" data-out-effect="fadeInDown">about</h1><!-- /. large title -->

        <div class="container">
            <div class="row">
                <div class="col-sm-4 col-sm-push-8">
                   
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

                        <div class="img-holder">
                            <img src="./../assets/images/avatar.jpg" class="img-responsive img-circle" alt="John Doe">
                        </div>
                        <div class="sep-mini"></div>
                        <h4> Name: Irfan Sarwar Khan </h4>
                        <h4> Date of birth: 30-Dec-1990 </h4>
                        <h4> Nationality: Pakistani </h4>
                        
                         <div class="social-links">
                            <a href="https://github.com/iffikhan30"> <i class="ion-social-github-outline i-size-small"></i> </a>
                         </div><!-- /.social-links -->
                        <!-- id used as tooltip title -->
                        <a class="tooltip-cl cv-download" data-tooltip="Download CV" href="#cv-url"> <i class="ion-ios-download-outline i-size-small"></i> </a>

                     </div><!-- /.section-holder -->
                </div><!-- /. row -->

                <!-- /.col-sm-4 -->
                <div class="col-sm-8 col-sm-pull-4">
                    <div class="section-holder">
                        <!-- short bio -->
                        <div class="icon-holder i-size-big">
                            <i class="ion-ios-compose-outline"></i>
                        </div>
                        <h3 class="section-title"> About Me </h3>
                        <p>
                            Obtain challenging position of a software developer to make use of my skills<br/> and abilities 
                            for betterment of the organization and grow professionally <br/>in my career.   
                        </p>
                        
                        <!-- hobbies 
                        <div class="icon-holder i-size-small">
                            <i class="ion-ios-flame-outline"></i>
                        </div>-->
                        <h4> Hobbies </h4>
                        <p> bicycling | gaming | spent time family </p>
                        
                        <!-- twitter feed 
                        <div class="icon-holder i-size-small">
                            <i class="ion-social-twitter-outline"></i>
                        </div>
                        <h4> Latest Tweet </h4>
                        <div class="tweet"></div>-->

                    </div><!-- /.section-holder -->
                </div><!-- /.col -->
            </div><!-- /. row -->
        </div><!-- /. container -->
    </section>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
/* -------------------------------------
            3. ABOUT
* ------------------------------------- */
.img-holder {
    position: relative;
    margin: 20px 0 30px; 
}

.tweet {
    margin-top: 20px;
}

.tweet ul {
    list-style: none;
    margin: 0;
    padding: 0
}
.cv-download {
    float: right;
    color: #101010;
}

.tooltip-cl {
    display: inline;
    position: relative;
}

.tooltip-cl:hover:after {
    background: #101010;
    bottom: 35px;
    color: #fff;
    font-weight: 400;
    font-size: 12px;
    content: attr(data-tooltip);
    left: 50%;
    -webkit-transform: translateX(-50%);
            transform: translateX(-50%);
    padding: 5px 15px;
    position: absolute;
    z-index: 98;
    width: 110px;
}
</style>
