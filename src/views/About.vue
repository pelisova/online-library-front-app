<template>
     <h2> Lorem Ipsum </h2>

    <div class="intro">
        <span>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
        "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
        </span>
    </div>   
    <hr> 

<p class="about-container">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed sodales leo, vel fermentum ante. Vestibulum nulla risus, pretium at turpis sed, convallis suscipit dui. Nunc mauris lorem, dignissim ut ornare eu, feugiat eget diam. Nam accumsan faucibus nunc, quis varius quam feugiat non. Etiam convallis arcu et diam sodales, nec semper leo sollicitudin. Nunc id finibus tellus. Cras sit amet diam non arcu condimentum cursus. Duis eu egestas felis, et ornare lectus. Duis nec neque tellus. Sed iaculis sapien consequat, maximus mauris id, rhoncus sapien. Vivamus a tortor efficitur, sollicitudin ipsum ut, suscipit nunc. Aliquam ut viverra diam. Pellentesque hendrerit euismod lacus, nec volutpat nulla facilisis ut. Nam sodales, erat at porttitor feugiat, ante est egestas mauris, eu tincidunt ipsum lectus et elit. Proin aliquet auctor sem in laoreet.

Vivamus sed ex a dolor vulputate scelerisque eget vel ex. Aenean urna ex, molestie sit amet erat sed, tempus lobortis tortor. Praesent lacinia nibh at mauris commodo suscipit. Praesent lacinia felis quis odio auctor, eu egestas erat tristique. Curabitur sed faucibus lorem, a interdum risus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean luctus diam at ex euismod posuere. Quisque vitae commodo eros. Ut et mollis eros. Suspendisse potenti. Nam posuere, felis eget congue elementum, nulla lacus mollis odio, ac sollicitudin eros enim rutrum neque. Nunc at erat libero. Ut mattis nibh in magna semper, a tempus diam interdum.

Aliquam cursus viverra suscipit. Sed ultricies egestas mauris in pellentesque. Donec non commodo justo, sit amet commodo magna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean luctus dui id ex convallis venenatis. Sed dapibus eleifend metus, et aliquet ipsum mattis ut. Nullam vulputate dolor sem, ac malesuada nisl consectetur id. Curabitur non nunc porta, varius eros eu, fermentum diam. Suspendisse ut sollicitudin dui. Donec ac nibh dolor. Suspendisse suscipit nulla in nisl efficitur, sit amet tempus tellus tempor. Suspendisse potenti. Nam sapien leo, imperdiet vitae orci eget, imperdiet ornare erat. Vestibulum ac tellus vitae mauris molestie pellentesque vitae sed massa. Sed sagittis consectetur nibh ac interdum. Praesent viverra eget risus et tincidunt.

</p>

    <h3>Version 1.0.0</h3>
    <router-link to="/">Go back</router-link>
</template>

<script>
import Footer from '../components/Footer.vue'

export default {
    name: 'About',
    components: {
        Footer,        
    }
}
</script>

<style scoped>

.about-container{
    width: 100%;
}

a {
  background-color: #555555;
  border: none;
  color: white;
  font-weight: bolder;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 13px;
  border-radius: 30%;
}

h2{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    padding: 0.1em;
    font-size: 2em;
    font-weight: bolder;
    font-family: cursive;
}
h3{
    margin-top: 3em;
}

.intro{
    font-style: italic;
    text-align: center;
    font-weight: bolder;
    margin-left: 10em;
    margin-right: 10em;
    display: flex;
    flex-direction: column;
}

p{  
    display: flex;
    flex-direction: column;
    text-align: justify;
    font-family: 'Times New Roman', Times, serif;
    font-size: 1.2em;
    color:black;
}

hr {
    clear: both;
    border: 0;
    height: 1px;
    background-image: linear-gradient(to right,rgba(0,0,0,0),rgba(0,0,0,.75),rgba(0,0,0,0));
}
</style>