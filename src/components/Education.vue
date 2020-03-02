<template>
  <section id="skill-education">
        <!-- Big Section Background Title -->
        <h1 class="section-big-title til hidden-xs hidden-sm" data-in-effect="fadeInUp" data-out-effect="fadeInDown">education</h1><!-- /. large title -->

        <div class="container">
            <div class="row">
                <!-- skills -->
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

                        <!-- skills -->
                        <div class="icon-holder i-size-big">
                            <i class="ion-ios-star-outline"></i>
                        </div>

                        <h3> Skills </h3>
                        
                        <div class="skill-holder">
                        <carousel :autoplay="false" :dots="false" :items="1" :nav="true" 
                        :navText="['<span class=ion-ios-arrow-left></span>','<span class=ion-ios-arrow-right></span>']"
                        :addClassActive="true">
                            <div class="skill-area">
                            <h4 class="skill-title"> Professional </h4><!-- /.skill type name -->
                                
                                <div class="skillbar clearfix" data-percent="90%">
                                    <div class="skillbar-title">
                                        <span>CSS</span>
                                    </div>
                                    <div class="skillbar-bg">
                                    </div>
                                    <div class="skillbar-bar to-animate">
                                    </div>
                                    <div class="skill-bar-percent">
                                        90%
                                    </div>
                                </div> <!-- /.skill bar -->
                                
                                <div class="skillbar clearfix" data-percent="95%">
                                    <div class="skillbar-title">
                                        <span>HTML</span>
                                    </div>
                                    <div class="skillbar-bg">
                                    </div>
                                    <div class="skillbar-bar to-animate">
                                    </div>
                                    <div class="skill-bar-percent">
                                        95%
                                    </div>
                                </div> <!-- /.skill bar -->

                                <div class="skillbar clearfix" data-percent="90%">
                                    <div class="skillbar-title">
                                        <span>CSS</span>
                                    </div>
                                    <div class="skillbar-bg">
                                    </div>
                                    <div class="skillbar-bar to-animate">
                                    </div>
                                    <div class="skill-bar-percent">
                                        90%
                                    </div>
                                </div> <!-- /.skill bar -->

                                <div class="skillbar clearfix" data-percent="80%">
                                    <div class="skillbar-title">
                                        <span>jQuery</span>
                                    </div>
                                    <div class="skillbar-bg">
                                    </div>
                                    <div class="skillbar-bar to-animate">
                                    </div>
                                    <div class="skill-bar-percent">
                                        80%
                                    </div>
                                </div> <!-- /.skill bar -->
                            </div> <!-- /.skill area -->

                            <div class="skill-area">
                            <h4 class="skill-title"> Intermediate </h4><!-- /.skill type name -->
                                <div class="skillbar clearfix" data-percent="80%">
                                    <div class="skillbar-title">
                                        <span>Portrait Sketch</span>
                                    </div>
                                    <div class="skillbar-bg">
                                    </div>
                                    <div class="skillbar-bar">
                                    </div>
                                    <div class="skill-bar-percent">
                                        80%
                                    </div>
                                </div> <!-- /.skill bar -->

                                <div class="skillbar clearfix" data-percent="75%">
                                    <div class="skillbar-title">
                                        <span>Photography</span>
                                    </div>
                                    <div class="skillbar-bg">
                                    </div>
                                    <div class="skillbar-bar">
                                    </div>
                                    <div class="skill-bar-percent">
                                        75%
                                    </div>
                                </div> <!-- /.skill bar -->

                                <div class="skillbar clearfix" data-percent="90%">
                                    <div class="skillbar-title">
                                        <span>iOS</span>
                                    </div>
                                    <div class="skillbar-bg">
                                    </div>
                                    <div class="skillbar-bar">
                                    </div>
                                    <div class="skill-bar-percent">
                                        90%
                                    </div>
                                </div> <!-- /.skill bar -->

                                <div class="skillbar clearfix" data-percent="88%">
                                    <div class="skillbar-title">
                                        <span>Android</span>
                                    </div>
                                    <div class="skillbar-bg">
                                    </div>
                                    <div class="skillbar-bar">
                                    </div>
                                    <div class="skill-bar-percent">
                                        88%
                                    </div>
                                </div> <!-- /.skill bar -->
                            </div> <!-- /.skill area -->
                            
                            <div class="skill-area">
                            <h4 class="skill-title"> Beginner </h4><!-- /.skill type name -->
                                <div class="skillbar clearfix" data-percent="20%">
                                    <div class="skillbar-title">
                                        <span>Laziness</span>
                                    </div>
                                    <div class="skillbar-bg">
                                    </div>
                                    <div class="skillbar-bar">
                                    </div>
                                    <div class="skill-bar-percent">
                                        20%
                                    </div>
                                </div> <!-- /.skill bar -->

                                <div class="skillbar clearfix" data-percent="40%">
                                    <div class="skillbar-title">
                                        <span>Swimming</span>
                                    </div>
                                    <div class="skillbar-bg">
                                    </div>
                                    <div class="skillbar-bar">
                                    </div>
                                    <div class="skill-bar-percent">
                                        40%
                                    </div>
                                </div> <!-- /.skill bar -->
                            </div> <!-- /.skill area -->
                        </carousel>
                        </div> <!-- /.skill-holder -->
                    </div> <!-- /.section-holder -->
                </div> <!-- /.col-sm-4 -->
                
                <!-- education -->
                <div class="col-sm-8">
                    <div class="section-holder">
                        <div class="icon-holder i-size-big">
                            <i class="ion-ios-lightbulb-outline"></i>
                        </div>
                        <h3> Education </h3>
                        <div class="time-line">
                            <div class="row">
                                <div class="col-sm-12">
                                    <div class="time-item">
                                        <div class="time-year">
                                            2013-Present
                                        </div>
                                        <div class="icon-holder-time wow fadeIn">
                                            <i class="ion-ios-circle-outline"></i>
                                        </div>
                                        <h4 class="time-title">
                                        ILD University of Technology
                                    </h4>
                                        <h5 class="time-semitag"> Major in Computer Science </h5>
                                        <p>
                                            Given two spirit very unto firmament. Fourth and she'd their fruit together.
                                        </p>
                                    </div>
                                </div><!-- /.col-md-12 -->
                                <div class="col-sm-12">
                                    <div class="time-item">
                                        <div class="time-year">
                                            2011-2013
                                        </div>
                                        <div class="icon-holder-time wow fadeIn" data-wow-delay=".25s">
                                            <i class="ion-ios-circle-outline"></i>
                                        </div>
                                        <h4 class="time-title">
                                        Newton College of Science & Arts
                                    </h4>
                                        <h5 class="time-semitag"> Standard Applied Science </h5>
                                        <p>
                                            Given two spirit very unto firmament. Fourth and she'd their fruit together.
                                        </p>
                                    </div>
                                </div><!-- /.col-md-12 -->
                                <div class="col-sm-12">
                                    <div class="time-item">
                                        <div class="time-year">
                                            2009-2011
                                        </div>
                                        <div class="icon-holder-time wow fadeIn" data-wow-delay=".5s">
                                            <i class="ion-ios-circle-outline"></i>
                                        </div>
                                        <h4 class="time-title">
                                        Twinkle Higher Secondary School
                                    </h4>
                                        <h5 class="time-semitag"> Standard Secondary Science </h5>
                                        <p>
                                            Given two spirit very unto firmament. Fourth and she'd their fruit together.
                                        </p>
                                    </div>
                                </div><!-- /.col-md-12 -->
                            </div><!-- /.row -->
                        </div><!-- /.time-line -->
                    </div><!-- /.section-holder -->
                </div><!-- /.section-holder -->
            </div><!-- /.col-md-8 -->
        </div><!-- /.container -->
    </section><!-- /.skill & education -->
