<template lang="html">
  <div class="container">
    <div class="page-title"><h1>Office Timesheet</h1></div>
    <el-row :gutter="10">     <!--<div class="block selectPeriod">-->
    <!-- Select Date -->
<!--      <div class="select">-->
      <el-col :xs="24" :sm="24" :md="11">
        <h5 class="demonstration">Period</h5>
        
          <el-date-picker
            v-model="datePickerValue"
            type="daterange"
            format="dd/MM/yyyy"
            :picker-options="pickerOptions"
            range-separator="To"
            start-placeholder="Start date"
            end-placeholder="End date"
            align="right">
          </el-date-picker>
      </el-col>  
<!--      </div>  END Select-->
      <!-- Select Department -->
<!--      <div class="select">-->
      <el-col :xs="24" :sm="24" :md="11">
        <h5 class="demonstration">Department</h5>
        <el-select  v-model="departmentValue" placeholder="Select">
          <el-option
            v-for="item in selectDepartment"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-col>  
      <!--</div>   END Select -->
      <el-col :xs="24" :sm="24" :md="2">
        <div class="submitButton">
          <el-button class="button" type="primary" >Go</el-button>
        </div>
      </el-col>
      <!-- <p>{{datePickerValue}}</p> -->
  </el-row><!--</div>  END selectPeriod -->

    <span @click="sortedArray"><i class="el-icon-arrow-down"></i></span>
    <el-table
      :data="people"
      style="width: 100%; margin-top: 72px"
      class="office-timesheet-table"
      :row-class-name="overtimeRedClass"
    >
      <el-table-column label="Name and ID" style="width: 262px">
        <template slot-scope="people">
          <div class="picNameId">
            <div class="pic">
              <img :src="people.row.imgUrl" alt="">
            </div>  
            <div class="userInfo">
              <p><strong>{{ people.row.name }} </strong></p>
              <p>{{ people.row.workId }}</p>
            </div>
          </div>
        </template>
      </el-table-column>

      <el-table-column
        label="Work"
        prop="work"
        align="center"
      >
      </el-table-column>

      <el-table-column
        label="Business"
        prop="business"
        align="center"
      >
      </el-table-column>

      <el-table-column
        label="Overtime"
        prop="overtime"
        style="color: red;"
        align="center"
      >
      </el-table-column>  
      <el-table-column
        label="Total"
        prop="total"
        align="center"
      >
      </el-table-column>   
    </el-table>   
    <!-- <div class="timesheet_total sm">
      <div id="total-hours">Total:</div>
      <div class="total-work-hours">102:20</div>
      <div class="total-business-hours">23:00</div>
      <div class="total-overtime-hours">48:02</div>
      <div class="total-total-hours">102:20</div>
    </div> -->
  </div> <!-- END Container-->
</template>

<script>
import { mapState } from 'vuex'
export default {
  data: {
    isRed: true
  },
  computed: {
    ...mapState('shared', [
      'pickerOptions',
      'selectDepartment'
    ]),
    ...mapState('officeTimesheet', [
      'people'
    ]),
    datePickerValue: {
      get () {
        return this.$store.getters['shared/datePickerValue']
      },
      set (datePickerValue) {
        return this.$store.dispatch('shared/updateDatePickerValue', datePickerValue, {root: true})
      }
    },
    departmentValue: {
      get () {
        return this.$store.getters['shared/departmentValue']
      },
      set (departmentValue) {
        return this.$store.dispatch('shared/updateDepartmentValue', departmentValue, {root: true})
      }
    }
  },
  methods: {
    overtimeRedClass ({row, rowIndex}) {
      for (var i = 0; i < this.people.length; i++) {
        if (row.overtime !== '-') {
          return 'redText'
        }
      }
      return ''
    },
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
    }
  }
}
</script>

<!-- Set local styles -->
<style lang="scss" scoped>
.block {
  display: inline-block;
  width: 100%;
}

.selectPeriod {
  display: flex;
  flex-flow: row;
  justify-content: space-between;
}

.select {
  width: 45%;
  display: inline-block;

  & :first-child {
    margin-right: 5%;
  }
}

.el-select {
  width: 100%;
}

.el-date-editor--daterange.el-input, 
.el-date-editor--daterange.el-input__inner, 
.el-date-editor--timerange.el-input, 
.el-date-editor--timerange.el-input__inner {
  width: 100%;
}

.el-icon-arrow-down {
  position: relative;
  top: 101px;
  z-index: 10;
}

.el-icon-arrow-down:hover {
  cursor: pointer;
}

.cell:first-of-type {
  background-color: red !important;
} 

.button {
  height: 40px;
  width: 85px;
  background-color:#1F98BD;
  border-color: transparent;

  & :hover {
    background-color: hsl(192, 65%, 45%);
  }
}

.button.is-active, .button:active, .button:focus {
  background-color: hsl(192, 65%, 45%);
  border-color: transparent;
}
  
.submitButton {
/*
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-start;
*/
  position: relative;
  top: 40px;
}
  
.picNameId {
  width: 220px;
  display: flex;
  flex-flow: row;
  padding-top: 15px;
}
  
.pic {
  margin-right: 25px;
}
  
.userInfo p {
  line-height: 5px;
}

.pic img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.timesheet_total {
  line-height: 3;
  padding-left: 6%;
  background-color: #E4E7EA;
  font-weight: 600;
}

.timesheet_total > div {
  display: inline-block;
  width: 15%;
}

#total-hours {
  width: 23% !important;
}

.total-work-hours {
  padding-left: 1%;
}

.total-business-hours {
  margin-left: 6%;
  text-align: left;
}

.total-overtime-hours {
  text-align: center;
}

.total-total-hours {
  text-align: right;
}

.redText td:nth-child(4) {
  color: #C76161;
} 
</style>