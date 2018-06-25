<template>
  <div id="app">
    <el-header class="header default-header"><app-header></app-header></el-header> 
    <el-container>
        <el-aside width="400px"><app-aside></app-aside></el-aside>
        <el-main><div class="content"><router-view></router-view></div></el-main>       
    </el-container>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Aside from './components/Aside.vue'
import HeaderTitle from './components/HeaderTitle.vue'
import Vue from 'vue'

export default {
  name: 'app',
  components: {
    appHeader: Header,
    appAside: Aside,
    appTitle: HeaderTitle
  },
  methods: {
    handleScroll: function(event) {
      if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        document.querySelector('.header').classList.remove('default-header');
        document.querySelector('.header').classList.add('hidden-header');
        document.querySelector('.internal-information').classList.add('internal-information-up');
      }
      else {
        document.querySelector('.header').classList.remove('hiddden-header');
        document.querySelector('.header').classList.add('default-header');
        document.querySelector('.internal-information').classList.remove('internal-information-up');
      }
    }
  },
  created: function () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed: function () {
    window.removeEventListener('scroll', this.handleScroll);
  }  
}

</script>

<style lang="sass">

@import './styles/common.sass'; 

</style>