</template>

<script>
// import JQuery from 'jquery';
// let $ = JQuery;
import carousel from 'vue-owl-carousel';
export default {
    components: { carousel },
    name: 'Education',
    props: {
        msg: String
    },
    mounted () {
        
        
    },
    methods:{
        
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
/* -------------------------------------
          4. SKILLS
* ------------------------------------- */
.skill-title {
    text-align: right;
    position: relative;
}

.skill-title:after {
    content: '';
    position: absolute;
    right: 0;
    width: 20px;
    background: #101010;
    height: 1px;
    bottom: -5px;
}

.skillbar {
    position:relative;
    display:block;
    margin-bottom:10px;
    width:100%;
    transition:0.4s linear;
    transition-property:width, background-color;
    padding:15px 0;
}

.skillbar-title {
    position: relative;
    font-size: 14px;
    color: #101010;
    z-index: 100;
    display: block;
    width: 100%;
}

.skillbar-title span {
    display: block;
    height: 35px;
    line-height: 35px;
    text-align: right;
}

.skillbar-bar {
    height:2px;
    width:0;
    z-index:10;
    position:absolute;
    right: 0;
    background: #101010;
}

.skill-bar-percent {
    position:absolute;
    left:0;
    top:15px;
    font-size:12px;
    height:35px;
    line-height:35px;
    color:#aaa;
    z-index: 100;
}

.skillbar-bg {
    width: 100%;
    height: 2px;
    background: #aaa;
    position: absolute;
    z-index: 0;
}


/* -------------------------------------
    5. EDUCATION & WORK EXPERIENCE
* ------------------------------------- */
.time-line {
    position: relative;
}

.time-item {
    padding: 15px 0;
    position: relative;
}

.time-year {
    position: absolute;
    top: 50%;
    right: 0;
    -webkit-transform: translateY(-50%);
            transform: translateY(-50%);
    font-size: 40px;
    color: #ececec;
    opacity: 1;
    font-weight: 400;
}

.icon-holder-time {
    display: inline-block;
    position: absolute;
    top: 32px;
    left: -30px;
    -webkit-transform: translateX(-50%);
            transform: translateX(-50%);
    background: #fff;
    font-size: 30px;
    line-height: 0;
    padding: 0 1px;
    border-radius: 50%;
}
</style>
