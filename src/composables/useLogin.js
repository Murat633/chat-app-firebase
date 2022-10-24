import { ref } from "vue";
import { auth } from "../firebase/config";


const hata = ref(null)

const login = async (email,parola)=>{
    hata.value = null;
    try{
        const res = await auth.signInWithEmailAndPassword(email,parola);

        if(!res){
            throw new Error('Giriş işlemi gerçekleşmedi')
        }

        hata.value = null;
        return res;
        
        }catch(error){
            hata.value = error.message
        }

}


const useLogin = () => {
    return {hata,login}
}

export default useLogin