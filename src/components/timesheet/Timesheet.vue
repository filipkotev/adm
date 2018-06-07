<template lang="html">
  <div class="container">
    <el-row><div class="page-title"><h1>My Timesheet</h1></div></el-row>
    <el-row>
      <el-col>
        <div class="block selectPeriod">
          <h5 class="demonstration">Period</h5>
            <div class="select-container">
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
            <div class="submitButton">
              <el-button class="button" type="primary" @click="loadData">Go</el-button>
            </div>
          </div>
          <p>{{datePickerValue}}</p>
        </div>
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
import HeaderTitle from './../HeaderTitle.vue'
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex';
import axios from 'axios';
const { add } = require('timelite')

export default {
  // data () {
  //   return {
  //     datePickerValue: [ "2018-01-01T08:10:00.000Z", "2018-01-23T18:10:00.000Z" ]

  //   }
  // },
  computed: {
    ...mapState('timesheet', [
      'timesheetTable',
      'timesheetTotal'
    ]),
    ...mapState('shared', [
      'pickerOptions',
      'redDuration'
    ]),
    
    datePickerValue: {
      get() {
        return this.$store.getters['shared/datePickerValue'];
      },  
      set(datePickerValue) {
        return this.$store.dispatch('shared/updateDatePickerValue', datePickerValue, {root:true});
      }
    },
    
  },
  methods: {
    durationRedClass({row, rowIndex}) {
      for (var i = 0; i < this.timesheetTable.length; i++) {
          if (row.duration > '08:00:00') {
              return 'duration-red';
        }
      }
      return '';
    },
    loadData () {
      
      this.$store.dispatch('timesheet/loadTimesheetTable', {root: true})
      //   var id= 40820
      //   var checkIn= this.datePickerValue[0]
      //   var checkOut= this.datePickerValue[1]

      // // axios.get('/api/log/' + id + '/' + checkIn + '/' + checkOut)
      // axios.get('/api/log/', {params: {
      //     id: 40820,
      //     checkIn: this.datePickerValue[0],
      //     checkOut: this.datePickerValue[1]
      //     }})
      //   .then(res => {
      //     console.log(res)

      //   })
      //   .catch(error => {
      //     console.log(error)
      //   })
    }
  
  }
};
</script>

<!-- Set local styles -->
<style lang="sass" scoped>
.el-date-editor.el-input__inner
  width: 33%

.submitButton
  float: left
  
.timesheet_total
  line-height: 3
  text-align: right
  // padding-right: 145px
  padding-right: 10%
  background-color: #e4e7ea
  font-weight: 600

  span 
    padding-right: 1%

.el-table:nth-child(last) 
  text-align: center

</style>

