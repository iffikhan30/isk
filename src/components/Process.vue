<template>
  <section id="work-process">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <div class="section-holder">
                        <div class="text-center">
                            <div class="icon-holder-center i-size-big">
                                <i class="ion-ios-pulse"></i>
                            </div>
                        </div>
                        <h3 class="text-center"> Work Process </h3>
                        
                        <ul class="process">
                            <li class="wow fadeIn" data-wow-delay=".15s">
                                <div class="icon-process i-size-med">
                                    <i class="ion-ionic"></i>
                                </div>
                                <h4>Discover</h4>
                                <h6 class="step">1</h6>
                            </li><!-- /.process item -->

                            <li class="wow fadeIn" data-wow-delay=".3s">
                                <div class="icon-process i-size-med">
                                    <i class="ion-magnet"></i>
                                </div>
                                <h4>Idea</h4>
                                <h6 class="step">2</h6>
                            </li><!-- /.process item -->

                            <li class="wow fadeIn" data-wow-delay=".45s">
                                <div class="icon-process i-size-med">
                                    <i class="ion-scissors"></i>
                                </div>
                                <h4>Design</h4>
                                <h6 class="step">3</h6>
                            </li><!-- /.process item -->

                            <li class="wow fadeIn" data-wow-delay=".6s">
                                <div class="icon-process i-size-med">
                                    <i class="ion-code-working"></i>
                                </div>
                                <h4>Develop</h4>
                                <h6 class="step">4</h6>
                            </li><!-- /.process item -->

                            <li class="wow fadeIn" data-wow-delay=".75s">
                                <div class="icon-process i-size-med">
                                    <i class="ion-clock"></i>
                                </div>
                                <h4>Test</h4>
                                <h6 class="step">5</h6>
                            </li><!-- /.process item -->

                            <li class="wow fadeIn" data-wow-delay=".9s">
                                <div class="icon-process i-size-med">
                                    <i class="ion-paper-airplane"></i>
                                </div>
                                <h4>Launch</h4>
                                <h6 class="step">6</h6>
                            </li><!-- /.process item -->

                        </ul><!-- /.process -->
                    </div><!-- /.section-holder -->
                </div><!-- /.col-sm-12 -->
            </div><!-- /.row -->
        </div><!-- /.container -->
    </section><!-- /.work process -->
</template>

<script>
export default {
  name: 'Process',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
/* -------------------------------------
          7. WORK PROCESS
* ------------------------------------- */
.process {
    padding: 0;
    margin: 0;
    text-align: center;
    width: 100%;
    list-style-type: none;
}

.process .icon-process {
    margin: 10px 0 -10px 0;
}

.process li {
    border: 1px solid #aaa;
    min-width: 120px;
    display: inline-block;
    margin: 10px 10px 18px;
}

.process .step {
    width: 20px;
    height: 20px;
    background-color: #101010;
    color: #fff;
    margin-bottom: 0;
    padding-top: 4px;
}
</style>
