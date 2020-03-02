<template>
  <section id="fun-fact">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <div class="section-holder">
                        <div class="text-center">
                            <div class="icon-holder-center i-size-big">
                                <i class="ion-ios-barcode-outline"></i>
                            </div>
                        </div>
                        <h3 class="text-center"> Fun Facts </h3>
                        <ul class="counter">
                            <li>
                                <div class="counter-icon i-size-med">
                                    <i class="ion-ios-analytics"></i>
                                </div>
                                <h1 class="counter-data">128</h1>
                                <h4>Projects Done</h4>
                            </li><!-- /.counter list -->
                            <li>
                                <div class="counter-icon i-size-med">
                                    <i class="ion-ios-color-filter"></i>
                                </div>
                                <h1 class="counter-data">366</h1>
                                <h4>Happy Clients</h4>
                            </li><!-- /.counter list -->
                            <li>
                                <div class="counter-icon i-size-med">
                                    <i class="ion-ios-clock"></i>
                                </div>
                                <h1 class="counter-data">6970</h1>
                                <h4>Hours worked</h4>
                            </li><!-- /.counter list -->
                            <li>
                                <div class="counter-icon i-size-med">
                                    <i class="ion-trophy"></i>
                                </div>
                                <h1 class="counter-data">26</h1>
                                <h4>Awards won</h4>
                            </li><!-- /.counter list -->
                        </ul><!-- /.counter -->
                    </div><!-- /.section-holder -->
                </div><!-- /.col-sm-12 -->
            </div><!-- /.row -->
        </div><!-- /.container -->
    </section><!-- /.fun-fact -->
</template>

<script>
export default {
  name: 'Facts',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
/* -------------------------------------
          9. FUN FACTS
* ------------------------------------- */
#fun-fact .counter{
    padding: 0;
    margin: 0;
    text-align: center;
    width: 100%;
    list-style-type: none;
}

#fun-fact .counter li {
    border: 1px solid #aaa;
    text-align: center;
    display: inline-block;
    min-width: 200px;
    min-height: 100px;
    padding: 25px;
    margin: 10px 10px 18px;
}

#fun-fact .counter h1:before{
    position: absolute;
    content: '';
    background: #333;
    width: 20px;
    height: 1px;
    margin-top: 46px;
}

#fun-fact .counter .counter-icon {
    margin: 0 auto;
}
</style>
