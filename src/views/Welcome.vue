<template>
  <div class="welcome container">
      <p>Welcome</p>
      <div v-if="showLogin">
          <h2>Log in</h2>
          <Login @login="enterChat" />
          <p>Wanna create an account <span @click="showLogin = false">Sign up</span> </p>
      </div>
      <div v-else>
          <h2>Sign up</h2>
          <SignupForm @signup="enterChat" />
          <p>Have account <span @click="showLogin = true">Log in</span> </p>
      </div>
  </div>
</template>

<script>
import SignupForm from '../components/SignupForm.vue'
import Login from '../components/LoginForm.vue'
import { ref } from '@vue/reactivity'
import { useRouter } from 'vue-router'
export default {
    components: { SignupForm, Login },
    setup() {
        const showLogin = ref(true)

        const router = useRouter()
        const enterChat = () => {
          router.push({ name: 'Chatroom' })
        }

        return { showLogin, enterChat }
    }
}
</script>

<style>
  .welcome {
    text-align: center;
    padding: 20px 0;
  }
  /* form styles */
  .welcome form {
    width: 300px;
    margin: 20px auto;
  }
  .welcome label {
    display: block;
    margin: 20px 0 10px;
  }
  .welcome input {
    width: 100%;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid #eee;
    outline: none;
    color: #999;
    margin: 10px auto;
  }
  .welcome span{
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
  }
  .welcome button {
    margin: 20px auto;
  }
</style>