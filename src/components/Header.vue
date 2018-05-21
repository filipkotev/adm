<template lang="html">
  <div class="header-wrapper">
    <router-link to="/"><img src="../assets/logo-ifao.svg" alt="Logo"/></router-link>
    <div class="welcome_user_box">
      <p class="admission-system">
        Sofia Admission System
      </p>
      <el-dropdown trigger="click" v-if="authenticated"> 
         <p class="welcome-user" >Welcome, {{arrays[0].name}}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </p> 
       <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>
          <router-link :to="{ path: 'mydetails' }"><span @click="select">My Details</span></router-link>
        </el-dropdown-item>
        <el-dropdown-item>
          <router-link :to="{ path: 'mypassword' }"><span @click="select">My Password</span></router-link>
        </el-dropdown-item>
        <el-dropdown-item>
          <router-link :to="{ path: 'mypermits' }"><span @click="select">My Permits</span></router-link>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
      
    </div>
  </div>

</template>

<script>
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex';

export default {
  computed: {
    ...mapState('breaking', [
      'arrays'
    ]),
    ...mapState('login', [
      'authenticated'
    ]) 
  },
  methods: {
    select: function(event) {
      let payload = event.currentTarget.innerText;
      return this.$store.dispatch('nav/updateSelectedPage', payload, {root: true});
        // this.name = event.currentTarget.innerText;
        // return this.name;
    }
  }
}
</script>

<style lang="css">

.el-header {
    background-image: url('../assets/header-image.svg');
    color: #333;
    line-height: 60px;
    height: 150px;
    position: fixed;
    top: 0;
    transition: top 0.2s ease-in-out;
    width: 100%;
    z-index: 9;
  }
  .el-header img{
    height: 80px;
    margin-left: 30px;
  }
  .welcome_user_box{
    float: right;
    margin-right: 30px;
    color: #fff;
    line-height: 1;
    /* padding-top: 25px; */
  }
  .admission-system {
    font-family: Roboto;
    font-weight: 100;
    color: #EAF6FB;
    opacity: .7;
    font-size: 26px;
    margin-top: 31px;
    margin-bottom: 6px
  }
  /* .welcome_user p:first-of-type{
    
  } */
  /* .welcome_user p:last-of-type{
    text-align: right;
    font-size: 15px;
  } */
  .welcome-user{
    font-family: Roboto;
    font-weight: 400 !important;
    color: #EAF6FB;
    opacity: .7;
    text-align: right;
    font-size: 15px;
  }
  .el-dropdown {
    float: right;
  }
  .el-dropdown i {
    cursor: pointer;
    color: #EAF6FB;
    z-index: 10;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .el-dropdown-menu {
    /* left: 87% !important; */
    width: 200px;
  }
  .el-dropdown-menu__item {
    font-size: 14px;
    text-align: left;
    padding: 0 0 0 40px !important;
    height: 50px;
  }
  .el-dropdown-menu__item a {
    color: #444444;
    text-decoration: none;
    width: 100%;
    height: 100%;
    display: inline-block;
    line-height: 3;
  }
  .el-dropdown-menu__item span{
    width: 100%;
    height: 100%;
    display: inline-block;
  }
  .el-dropdown-item.is-active a{
        color: #249ABF;

}
.el-dropdown-item.is-active{
  background-color: #EAF6FB;
}
.popper__arrow {
  left: 187px !important;
}
</style>
