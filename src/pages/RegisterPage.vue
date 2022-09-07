<template>
<div class="LoginPage_registerPage_container" >
<h3 class="text-2xl text-center mb-3">Register</h3>
<input  v-model="userData.fullname" type="text" placeholder="Tam Ad" class="input mb-3"/> <br>
<input  v-model="userData.username" type="text" placeholder="Kullanıcı Adı" class="input mb-3"/><br>
<input  v-model="userData.password"  type="password" placeholder="Şifre" class="input mb-3"/><br> 
<button class="default-button" @click="onSave"  >Kayıt Ol</button> <br>
<span class="text-center mt-3 text-sm">
Zaten üyeyim,
<router-link to="login" class="text-red-900 hover:text-black">
Giriş Yap
</router-link>
</span>
</div>
</template>

<script>
export default {
    data() {
    return {
        userData: {
            username: null,
            fullname: null,
            password: null
        }
        
    };
},
methods:{
    onSave(){
        console.log(this.userData);
        this.$appAxios.post("users",this.userData).then((save_response)=>{

            console.log("save_response",save_response);
        })
    }
}

};

</script>

