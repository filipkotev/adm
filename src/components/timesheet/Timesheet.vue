<template lang="html">
  <div class="container">
    <!-- Page Header -->
    <el-row>
      <div class="page-title">
        <h1>My Timesheet</h1>
      </div>
    </el-row>
    
    <!-- Search Field -->
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="14" :lg="8">
        
          <h5 class="demonstration">Period</h5>
          <el-date-picker
            v-model="datePickerValue"
            type="datetimerange"
            format="dd/MM/yyyy"
            :picker-options="pickerOptions"
            range-separator="To"
            start-placeholder="Start date"
            end-placeholder="End date"
            align="right">
          </el-date-picker>
      </el-col>
      <el-col :xs="24" :sm="24" :md="2" class="submitButton">
          <el-button class="button" type="primary" @click="loadData">Go</el-button>
      </el-col>
    </el-row>

    <el-row>
      <el-col>
        <el-table
          :data="timesheetTable"
          style="width: 100%"
          :row-class-name="durationRedClass"
        >
          <el-table-column
            label="Date"
            prop="date">
          </el-table-column>
          <el-table-column
            align="center"
            label="Check In"
            prop="checkIn">
          </el-table-column>
          <el-table-column
            align="center"
            label="Check Out"
            prop="checkOut">
          </el-table-column>
          <el-table-column
            align="center"
            label="Duration"
            prop="duration">
            
          </el-table-column>
        </el-table>
        <div class="timesheet_total sm">
          <span>Total:</span> {{timesheetTotal}}
        </div>
      </el-col>  
    </el-row>
  </div>
</template>

<script>
// import HeaderTitle from './../HeaderTitle.vue'
import { mapState } from 'vuex'
// const { add } = require('timelite')

export default {
  computed: {
    ...mapState('timesheet', [
      'timesheetTable',
      'timesheetTotal',
      'loadedData',
      'pickerOptions'
    ]),
    ...mapState('shared', [
      'redDuration'
    ]),

    datePickerValue: {
      get () {
        return this.$store.getters['timesheet/datePickerValue']
      },
      set (datePickerValue) {
        return this.$store.dispatch('timesheet/updateDatePickerValue', datePickerValue, {root: true})
      }
    }
  },
  methods: {
    durationRedClass ({row, rowIndex}) {
      for (var i = 0; i < this.timesheetTable.length; i++) {
        if (row.duration < '08:00') {
          return 'duration-red'
        }
      }
      return ''
    },
    loadData () {
      this.$store.dispatch('timesheet/loadTimesheetTable', {root: true})
    }
  }
}
</script>

<style lang="scss" scoped>
  .el-date-editor.el-input__inner {
  width: 100%;
}

.timesheet_total {
  line-height: 3;
  text-align: right;
  padding-right: 10%;
  background-color: #e4e7ea;
  font-weight: 600;

  & span { 
    padding-right: 1%;
  }
}

.el-table:nth-child(last) { 
  text-align: center;
}
</style>

