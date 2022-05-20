<template>
  <div class="login_container">
    <div class="login_box">
      <!-- logo -->
      <div class="avatar_box">
        <img src="../assets/logo.jpg" alt="" />
      </div>
      <!-- Login form -->
      <el-form label-width="0px" class="login_form">
        <el-row>
        <el-form-item style="margin-right:5px">
          <el-input v-model="form.first_name" class="login_input" id="first_name" placeholder="First Name"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.last_name" class="login_input" id="last_name" placeholder="Last Name"></el-input>
        </el-form-item>
        </el-row>
        <el-form-item >
          <el-col :span="11" class="login_input">
            <el-date-picker 
            type="date"
            placeholder="Birthday"
            v-model="form.date1"
            style="width: 100%;">   
            </el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item>
          <el-select class="login_input" v-model="form.region" placeholder="Please select your location">
            <el-option label="Melbourne" value="locationMelbourne"></el-option>
            <el-option label="Sydney" value="locationSydney"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.email" class="login_input" id="login_email" placeholder="Email"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.repeated_email" class="login_input" id="repeated_email" placeholder="Please confirm your email"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.repeated_password" class="login_input" id="login_password" placeholder="Password (Input anything u like, it's a mockup)"></el-input>
        </el-form-item>
        <el-row justify="end">
          <el-form-item class="login_btn">
            <el-button  type="primary" round plain size="large" @click="SignUp()">Sgin Up</el-button>
            <el-link id="signup_link" href="/" >Already have an account?</el-link>
          </el-form-item>
        </el-row>
      </el-form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SignUp",
  data() {
      return {
        form: {
          first_name: '',
          last_name: '',
          region: '',
          date1: '',
          email: '',
          repeated_email: '',
          password: '',
        },
      }
    },
    methods: {
   SendAccount(){
   axios.post('http://localhost:3001/api/signup',{name: this.form.first_name,email: this.form.email})

  .then(function (response) {
    console.log(response);
    if(response.statusText=="Created"){
      alert("Sign up successfully!")
      return true
    }
    else{
      alert("There is some problem with backend, please try again!")
      return false
    }
  })
  .catch(function (error) {
    console.log(error);
  });
  },
  SignUp(){
    if(this.form.email!==this.form.repeated_email){
      alert("Please check your email!")
    }
    else{
      this.SendAccount()
    this.$router.push('/')
    }
  }
    },
};
</script>

<style lang="less" scoped>
.login_container {
  background-color: #2b4b6b;
  height: 100vh;
}
.login_box {
  width: 450px;
  height: 450px;
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
  margin-left: 5px;
}
</style>