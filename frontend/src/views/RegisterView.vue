<template>
  <h1>Register</h1>
  <div>
    <p class="have_account_paragraph">Already have account? <router-link to="/login" class="login">Login</router-link></p>
    <form @submit.prevent="Register()">
      <p class="error" v-if="error">Account with this email already exists!</p>
      <p class="successful" v-if="successful">Your account has been created successfully, you can now log in!</p>
      <p>
        <input type="email" placeholder="email" class="email" id="email" v-model="login" required>
      </p>
      <p>
        <input type="text" placeholder="Password" class="password" id="password" v-model="password" minlength="8" maxlength="50" required>
      </p>
      <p>
        <input type="submit" value="Sign Up" class="register" >
      </p>
    </form>
    <router-link to="/" class="home">Home</router-link>
  </div>
</template>

<script>
import axios from 'axios'
export default {

  data () {
    return {
      login: '',
      password: '',
      error: false,
      successful: false
    }
  },
  methods: {
    Register () {
      const user = JSON.stringify({ login: this.login, password: this.password })
      const customConfig = {
        headers: {
          'Content-Type': 'application/json'
        }
      }
      axios.post('api/account/signup', user, customConfig).then(() => {
        this.successful = true
        this.error = false
      }).catch((error) => {
        this.error = true
        this.successful = false
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
.successful{
  font-size: 20px;
  background-color: #a6ff69;
}
.have_account_paragraph {
  font-size: 20px;
  margin-left: 0;
  color: gray;
}
.register {
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

.register:hover {
  opacity: 0.5;
}

.register:active {
  transform: translateY(4px);
}
.login {
  color: blue;
  text-decoration: none;
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
.home{
  font-size: 20px;
  margin-top: 40px;
  color: blue;
  text-decoration: none;
}

</style>
