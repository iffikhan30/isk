<template>
  <div id="app">
    <Header/>
    <About/>
    <Education/>
    <Experience/>
    <Process/>
    <Work/>
    <Facts/>
    <Reachme/>
  </div>
  <!-- <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div> -->
</template>

<script>
import Header from './components/Header.vue';
import About from './components/About.vue';
import Education from './components/Education.vue';
import Experience from './components/Experience.vue';
import Process from './components/Process.vue';
import Work from './components/Work.vue';
import Facts from './components/Facts.vue';
import Reachme from './components/Reachme.vue';

export default {
  name: 'App',
  components: {
    Header,
    About,
    Education,
    Experience,
    Process,
    Work,
    Facts,
    Reachme
  }
}
</script>

<style>

</style>
