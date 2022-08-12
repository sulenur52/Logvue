<template>

<!-- burayı ana sayfa gibi düşün. SPA'da (single page application'da) tek bir sayfa olur ve herşey o sayfa üzerinde barınır. -->
<!-- işte o tek sayfanın organize edildiği yer burası -->
<!-- aşağıda da ilgili sayfalara link verecek kodu yazdım. bunu yazmaz isem o sayfalara gidemem -->
<!-- burayı asp.net web form'daki master page, yada mvc'deki layout gibi düşün. eğer biliyorsan bu şekilde araştırabilirsin.  -->
<!-- birde aşağıdaki kullanımların nasıl olduğunu anlayabilmen için örnekler bıraktım. buradaki isimlendirmeleri router.js dosyasında gerçekleştiriyorum. -->

<ul>
  <li><router-link to="/">Home Page</router-link></li>
  <li><router-link to="/login">Login Page</router-link></li>
  <li><router-link to="register">Register Page</router-link></li>
</ul>

<br>

<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati accusantium veritatis
 quo labore. Atque quas, id assumenda saepe quia quidem laboriosam soluta eius alias 
 debitis, distinctio sint aut? Numquam, quos.</p>
<router-view></router-view>


</template>

<script>



</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
