<template>
  <form @submit.prevent = "handleSubmit">
      <input type="text" required placeholder="Enter your name" v-model="name">
      <input type="email" required placeholder="Enter your email" v-model="email">
      <input type="password" required placeholder="password" v-model="password">
      <button>Sign up</button>
      <p v-if="error" class="error"> {{ error }} </p>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import useSignup from '../composables/useSignup'
export default {
    setup(props, context) {
        const { error, signup } = useSignup()

        const displayName = ref('')
        const email = ref('')
        const password = ref('')

        const handleSubmit = async () => {
            await signup(email.value, password.value, displayName.value)
            if (!error.value) {
                context.emit('signup')
            }
        }
        return { name, email, password, handleSubmit, error }
    }
}
</script>

<style>

</style>