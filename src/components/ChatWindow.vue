<template>
  <div>
        <div v-if="hata">{{hata}}</div>
        <div v-if="belgeler" class="messages" ref="mesajlar">
            <div v-for="belge in duzenlenmisBelgeler" :key="belge.id" class="single">
                <span class="created-at">{{ belge.olusturulmaTarihi }}</span>
                <span class="name">{{belge.kullanici}}:</span>
                <span style="text-decoration:none;">{{belge.mesaj}}</span>
            </div>
        </div>
  </div>
</template>

<script>
import getCollection from '../composables/getCollection';
import { computed, onUpdated, ref } from 'vue';
import {formatDistanceToNow} from 'date-fns'
export default {
setup(){
const {hata,belgeler} = getCollection('mesajlar')

const duzenlenmisBelgeler = computed(()=>{
    if(belgeler.value){
        return belgeler.value.map(doc=>{
            let zaman = formatDistanceToNow(doc.olusturulmaTarihi.toDate())
            return {...doc,olusturulmaTarihi:zaman}
        })
    }
 })

const mesajlar = ref(null)

onUpdated(()=>{
    mesajlar.value.scrollTop=mesajlar.value.scrollHeight
})

 return {hata,belgeler,duzenlenmisBelgeler,mesajlar}
}
}
</script>

<style>

</style>