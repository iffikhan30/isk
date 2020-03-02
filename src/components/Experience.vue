<template>
  <section id="experience-testimonials">
        <!-- Big Section Background Title -->
        <h1 class="section-big-title til hidden-xs hidden-sm" data-in-effect="fadeInUp" data-out-effect="fadeInDown">experience</h1><!-- /. large title -->

        <div class="container">
            <div class="row">
                <!-- work experience -->
                <div class="col-sm-8">
                    <div class="section-holder">
                        <div class="icon-holder i-size-big">
                            <i class="ion-ios-briefcase-outline"></i>
                        </div>
                        <h3> Work Experience </h3>
                        <div class="time-line">
                            <div class="row">
                                <div class="col-sm-12">
                                    <div class="time-item">
                                        <div class="time-year">
                                            2015-Present
                                        </div>
                                        <div class="icon-holder-time wow fadeIn">
                                            <i class="ion-ios-circle-outline"></i>
                                        </div>
                                        <h4 class="time-title">
                                        BulkStudio
                                    </h4>
                                        <h5 class="time-semitag"> Senior Web Designer </h5>
                                        <p>
                                            Given two spirit very unto firmament. Fourth and she'd their fruit together.
                                        </p>
                                    </div>
                                    <div class="work-item-icon">
                                    </div>
                                </div><!-- /.col-md-12 -->

                                <div class="col-sm-12">
                                    <div class="time-item">
                                        <div class="time-year">
                                            2014-2015
                                        </div>
                                        <div class="icon-holder-time wow fadeIn" data-wow-delay=".25s">
                                            <i class="ion-ios-circle-outline"></i>
                                        </div>
                                        <h4 class="time-title">
                                        Orion Technology 
                                    </h4>
                                        <h5 class="time-semitag"> Junior Web Designer </h5>
                                        <p>
                                            Given two spirit very unto firmament. Fourth and she'd their fruit together.
                                        </p>
                                    </div>
                                </div><!-- /.col-md-12 -->

                                <div class="col-sm-12">
                                    <div class="time-item">
                                        <div class="time-year">
                                            2013-2014
                                        </div>
                                        <div class="icon-holder-time wow fadeIn" data-wow-delay=".5s">
                                            <i class="ion-ios-circle-outline"></i>
                                        </div>
                                        <h4 class="time-title">
                                        Cubic Web Development Agency
                                    </h4>
                                        <h5 class="time-semitag"> Developer Internship </h5>
                                        <p>
                                            Given two spirit very unto firmament. Fourth and she'd their fruit together.
                                        </p>
                                    </div>
                                </div><!-- /.col-md-12 -->

                            </div><!-- /.time-line -->
                        </div><!-- /.row -->
                    </div><!-- /.section-holder -->
                </div><!-- /.col-md-8 -->

                <!-- testimonials -->
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
                            <i class="ion-ios-chatboxes-outline"></i>
                        </div>

                        <h3> Testimonials </h3>
                        <div class="testi-holder">
                            <carousel :autoplay="false" :dots="false" :items="1" :nav="true" 
                        :navText="['<span class=ion-ios-arrow-left></span>','<span class=ion-ios-arrow-right></span>']"
                       >
                                <div class="testi-item">
                                    <img src="./../assets/images/testimonial/testi1.jpg" class="img-circle" alt="Anthony Doe"/>
                                    <p> Pefect, this is exactly what I needed for me. Really great work. </p>
                                    <div class="testi-bottom">
                                        <div class="i-size-small testi-icon">
                                            <i class="ion-ios-chatbubble-outline"></i>
                                        </div>
                                        <h5> Anthony Doe </h5>
                                        <p> CEO, XB Inc </p>
                                    </div>
                                </div><!-- /.testi-item -->

                                <div class="testi-item">
                                    <img src="./../assets/images/testimonial/testi2.jpg" class="img-circle" alt="Jenna Doe"/>
                                    <p> Very much satisfied by the work. Highly recommended! </p>
                                    <div class="testi-bottom">
                                        <div class="i-size-small testi-icon">
                                            <i class="ion-ios-chatbubble-outline"></i>
                                        </div>
                                        <h5> Jenna Doe </h5>
                                        <p> Owner, Fashion Store </p>
                                    </div>
                                </div><!-- /.testi-item -->

                                <div class="testi-item">
                                    <img src="./../assets/images/testimonial/testi3.jpg" class="img-circle" alt="Michael Hussey"/>
                                    <p> Good work done by the designer. Really clean and organized approach. </p>
                                    <div class="testi-bottom">
                                        <div class="i-size-small testi-icon">
                                            <i class="ion-ios-chatbubble-outline"></i>
                                        </div>
                                        <h5> Michael Hussey </h5>
                                        <p> Manager, Basic Consultants </p>
                                    </div>
                                </div><!-- /.testi-item -->
                            </carousel>
                        </div><!-- /.testi-holder -->
                    </div><!-- /.section-holder -->
                </div><!-- /.col-md-4 -->
            </div><!-- /.row -->
        </div><!-- container -->
    </section><!-- work experience & testimonials -->
</template>

<script>
import carousel from 'vue-owl-carousel';
export default {
  components: { carousel },
  name: 'Experience',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
/* -------------------------------------
           6. TESTIMONIALS
* ------------------------------------- */
.owl-item .testi-item  img {
    width: 50px;
    height: 50px;
    margin-bottom: 15px;
}

.testi-bottom {
    position: relative;
    border-top: 1px solid #aaa;
    margin-top: 40px;
}

.testi-icon {
    position: absolute;
    top: 0;
    margin: 0;
    right: 10%;
    -webkit-transform: translateY(-50%);
            transform: translateY(-50%);
    border: 1px solid #aaa;
    padding: 5px 15px;
    background: #fff;
}
</style>
