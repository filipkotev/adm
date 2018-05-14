
<template lang="html">
  <div class="">
    <div class="page-title"><h1>Breaking Obligatory Hours</h1></div>
    <div class="search-field">
      <div class="block">
        <h5 class="demonstration">Period</h5>
        <el-date-picker
          v-model="datePickerValue"
          type="daterange"
          format="dd/MM/yyyy"
          vvalue-format="dd-MM-yyyy"
          range-separator="To"
          start-placeholder="Start date"
          end-placeholder="End date">
        </el-date-picker>
      </div>
      <div class="select">
        <h5 class="demonstration">Department</h5>
        <el-select  v-model="departmentValue" placeholder="Select">
          <el-option
            v-for="item in selectDepartment"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div class="submitButton">
        <el-button type="primary" class="button">Go</el-button>
      </div>
      
    </div>  
    <div class="breaking-container">
      <div class="breaking-title-table">
        <div class="breaking title-table title-table-name">
          <span @click="sortedArray"><i class="el-icon-arrow-down"></i></span>
          Name
        </div>
        <div class="breaking title-table">
          Hours
        </div>
        <div class="breaking title-table">
          Absent
        </div>
        <div class="breaking title-table">
          Work Hours
        </div>
      </div>   
      <ul class="breaking-list">
          <li v-for="array in arrays" class="breaking-row">
            <div class="breaking user-name">
              <img class="breaking-image":src="array.imgUrl" alt="">
              {{ array.name }}
            </div>
            <div class="breaking breaking-daily-hours" style="vertical-align: bottom">
              {{ array.dayHours }}
              <el-progress :text-inside="false" :stroke-width="10" :percentage="array.progressPercentage" :status="array.colorProgress"></el-progress>
            </div>
            <div class="breaking breaking-absent">
              {{ array.absent }}
            </div>
            <div class="breaking breaking-hours">
              {{ array.hours }}
            </div>
        </li>
      </ul>
    </div>
    <!-- <el-table :data="arrays">
      <el-table-column
                label="Name"
      >
      <template slot-scope="scope">
        <div class="breaking user-name">
          <img class="breaking-image":src="arrays.row.imgUrl" alt="">
          {{ arrays.row.name }}
        </div>
      </template>
    </el-table-column>
    <el-table-column
                label="Hours"
      >
      <template slot-scope="scope">
        <div class="breaking breaking-daily-hours" style="vertical-align: bottom">
          {{ arrays.row.dayHours }}
          <el-progress :text-inside="false" :stroke-width="10" :percentage="arrays.progressPercentage" :status="arrays.colorProgress"></el-progress>
        </div>
      </template>
    </el-table-column>
    <el-table-column
                label="Absent"
                prop="absent">
    </el-table-column>
    <el-table-column
                label="Work hours"
                prop="hours">
    </el-table-column>
    </el-table>   -->

  </div>

</template>
<script>
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex';

export default {
  computed: {
    ...mapState('breaking', [
      'arrays'
    ]),
    ...mapState('shared', [
      'selectDepartment',
      'pickerOptions'  
    ]),
    departmentValue: {
      get() {
        return this.$store.getters['shared/departmentValue'];
      },
      set(departmentValue) {
        return this.$store.dispatch('shared/updateDepartmentValue', departmentValue, {root:true});
      }
    },
    datePickerValue: {
      get() {
        return this.$store.getters['shared/datePickerValue'];
      },  
      set(datePickerValue) {
        return this.$store.dispatch('shared/updateDatePickerValue', datePickerValue, {root:true});
      }
    }
  },
  methods: {
    
    sortedArray: function() {
     function compare(a, b) {
       if (a.name < b.name)
         return -1;
       if (a.name > b.name)
         return 1;
       return 0;
     }
     return this.arrays.sort(compare);
   }

  },
  created: function(){
    for (var i = 0; i < this.arrays.length; i++) {
      if (this.arrays[i].dayHours > '02:00:00'
          && this.arrays[i].dayHours < '04:00:00') {
          this.arrays[i].progressPercentage = 25;
      }else if (this.arrays[i].dayHours > '04:00:00'
          && this.arrays[i].dayHours < '06:00:00') {
          this.arrays[i].progressPercentage = 50;
      }else if (this.arrays[i].dayHours > '06:00:00'
          && this.arrays[i].dayHours < '08:00:00') {
          this.arrays[i].progressPercentage = 75;
      }else if (this.arrays[i].dayHours > '08:00:00'){
          this.arrays[i].progressPercentage = 100;
          this.arrays[i].colorProgress = 'success';
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.el-date-editor--daterange.el-input,
.el-date-editor--daterange.el-input__inner,
.el-date-editor--timerange.el-input,
.el-date-editor--timerange.el-input__inner 
    width: 100%

.el-select-dropdown__wrap
  overflow: hidden

.search-field 
  display: flex
  align-items: space-between


.breaking-container
  margin-top: 61px

.block
  width: 45%
  display: inline-block

.select 
  width: 45%
  margin-left: 5%
  display: inline-block


.el-select
  width: 100%

.user-name
  font-weight: 600
  width: 342px !important

.breaking-list
  padding-left: 5px

.el-progress
  width: 40% !important

ul
  line-height: 2
  list-style: none

.breaking-row, .breaking-title-table
  flex-flow: row
  display: flex
  justify-content: space-between

.breaking-list li
  line-height: 3
  padding: 10px 0
  border-bottom: 1px solid #dddddd

.breaking-list li:hover
  background-color: #EAF6FB

.title-table
  line-height: 4
  color: #878d99
  font-weight: 600
  font-size: 14px
  padding-left: 15px

  span:hover
    cursor: pointer

.title-table-name
  width: 80px

.breaking
  font-size: 14px

.breaking-image 
  float: left
  border-radius: 90%
  width: 40px
  padding-right: 10px

.breaking-daily-hours
  width: 300px

.breaking-absent
  width: 200px

.breaking-hours
  float: right
  width: 150px
  text-align: right
  padding-right: 15px


</style>
