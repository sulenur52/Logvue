<template> 
<div class="LoginPage_registerPage_container">
<h3 class="text-2xl text-center mb-3">Login</h3>
<input type="text" placeholder="Kullanıcı Adı" class="input mb-3"/><br>
<input type="password" placeholder="Şifre" class="input mb-3"/><br>
<button class="default-button">Giriş Yap</button> <br>
<span class="text-center mt-3 text-sm">
Üye değilim,
<router-link to="register" class="text-red-900 hover:text-black">
Üye olmak istiyorum
</router-link>
</span>
</div>

</template>

<script>
export default {};
</script> 




