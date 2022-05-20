<template>
  <div class="login_container">
    <div class="login_box">
      <!-- logo -->
      <div class="avatar_box">
        <img src="../assets/logo.jpg" alt="" />
      </div>
      <!-- Login form -->
      <el-form label-width="0px" class="login_form">
        <el-form-item>
          <el-input v-model="form.email" class="login_input" id="login_email" placeholder="Email"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.password" class="login_input" id="login_password" placeholder="Password"></el-input>
        </el-form-item>
        <el-row justify="end">
          <el-form-item class="login_btn">
            <el-button  type="primary" round plain size="large" @click="CheckAccount()">Log In</el-button>
            <el-link id="signup_link" href="/signup" >Don't have an account?</el-link>
          </el-form-item>
        </el-row>
      </el-form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "LogIn",
  data() {
      return {
        form: {
          email: '',
          password: '',
        },
      }
    },
  methods:{
   CheckAccount(){
   axios.post('http://localhost:3001/api/login',{email: this.form.email})

  .then(function (response) {
    console.log(response);
    if(response.statusText=="OK")
    {
      alert("Log in successfully!")
      sessionStorage.setItem('user_name',response.data[0].name)
      sessionStorage.setItem('token',true)
      window.location.href="/household"
    }
  })
  .catch(function (error) {
    console.log(error);
    alert("Account no exist!")
  });
  },
  }
};
</script>

<style lang="less" scoped>
.login_container {
  background-color: #2b4b6b;
  height: 100vh;
}
.login_box {
  width: 450px;
  height: 220px;
  background-color: #fff;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  .avatar_box {
    height: 130px;
    width: 130px;
    border: 1px solid #eee;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 0 10px #ddd;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #eee;
    }
  }
}
.login_form {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}
.login_btn {
  display: flex;
  justify-content: flex-end;
}
.login_input{
    border: 1px solid rgb(155, 151, 151);
}
#signup_link{
  margin-left: 10px;
}
</style>