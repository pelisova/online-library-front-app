<template>
    
    <div id="img">
        <h1>Welcome to our home!</h1>         
    </div>
    
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
     <div class="w3-content w3-section" style="max-width:500px">
        <img class="mySlides w3-animate-fading" :src="img1" >
        <img class="mySlides w3-animate-fading" :src="img2" >
        <img class="mySlides w3-animate-fading" :src="img3" >
    </div>
    <button class="btn" v-on:click="scrollToTop">Scroll to Top</button>
   
</template>

<script>

const img1 = require('../assets/slika1.jpg')
const img2 = require('../assets/slika2.jpg')
const img3 = require('../assets/slika3.jpeg')

export default {
    name: 'Home',
    components: {
        
    },
    data() {
        return{
            img1: img1,
            img2: img2,
            img3: img3,
        }   
    },
    methods: {
        carousel() {
            var myIndex =  Math.ceil(Math.random()*3)
            var i;
            var x = document.getElementsByClassName("mySlides");
            for (i = 0; i < x.length; i++) {
                x[i].style.display = "none"; 
            }
            myIndex++;
            if (myIndex > x.length) {myIndex = 1}  
            const element = x[myIndex-1];
            if (element) {
                element.style.display = "block"; 
            }
            setTimeout(this.carousel, 5000) 
        },
        scrollToTop() {
            window.scrollTo(0,0);
            
        }
    },
    mounted() {
        this.carousel()
    },
}
</script>

<style scoped>

h1{
    /* font-style: italic; */
    margin-bottom: 1em;
    margin-top: 1em;
    font-weight: bolder;
}

img{
    height: 30em;
    width: 50em;
    margin-top: 1em;
}

.w3-content{
    display: flex;
    flex-direction: column;
    align-items: center;
}

button{
  background-color:#555555;
  border: none;
  color:white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 13px;
  font-weight: bolder;
  margin-top: 3em;
  cursor: pointer;
  border-radius: 30%;
}


</style>