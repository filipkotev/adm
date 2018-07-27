<template lang="html">
  <div class='office-status-container'>
    <div class="page-title"><h1>Office Status</h1></div>
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="7">
        <h5 class="demonstration">Date and time</h5>
        <el-date-picker
          v-model="pickerValue"
          type="datetime"
          placeholder="Select date and time">
        </el-date-picker>
      </el-col>
      <el-col :xs="24" :sm="24" :md="7">
        <h5 class="demonstration">Department</h5>
        <el-select v-model="departmentValue" placeholder="Everyone">
          <el-option
            v-for="item in selectDepartment"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-col>
      <el-col :xs="24" :sm="24" :md="7">
        <h5 class="demonstration-status">Status</h5>
        <el-select v-model="statusValue" placeholder="Show All">
          <el-option
            v-for="item in status"
            :key="item.stat"
            :label="item.label"
            :value="item.stat">
          </el-option>
        </el-select>
      </el-col>
      <el-col :xs="24" :sm="24" :md="3" class="submitButton">
          <el-button class="button" type="primary">Go</el-button>
      </el-col>
    </el-row> <!-- End search field -->
    <div class="office-status-table">
      <div class="office-status title-table-status">
        <span @click="sortedArray"><i class="el-icon-arrow-down"></i></span>
        Name
      </div>
      <div class="office-status title-table-status title-table-status-right">
        Status
      </div>
      <ul class="office-status-list">
        <li v-for="person in persons">
          <div class="office-status user-name">
            <img :src="person.imgUrl" alt="">
            {{ person.name }}
          </div>
          <div class="office-status office-status-tag" style="vertical-align: bottom">
            <el-tag :type="person.tagType">{{person.tagName}}</el-tag>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('shared', [
      'selectDepartment',
      'status'
    ]),
    ...mapState('officeStatus', [
      'persons'
    ]),
    departmentValue: {
      get () {
        return this.$store.getters['shared/departmentValue']
      },
      set (departmentValue) {
        return this.$store.dispatch('shared/updateDepartmentValue', departmentValue, {root: true})
      }
    },
    statusValue: {
      get () {
        return this.$store.getters['shared/statusValue']
      },
      set (statusValue) {
        return this.$store.dispatch('shared/updateStatusValue', statusValue, {root: true})
      }
    },
    pickerValue: {
      get () {
        return this.$store.getters['shared/pickerValue']
      },
      set (pickerValue) {
        return this.$store.dispatch('shared/updatePickerValue', pickerValue, {root: true})
      }
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

      return this.persons.sort(compare)
    }
  },
  created: function () {
    for (var i = 0; i < this.persons.length; i++) {
      if (this.persons[i].tagName === 'at work') {
        this.persons[i].tagType = 'success'
      } else if (this.persons[i].tagName === 'absent') {
        this.persons[i].tagType = 'warning'
      } else {
        this.persons[i].tagType = ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  
.el-select-dropdown__wrap{
  overflow: hidden;
}

.office-status-container .block,
.select-status{
  width: 28%;
  display: inline-block;
  margin-right: 3%;
}
.office-status-container .el-date-editor.el-input,
.el-date-editor.el-input__inner {
    width: 100%;
}
.office-status-container .title-table-status-right{
  text-align: right;
  float: right;
}
.demonstration-status {
  padding-right: 8px;
  
  ~ .el-select {
    position: relative;
    top: -5px;
  }
}
.office-status-table {
  margin-top: 61px;
}
.office-status-container .el-select{
  width: 100%;
}
.office-status-container .office-status-tag{
  text-align: right;
}
.office-status-container .title-table-status{
  display: inline-block;
  line-height: 4;
  color: #878d99;
  font-weight: 800;
}
.office-status-container .user-name{
  font-weight: 800;
}
.office-status-container .office-status-list{
  padding-left: 5px;
}
.office-status-list li {
  display: flex;
  justify-content: space-between;
}
.office-status-container .office-status .el-progress-bar{
  width: 35%;
}
.office-status-container ul{
  line-height: 2;
  list-style: none;
}
.office-status-container .office-status-list li{
  line-height: 3;
  border-bottom: 1px solid #dddddd;
  padding: 15px;
}
.office-status-tag li{
  text-align: right;
}
.office-status-container .title-table-status{
  line-height: 4;
  color: #878d99;
  font-weight: 800;
  font-size: 14px;
  padding: 0 20px 0 15px;
}
.office-status-container .office-status{
  width: 45%;
  display: inline-block;
  font-size: 14px;
}
.office-status-container .office-status-tag{
      margin-left: 9%
}
.office-status-container ul li:hover{
  background-color: #EAF6FB;
}
.office-status-container .office-status img {
  float: left;
  border-radius: 90%;
  width: 40px;
  padding-right: 10px;
}
.office-status-container .title-table-status span:hover{
  cursor: pointer;
}
</style>
