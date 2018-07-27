<template lang="html">
  <div class="">
    <div class="page-title"><h1>Abidance Time Frame and Break</h1></div>
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="11">
        <h5 class="demonstration">Period</h5>
        <el-date-picker
          v-model="pickerValue"
          type="daterange"
          format="dd/MM/yyyy"
          range-separator="To"
          start-placeholder="Start date"
          end-placeholder="End date">
        </el-date-picker>
      </el-col>
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
      <el-col :xs="24" :sm="24" :md="2" class="submitButton">
        <el-button class="button" type="primary">Go</el-button>
      </el-col>
    </el-row> <!-- End Search Field -->
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
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState('shared', [
      'selectDepartment'
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
      get () {
        return this.$store.getters['shared/departmentValue']
      },
      set (departmentValue) {
        return this.$store.dispatch('shared/updateDepartmentValue', departmentValue, {root: true})
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
      return this.arrays.sort(compare)
    },
    durationRedClass ({row, rowIndex}) {
      for (var i = 0; i < this.timesheetTable.length; i++) {
        if (row.missing > '01:00:00') {
          return 'duration-red'
        }
      }
      return ''
    }
  }
}
</script>

<!-- Set local styles -->
<style lang="scss" scoped>
.el-date-editor--daterange.el-input,
.el-date-editor--daterange.el-input__inner,
.el-date-editor--timerange.el-input,
.el-date-editor--timerange.el-input__inner {
  width: 100%;
}  

.block {
  width: 45%;
  display: inline-block;
} 

.select {
  width: 45%;
  display: inline-block;
  margin-left: 5%;
} 

.el-select {
  width: 100%;
} 

.el-select-dropdown__wrap {
  overflow: hidden;  
}

.abidanceContainer {
  margin-top: 61px;  
}
  
.abidanceContainer ul {
  padding: 0;  
} 

.abidanceContainer ul li {
  display: flex;
  flex-flow: row;
  margin-bottom: 60px;
  width: 100%;
  border: 1px solid #EAF6FB;
  border-left: none;
  border-right: none;
}

.picNameId {
  border-right: 1px solid #EAF6FB;
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

.abidance-table {
  margin-left: 15px;
}

.duration-red td:last-of-type {
  color: #C76161;
} 

</style>
