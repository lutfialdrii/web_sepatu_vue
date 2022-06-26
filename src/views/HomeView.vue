<template>
  <div class="login-page bg-light">
    <div class="container">
      <div class="row">
        <div class="co-lg-10">
          <div class="bg-white shadow rounded">
            <div class="row">
              <div class="col-md-7 pe-0">
                <div class="form-left h-100 py-5 px-5">
                  <form @submit.prevent="submitLogin" class="row g-4">
                    <div class="col-12">
                      <label>Username <span class="text-danger">*</span></label>
                      <div class="input-group">
                        <div class="input-group-text">
                          <i class="fa-solid fa-user"></i>
                        </div>
                        <input type="text" class="form-control" placeholder="Username" v-model="modelLogin.username">
                      </div>
                    </div>

                    <div class="col-12">
                      <label>Password <span class="text-danger">*</span></label>
                      <div class="input-group">
                        <div class="input-group-text">
                          <i class="fa-solid fa-lock"></i>                        </div>
                        <input type="password" class="form-control" placeholder="Password" v-model="modelLogin.password">
                      </div>
                    </div>

                    <div class="col-sm-6">
                      <div class="form-check">
                        <input type="text" class="form-check-input" id="inlineFormCheck">
                        <label for="inlineFormCheck" class="form-check-labe">Remember</label>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <a href="#" class="float-end text-primary">Forgot Password</a>
                    </div>
                    <div class="col-12">
                      <button type="submit" class="btn btn-primary px-4 float-end mt-4">Login</button>
                    </div>
                  </form>
                </div>
              </div>
              <div class="col-md-5 ps-0 d-none d-md-block">
                <div class="form-right h-100 background-login text-white-center pt-5">
                  <h2 class="fs-1 text-center">Login User</h2>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <router-view />
</template>

<script>
// @ is an alias to /src
import axios from 'axios';
export default {

  name: "HomeView",
  components: {

  },
  data(){
    return {
      modelLogin:{
        username: '',
        password: ''
      }
    }
  },
  methods: {
    submitLogin(){
      const dataLogin = {
        username: this.modelLogin.username,
        password: this.modelLogin.password
      }
      axios.post('http://localhost/sepatu/login.php', dataLogin)
        .then(response => {
          console.log(response)
        }).catch(error => {
        console.log(error)
      }).finally({

      })
    }
  }
};
</script>
<style scoped>

.background-login {
  background-image: url('https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.login-page{
  width: 100%;
  height: 100vh;
  display: inline-block;
  display: flex;
  align-items: center;
}
.form-right i {
  font-size: 100px;
}
</style>
