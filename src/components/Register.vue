<template>
  <form @submit.prevent="uyeOl">
    <h4>Kayıt Ol</h4>
    <input type="text" placeholder="Kullanıcı Adını Giriniz." v-model="kullaniciAd" />
    <input type="email" placeholder="Email Giriniz." v-model="email" />
    <input type="password" placeholder="Parola Giriniz." v-model="parola" />
    <button>Üye Ol!</button>
  </form>
  <div class="error">{{hata}}</div>
</template>

<script>
import {ref} from 'vue'
import useRegister from '../composables/useRegister'
export default {
    setup(props,context){
        const kullaniciAd = ref('')
        const email = ref('')
        const parola = ref('')

        const {hata,signup} = useRegister() 


        const uyeOl = async ()=>{
            // console.log(kullaniciAd.value,email.value,parola.value)
            await signup(email.value,parola.value,kullaniciAd.value)
            if(!hata.value){context.emit('register')}
        }




        return {kullaniciAd,email,parola,uyeOl,hata}
    }
}
</script>

<style>

</style>