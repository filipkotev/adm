<template lang="html">
  <div class="">
    <div class="page-title"><h1>Abidance Time Frame and Break</h1></div>
    <div class="search-field">
      <div class="block">
        <h5 class="demonstration">Period</h5>
        <el-date-picker
          v-model="pickerValue"
          type="daterange"
          format="dd/MM/yyyy"
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
        <el-button class="button" type="primary">Go</el-button>
      </div>
    </div> <!-- End Search Field -->
    <div class="abidanceContainer">
      <ul>
        <li v-for="person in people">
          <div class="picNameId">
            <div class="pic">
              <img :src="person.imgUrl" alt="">
            </div>  
            <div class="userInfo">
              <p><strong>{{ person.name }} </strong></p>
              <p>{{ person.workId }}</p>
            </div>
          </div>
          <el-table
            class="abidance-table"
            :data="timesheetTable"
            style="width: 100%"
            :row-class-name="durationRedClass">
            <el-table-column
              label="Date"
              prop="date"
              width="180">
            </el-table-column>
            <el-table-column
              label="Check In"
              prop="checkIn"
              align="center">
            </el-table-column>
            <el-table-column
              label="Check Out"
              prop="checkOut"
              align="center">
            </el-table-column>
            <el-table-column
              label="Missing from 10:00 to 17:00"
              prop="missing"
              align="center">

            </el-table-column>
          </el-table>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex';

export default {
  computed: {
    ...mapState('shared', [
      'selectDepartment',  
    ]),
    ...mapState('timesheet', [
      'timesheetTable',
      'timesheetTotal',
      'timesheetValue'
    ]),
    ...mapState('abidance', [
      'people'    
    ]),
    departmentValue: {
      get() {
        return this.$store.getters['shared/departmentValue'];
      },
      set(departmentValue) {
        return this.$store.dispatch('shared/updateDepartmentValue', departmentValue, {root:true});
      }
    },
    pickerValue: {
      get() {
        return this.$store.getters['shared/pickerValue'];
      },
      set(pickerValue) {
        return this.$store.dispatch('shared/updatePickerValue', pickerValue, {root:true});
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
    },
    durationRedClass({row, rowIndex}) {
      for (var i = 0; i < this.timesheetTable.length; i++) {
          if (row.missing > '01:00:00') {
              return 'duration-red';
        }
      }
      return '';
    }
  }
}
</script>

<!-- Set local styles -->
<style lang="sass" scoped>
.el-date-editor--daterange.el-input,
.el-date-editor--daterange.el-input__inner,
.el-date-editor--timerange.el-input,
.el-date-editor--timerange.el-input__inner 
    width: 100%

.block
  width: 45%
  display: inline-block

.select 
  width: 45%
  display: inline-block
  margin-left: 5%

.el-select
  width: 100%

.el-select-dropdown__wrap
  overflow: hidden

.search-field 
  display: flex
  justify-content: space-between

.button 
  margin-left: 20px
  height: 40px
  width: 85px
  background-color:#1F98BD
  border-color: transparent

.button:hover 
  background-color: hsl(192, 65%, 45%)

.button:active, .button:focus 
  background-color: hsl(192, 65%, 45%)
  border-color: transparent

.submitButton 
  display: flex
  flex-direction: column-reverse
  align-items: flex-start

.abidanceContainer
  margin-top: 61px

.abidanceContainer ul
  padding: 0

.abidanceContainer ul li 
  display: flex
  flex-flow: row
  margin-bottom: 60px
  width: 100%
  border: 1px solid #EAF6FB
  border-left: none
  border-right: none

.picNameId 
  border-right: 1px solid #EAF6FB
  width: 220px
  display: flex
  flex-flow: row
  padding-top: 15px

.pic 
  margin-right: 25px

.userInfo p 
  line-height: 5px

.pic img
  width: 50px
  height: 50px
  border-radius: 50%

.abidance-table 
  margin-left: 15px

.duration-red td:last-of-type
  color: #C76161

</style>
