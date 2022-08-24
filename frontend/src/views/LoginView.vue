<template>
  <h1>Login</h1>
  <div id="login">
    <p class="no_account_paragraph">No account? <router-link to="/register" class="register">Register</router-link></p>
    <form @submit.prevent="LoginUser()">
      <p class="error" v-if="error">Wrong credentials!</p>
      <p class="email_paragraph">Email</p>
      <input name="email" type="email" v-model="login" class="email" id="email" required>
      <p class="password_paragraph">Password</p>
      <input name="password" type="text" v-model="password" class="password" required>
      <p>
        <input type="submit" class="login" value="Sign In">
      </p>
    </form>
    <router-link to="/" class="home register">Home</router-link>
  </div>
</template>

<script>
import axios from 'axios'
import VueCookies from 'vue-cookies'
export default {

  data () {
    return {
      login: '',
      password: '',
      error: false,
      responseData: []
    }
  },
  methods: {
    LoginUser () {
      const user = JSON.stringify({ login: this.login, password: this.password })
      const customConfig = {
        headers: {
          'Content-Type': 'application/json'
        }
      }
      axios.post('api/account/signin', user, customConfig).then(response => {
        const temp = response.data
        VueCookies.set('token' , temp.data.token)
        this.$router.push('/main')
      }).catch((error) => {
        this.error = true
        console.log(error.response.status)
      })
    }
  }
}
</script>

<style scoped>
.error{
  font-size: 20px;
  background-color: #ff4c3d;
}
.login {
  margin: 20px 0 0 0;
  width: 95px;
  font-size: 25px;
  height: 42px;
  padding: 5px;
  background-color: orange;
  border-radius: 20px;
  color: white;
  border: none;
  text-decoration: none;
}

.login:hover {
  opacity: 0.5;
}

.login:active {
  transform: translateY(4px);
}
.register {
  color: blue;
  text-decoration: none;
}
.home{
  font-size: 20px;
  margin-top: 80px;
}
.no_account_paragraph {
  font-size: 20px;
  margin-left: 0;
  color: gray;
}
.email_paragraph {
  font-size: 20px;
  margin: 40px 0 0 0;
}
.password_paragraph {
  font-size: 20px;
  margin: 40px 0 0 0;
}
.email {
  height: 40px;
  width: 400px;
  margin: 10px 0 0 0;
  border: 1px solid lightblue;
  outline: none;
  font-size: 20px;
}
.password {
  height: 40px;
  width: 400px;
  margin: 10px 0 0 0;
  border: 1px solid lightblue;
  outline: none;
  font-size: 20px;
}
</style>
