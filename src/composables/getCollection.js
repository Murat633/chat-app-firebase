import { ref } from "vue";
import { db } from "../firebase/config";

const getCollection= (koleksiyon) =>{
    const belgeler = ref(null)
    const hata = ref(null)

    let koleksiyonRef=db.collection(koleksiyon).orderBy('olusturulmaTarihi')

    koleksiyonRef.onSnapshot(snap=>{
        
        let sonuclar=[]
        snap.docs.forEach(doc=>{
            doc.data().olusturulmaTarihi && sonuclar.push({...doc.data(),id:doc.id})
        })

        belgeler.value = sonuclar
        hata.value=null
    },err=>{
        belgeler.value=null
        hata.value = 'veriler çekilemedi'
    })

    return {hata,belgeler}
}

export default getCollection