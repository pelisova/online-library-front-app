<template>
      <widget-container-modal />
      <Header/>
      <div class="main-container">
        <router-view/>
      </div>
      <Footer/>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import {container} from "jenesius-vue-modal";


export default {
    name: 'Home',
    components: {
        Header,
        Footer,
        WidgetContainerModal: container
    },
    methods: {

    }
}
</script>

<style>
body{
  background-color: #F2F2F2; 
  /* background-image: url("./assets/back4.png");
  background-repeat: no-repeat;
  background-size: cover; */
}

.main-container{
  padding-left: 20%;
  padding-right: 20%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 1px;
}
</style>
