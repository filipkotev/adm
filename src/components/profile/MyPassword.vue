<template>
  <div>  
    <div class="page-title"><h1>My Password</h1></div>
    <div class="password-container">
        <div class="password-container-boxes box1">
            <div class="input">
                <label for="old-password">Old Password</label>
                <input 
                    type="password" 
                    id="old-password"
                    @blur="$v.oldPassword.$touch()"
                >
                <!-- <p>{{ password }}</p> -->
                <!-- <p v-if="$v.oldPassword.$error">Please write your password</p> -->
            </div>
            
            <div class="input">
                <label for="new-password">New Password</label>
                <input 
                    type="password" 
                    id="new-password"
                    v-model="newPassword"
                    @blur="$v.newPassword.$touch()"
                    :class="{ invalid: $v.newPassword.$error }"
                    >
                <!-- <p>{{ newPassword }}</p> -->
            </div>  
            
            <div class="input">
                <label for="repeat-new-password">Re-type New Password</label>
                <input
                    type="password"
                    id="repeat-new-password"
                    :class="{invalid: $v.confirmPassword.$error}"
                    v-model="confirmPassword"
                    @blur="$v.confirmPassword.$touch()"
                >
                <!-- <p>{{ confirmPassword }}</p> -->
                <p v-if="$v.confirmPassword.$error">New password do not match</p>
            </div>
            <el-button 
                class="button" 
                type="primary" 
                :disabled="$v.confirmPassword.$error || $v.newPassword.$error"
                @click="showNotification"
            >Change Password</el-button>
        </div>
        <div class="password-container-boxes box2">
            <i class="el-icon-info"></i>
            <div>
                <p class="text">
                    Password change becomes effective next time when the user attempts to enter the system
                </p>    
                <p class="useful-tips-heading"><strong>Usefull tips</strong></p>
                <div class="useful-tips">
                    <i class="el-icon-arrow-right"></i>
                    <p class="text">Never tell your password to anyone</p>
                </div>
                <div class="useful-tips">
                    <i class="el-icon-arrow-right"></i>
                    <p class="text">Use special symbols like "@, #, !, $"</p>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { required, sameAs } from 'vuelidate/lib/validators'

export default {
    data() {
        return {
            password: 'parola',
            newPassword: '',
            confirmPassword: ''
        }
    },
    validations: {
        oldPassword: {
            required,
            sameAs: sameAs('password')
        },
        newPassword: {
            required
        },
        confirmPassword: {
            sameAs: sameAs('newPassword')
        }
    },
    methods: {
      showNotification() {
        this.$notify({
          message: 'Password has been updated!',
          type: 'success',
          offset: 180,
          duration: 1000
        });
      },
    }   
}
</script>

<style lang="sass" scoped>
h1
    margin-bottom: 50px

.password-container
    display: flex
    flex-flow: row
    justify-content: space-between
    padding: 50px
    border: 1px solid #ECECEC
    border-radius: 3px


.password-container-boxes
    display: flex
    flex-flow: column

.box1
    width: 60%

.box2
    width: 40%
    border-left: 1px solid #ECECEC
    padding-left: 40px
    padding-top: 5px
    display: flex
    flex-flow: row

    &> div
        width: 90%
        word-wrap: break-word;
        &> p
            line-height: 1.5
            margin-top: 0

.useful-tips-heading
    margin-top: 30px
    margin-bottom: 5px

.text
    color: #8D8D8D
    font-family: Roboto
    font-size: 14px
    font-weight: 500

.input
    display: flex
    flex-flow: column
    margin-bottom: 35px

    label
        margin-bottom: 15px
        color: #8D8D8D
        font-family: Roboto
        font-size: 12px

    input
        font-size: 18px
        width: 70%
        height: 40px
        border: 1px solid #B4B4B4
        border-radius: 3px

.button 
  margin-left: 0 !important
  display: inline-block
  height: 40px
  width: 160px
  background-color: #1F98BD
  border-color: transparent

.button:hover 
  background-color: hsl(192, 65%, 45%)

.button.is-active, .button:active, .button:focus 
  background-color: hsl(192, 65%, 45%) !important;
  border-color: transparent !important;

.el-icon-info
    font-size: 34px
    margin-right: 15px

.useful-tips
    .el-icon-arrow-right
        display: inline-block
        margin-right: 10px
    p
        display: inline-block

.invalid
    border: 1px solid red !important
    background-color: #fffaf0
</style>
