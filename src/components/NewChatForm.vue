<template>
  <form>
      <textarea placeholder="Type a message..." v-model="message" @keypress.enter.prevent="handleSubmit"></textarea>
      <div class="error">{{ error }}</div>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import getUser from '../composables/getUser'
import useCollection from '../composables/useCollection'
import { timestamp } from '../firebase/config'
export default {
    setup() {
        const { user } = getUser()
        const { error, addDoc } = useCollection('messages')

        const message = ref('')

        const handleSubmit = async () => {
            const chat = {
                message: message.value,
                user: user.value.displayName,
                createdAt: timestamp()
            }
            console.log(chat)
            await addDoc(chat)
            if (!error.value) {
                message.value = ''
            }
        }

        return { message, handleSubmit, error }
    }
}
</script>

<style scoped>
  form {
    margin: 10px;
  }
  textarea {
    width: 100%;
    max-width: 100%;
    margin-bottom: 6px;
    padding: 10px;
    box-sizing: border-box;
    border: 0;
    border-radius: 20px;
    font-family: inherit;
    outline: none;
  }
  .error {
    text-align: center;
    color: #ff2a58;
    font-size: 12px;
    padding: 10px 0;
  }
</style>