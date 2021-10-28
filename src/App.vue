<template>
      <Header/>
      <router-view/>
      <Footer/>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'


export default {
    name: 'Home',
    components: {
        Header,
        Footer,
    }
}
</script>

<style>
body{
  background-color: #F3F3F3; 
  background-image: url("./assets/back4.png");
  background-repeat: no-repeat;
  background-size: cover;
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
