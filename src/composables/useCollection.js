import { ref } from "vue"
import { firebaseProject } from "../firebase/config"

const useCollection = (collection) => {
    const error = ref(null)


    const addDoc = async (doc) => {
        error.value = null

        try {
            await firebaseProject.collection(collection).add(doc)
        }
        catch(err) {
            console.log(err.message)
            error.value = err.message
        }
    }
    return { error, addDoc }
}

export default useCollection