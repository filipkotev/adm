<template>
  <div>
      <el-row>
          <h1> Staff Manager </h1>
      </el-row>
      <!-- Search Employee -->
      <el-row 
        type="flex"
        justify-content="space-between"
        :gutter="20">
          <el-col :span="8">
              <h5 class="demonstration">Employee</h5>
              <el-input
                  placeholder="Enter Employee Name" 
                  v-model="input"></el-input>
          </el-col>
          <!-- <el-col class="submitButton" :span="6">
              <el-button 
                  class="button" 
                  type="primary"
                  @click="searchNames">Search</el-button>
          </el-col>     -->

      <!--  Add New user -->
          <el-col class="add-new-user">
              <router-link :to="{path:'/addnewuser'}">
                  <el-button
                      type="primary" 
                      icon="el-icon-circle-plus-outline"
                      class="button add-user-button"
                      @click="select">
                  Add New User</el-button>
              </router-link>    
          </el-col>

      </el-row>

      <!-- Employee Table Head-->
      <el-row class="border-bottom table-head">
        <el-col :span="8">
          <div class="sort-name-label">
              <i class="el-icon-arrow-down" @click="sortedArray"></i>
              <h5 class="demonstration bold">Name and ID</h5>
          </div>
        </el-col>
        <el-col :span="10">
          <h5 class="demonstration bold">User Role</h5>
        </el-col>
        <el-col :span="6">
          <h5 class="demonstration bold">Actions</h5>
        </el-col>
      </el-row>
      <!-- Employee Table -->
      <el-row
        class="border-bottom table-body"
        type="flex"
        align="middle"
        v-for="person in searchNames"
      >

        <el-col :span="8" class="picNameId">

          <img :src="person.imgUrl" alt>
          <div class="userInfo">
            <p id="user-name"><strong>{{person.name}}</strong></p>
            <p>{{person.workId}}</p>
          </div>
        </el-col>
        <el-col :span="10">
            <el-tag :type="person.tagType">{{person.role}}</el-tag>
        </el-col>
        <el-col :span="6" class="buttons-container">
          <el-button 
            class="secondary-button delete-button mr-1" 
            v-if="deleted"
            @click="isDeletePopup = !isDeletePopup">Delete</el-button>

          <el-button 
            class="secondary-button recover-button mr-1" 
            v-if="!deleted">Recover</el-button>

          <router-link :to="{path:'/editdetailsfor'}">    
              <el-button 
                class="secondary-button mr-1" 
                @click="select">Edit</el-button>
          </router-link>        
          <el-button class="secondary-button" @click="isPasswordPopup = !isPasswordPopup">Password</el-button>
        </el-col>
      </el-row>

      <!-- Delete popup -->
      <div class="popup-container" v-show="isDeletePopup">
        <div class="popup">
          <div class="popup-header">
            <h3 class="popup-title">Delete User</h3>
            <i class="el-icon-close" @click="isDeletePopup = !isDeletePopup"></i>
          </div>
          <div class="popup-content">
            <h4>Are you sure you want to delete Andon Atanasov?</h4>
            <el-button class="secondary-button" @click="isDeletePopup = !isDeletePopup">Cancel</el-button>
            <el-button class="button" type="primary">Save</el-button>
          </div>     
        </div>
      </div>    
      <!-- Password popup -->
      <div class="popup-container" v-show="isPasswordPopup">
          <div class="popup">
            <div class="popup-header">
              <h3 class="popup-title">Change Password for Andon Atanasov</h3>
              <i class="el-icon-close" @click="isPasswordPopup = !isPasswordPopup"></i>
            </div>
            <div class="popup-content">
              <h5>Password change becomes effective next time the user login the admission system</h5>
              <div class="input-container">
                <div class="popup-input">
                  <label for="newPasswordInput">New Password</label>
                  <el-input id="newPasswordInput" v-model="newPassword"></el-input>
                </div>
                <div class="popup-input">
                  <label for="retypeNewPasswordInput">Re-type</label>
                  <el-input id="retypeNewPasswordInput" v-model="retypePassword"></el-input>
                </div>
              </div>    
              <el-button class="secondary-button" @click="isPasswordPopup = !isPasswordPopup">Cancel</el-button>
              <el-button class="button" type="primary">Save</el-button>
            </div>        
          </div>    
      </div>
      <roouter-view></roouter-view>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      input: '',
      isDeletePopup: false,
      isPasswordPopup: false,
      newPassword: '',
      retypePassword: '',
      deleted: true
    }
  },
  computed: {
    ...mapState('officeTimesheet', [
      'people'
    ]),
    searchNames () {
      var self = this
      if (this.input === '') {
        return this.people
      }
      return this.people.filter(function (person) {
        return person.name.indexOf(self.input) >= 0
      })
    }
  },
  methods: {
    sortedArray: function () {
      function compare (a, b) {
        if (a.name < b.name) {
          return -1
        }
        if (a.name > b.name) {
          return 1
        }
        return 0
      }
      return this.people.sort(compare)
    },
    onEditUser: function () {
      this.$router.push('/staffmanager/editdetailsfor')
    },
    onAddNewUser: function () {
      this.$router.push('/staffmanager/addnewuser')
    },
    select: function (event) {
      let payload = event.currentTarget.innerText
      return this.$store.dispatch('nav/updateSelectedSubPage', payload, {root: true})
    }
  },
  created () {
    for (let i = 0; i < this.people.length; i++) {
      if (this.people[i].role === 'Executive officer') {
        this.people[i].tagType = 'success'
      } else if (this.people[i].role === 'Coordinator') {
        this.people[i].tagType = 'danger'
      } else if (this.people[i].role === 'Teamleader') {
        this.people[i].tagType = ''
      } else if (this.people[i].role === 'Administrator') {
        this.people[i].tagType = 'warning'
      } else if (this.people[i].role === 'Company executive') {
        this.people[i].tagType = 'danger'
      } else {
        this.people[i].tagType = 'info'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.demonstration {
  padding-left: 10px;
}    
.button {
  width: auto;
}
.add-new-user {
  display: flex;
  flex-flow: column-reverse;

  & .add-user-button {
    float: right;
  }
}

.sort-name-label h5 {
  display: inline-block;
  padding-left: 5px;
}

.el-icon-arrow-down:hover {
  cursor: pointer;
}

.bold{
  font-weight: bold !important;
}

.table-head {
  margin-top: 40px;
}

.table-body {
  padding: 1%;

  & :hover {
      background-color: #EAF6FB;
  }
}

.border-bottom {
  border-bottom: 1px solid #EAF6FB;
}

.border-bottom h5 {
  padding-left: 0;
}

.picNameId {
  display: flex;
  flex-flow: row;
  padding-top: 15px;
}    

img {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  margin-right: 15px;
}

.userInfo p {
  color: #444444;
  font-size: 16px;
}

.userInfo p:last-child {
  font-size: 14px;
}

.secondary-button {
  width: 80px;
  height: 33px;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  width: auto;
  padding-left: 17px !important;
  padding-right: 17px !important;
  border: 1px solid #0C85AA;
  border-radius: 3px;
}

.recover-button {
  border: 1px solid #178D70;
  color: #178D70 !important;
  
  & :hover {
    border-color: rgb(41, 138, 113) !important;
    color: rgb(41, 138, 113) !important;
  }
}

.delete-button {
  border: 1px solid #C76161;
  color: #C76161 !important;

  &:hover {
    border-color: rgb(202, 117, 117) !important;
    color: rgb(202, 117, 117);
  }
}
.el-tag {
  width: 130px;
  text-align: center;
}

/*** Modal dialog styles ***/
.popup-container {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 3;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.3); // Black w/ opacity
}
.popup {
  z-index: 4;
  background-color: white;
  padding: 30px 22px;
  width: 35% ;
  max-height: 60%;
  position: absolute ;
  top: 35%  ;
  left: 30%;
  border: 1px solid lightgrey;
  border-radius: 3px;

  &span {
    line-height: normal;
  }
}

.popup-header {
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  margin-bottom: 15px;

  & h3 {
      color: #444444;
      font-weight: 400;
  }    
  & i {
    font-size: 22px;
    
    &:hover {
      cursor: pointer;
    }
  }      
}
.popup-content {
  padding-right: 10px;
  max-height: 350px;
  overflow-y: auto;

  & h4 {
    font-weight: 400;
    margin-bottom: 63px;
  }

  & h5 {
    color: #444;
    font-weight: 400;
    margin-bottom: 63px;
    font-size: 14px;
  }

  & .input-container {
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;

    & label {
      display: inline-block;
      margin-bottom: 16px;
      font-size: 12px;
      color: #8D8D8D;
    }

    & .popup-input {
      width: 48%;
    }
  }

  & .el-button {
    width: 120px;
    height: 40px;
  }

  & .button {
    float: right;
  }
}

</style>