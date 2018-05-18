<template lang="html">
  <div class="">
    <div class="internal-information">
      <span>Internal information</span> <i class="el-icon-arrow-right"></i><span class="page-name">{{selectedPage}}</span>
    </div>
    <el-row class="tac">
    <el-col :span="12">
      <!-- @open="handleOpen" @close="handleClose" -->
      <el-menu default-active="6" class="el-menu-vertical-demo">
        <el-menu-item-group title="HR Administration">
          <el-menu-item index="11">
            <router-link :to="{ path: 'edittime' }"><span @click="select">Edit Time</span></router-link>
          </el-menu-item>
          </el-menu-item>
          <el-menu-item index="12">
            <router-link :to="{ path: 'EmployeesHours' }"><span @click="select">Employee's Hours Manager</span></router-link>
          </el-menu-item>
          <el-menu-item index="13">
            <router-link :to="{ path: 'staffmanager' }"><span @click="select">Staff Manager</span></router-link>
          </el-menu-item>
          <el-menu-item index="14">
            <router-link :to="{ path: 'setpermits' }"><span @click="select">Set Permits</span></router-link>
          </el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Timesheet">
          <el-menu-item index="1">
            <router-link :to="{ path: 'timesheet' }"><span @click="select">My Timesheet</span></router-link>
          </el-menu-item>
          <el-menu-item index="2">
            <router-link :to="{ path: 'breaking' }"><span @click="select">Breaking Obligatory Hours</span></router-link>
          </el-menu-item>
          <el-menu-item index="3">
            <router-link :to="{ path: 'abidance' }"><span @click="select">Abidance Time Frame and Break</span></router-link>
          </el-menu-item>
          <el-menu-item index="4">
            <router-link :to="{ path: 'officetimesheet' }"><span @click="select">Office Timesheet</span></router-link>
          </el-menu-item>
          <el-menu-item index="5">
            <router-link :to="{ path: 'workcalendar' }"><span @click="select">Work Calendar</span></router-link>
          </el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Others">
          <el-menu-item index="6">
            <router-link :to="{ path: 'officestatus' }"><span @click="select">Office Status</span></router-link>
          </el-menu-item>
          <el-menu-item index="7">
            <router-link :to="{ path: 'accessrequests' }"><span @click="select">Access Requests</span></router-link>
          </el-menu-item>
        </el-menu-item-group>
        <!-- <el-menu-item-group title="Profile">
          <el-menu-item index="8">
            <router-link :to="{ path: 'mydetails' }"><span @click="select">My Details</span></router-link>
          </el-menu-item>
          <el-menu-item index="9">
            <router-link :to="{ path: 'mypassword' }"><span @click="select">My Password</span></router-link>
          </el-menu-item>
          <el-menu-item index="10">
            <router-link :to="{ path: 'mypermits' }"><span @click="select">My Permits</span></router-link>
          </el-menu-item>
        </el-menu-item-group> -->
        
      </el-menu>
    </el-col>
  </el-row>
  </div>

</template>

<script>
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex';

export default {
  computed: {
    ...mapGetters('nav', [
      'selectedPage'
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

<style lang="sass">

.el-aside 
  color: #333
  text-align: center
  height: 750px
  overflow: hidden
  margin-top: 200px
  /* position: fixed; */
  width: 350px !important


.el-aside:hover
  overflow-y: scroll

.el-col-12 
    width: 100%

.el-menu-item 
    font-size: 14px
    text-align: left
    padding: 0 0 0 40px !important
    height: 50px
  
.el-menu-item a 
  color: #444444
  text-decoration: none
  width: 100%
  height: 100%
  display: inline-block
  line-height: 3

.el-menu-item span
  font-family: Roboto
  font-weight: 400
  width: 100%
  height: 100%
  display: inline-block

.el-menu-item.is-active a
      color: #249ABF

.el-menu-item.is-active
  background-color: #EAF6FB

.el-menu-item-group__title
  font-size: 14px
  font-family: Roboto
  font-weight: 300
  text-align: left
  padding: 0 0 0 30px
  margin-top: 45px
  margin-bottom: 10px
  text-transform: uppercase

  /* .el-menu-vertical-demo
    padding-left: 17%;
   */

/* Let's get this party started */
::-webkit-scrollbar 
    width: 4px
    position: absolute
    top: 30px
    right: 0

/* Track */
::-webkit-scrollbar-track 
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3)
    -webkit-border-radius: 10px
    border-radius: 10px


/* Handle */
::-webkit-scrollbar-thumb 
    -webkit-border-radius: 10px
    border-radius: 10px
    background: rgba(47,159,194,0.8)
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5)

::-webkit-scrollbar-thumb:window-inactive 
	background: rgba(255,0,0,0.4)

</style>
