<template>
  <form>
    <input placeholder="Mesajınızı Yazın Ve enter'a basın" type="text" v-model="mesaj" @keypress.enter.prevent="gonder">
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import getUser from '../composables/getUser'
import useCollection from '../composables/useColletion'
import { tarih } from '../firebase/config'
export default {
setup(){
    const {kullanici} = getUser();
    const mesaj = ref('')
    
    const {belgeEkle,hata} = useCollection('mesajlar')

    const gonder = async()=>{
        const chat = {
            kullanici:kullanici.value.displayName,
            mesaj:mesaj.value,
            olusturulmaTarihi:tarih()
        }

        await belgeEkle(chat)

        // console.log(chat)
        if(!hata.value){
            mesaj.value = ''
        }else{
            mesaj.value = hata.value
        }
    }

    return {mesaj,gonder}
}
}
</script>

<style scoped>
    form {
        width: 600px;
        margin:30px auto;
        text-align: center;
    }

    input{
        width: 100%;
        max-width: 100%;
        margin-bottom: 5px;
        padding:10px;
        box-sizing: border-box;
        border: 0;
        border-radius: 10px;
        font-family: inherit;
        outline: none;
    }

</style>