<template>
    <div class="wrapper">
        <div id ="login">
            <h1>Admission Login</h1>
            <label for="username">Username</label>
            <el-input type="text" id="username" name="username" v-model="input.username" ></el-input>
            <label for="password">Password</label> 
            <el-input 
                type="password" 
                id="password" 
                name="password"
                @keyup.13.native="login"
                v-model="input.password"></el-input>
            <p v-if="error" class="red">Something went wrong!</p>
            <p v-if="empty" class="red">Username and password must be filled in!</p>
            <el-button
                type="primary"
                class="button"
                @click="login">LOGIN</el-button>
        </div>
    </div>    
</template>

<script>
export default {
    data () {
        return {
            input: {
                username: "",
                password: "",
                
            },
            authUsername: "user",
            authPassword: "parola",
            adminUsername: "admin",
            adminPassword: "parola",
            error: false,
            empty: false
        }
    },
    methods: {
        login () {
            if (this.input.username != '' && this.input.password != '') {
                if (this.input.username == this.authUsername && this.input.password == this.authPassword) {
                    this.$store.dispatch('login/userLogin')
                    this.$router.push('/')
                } else if (this.input.username == this.adminUsername && this.input.password == this.adminPassword) {
                    this.$store.dispatch('login/adminLogin')
                    this.$router.push('/')
                } else {
                    this.error = true
                }
            } else {
                this.empty = false
            }
        }    
    }
}
</script>

<style lang="sass" scoped>
#login
    width: 420px
    height: auto
    border: 1px solid #ECECEC
    border-radius: 3px
    margin: 15%
    margin-right: 50%
    display: flex
    flex-flow: column
    padding-left: 32px
    padding-bottom: 35px

    h1
        position: relative
        top: -80px
        left: -33px
        border-bottom: none
        font-size: 24px
        font-family: Roboto

label
    font-size: 12px
    color: #8D8D8D
    font-family: Roboto
    display: block
    margin-bottom: 15px

.el-input
    width: 335px
    height: 40px
    margin-bottom: 44px

.button
    margin-left: 0
    width: 110px

.red
    color: red
</style>