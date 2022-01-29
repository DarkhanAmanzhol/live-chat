import { ref, watchEffect } from "vue"
import { firebaseProject } from "../firebase/config"

const getCollection = (collection) => {
    const error = ref(null)
    const documents = ref(null)

    let collectionRef = firebaseProject.collection(collection)
        .orderBy('createdAt')
    
    const onsub = collectionRef.onSnapshot((snap) => { // listener
        let results = []
        snap.docs.forEach(doc => {
            //doc.data.createdAt && results.push({...doc.data(), id: doc.id})
            results.push({...doc.data(), id: doc.id})
        })
        documents.value = results
        error.value = null
    }, (err) => {
        console.log(err.message)
        documents.value = null
        error.value = err.value 
    })

    watchEffect((onInvalidate) => {
        onInvalidate(() => {
            onsub()
        })
    })

    return { error, documents }
}

export default getCollection