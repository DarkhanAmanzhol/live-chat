<template>
  <form @submit.prevent = "handleSubmit">
      <input type="email" required placeholder="Enter your email" v-model="email">
      <input type="password" required placeholder="password" v-model="password">
      <button>Log in</button>
      <p class="error"> {{ error }} </p>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import useLogin from '../composables/useLogin'
export default {
    setup(props, context) {
        const { error, login } = useLogin()

        const email = ref('')
        const password = ref('')

        const handleSubmit = async () => {
            await login(email.value, password.value)
            if(!error.value) {
                context.emit('login')
            }
        }
        return { email, password, handleSubmit, error }
    }
}
</script>

<style>

</style>