<template lang="html">
  <div>
    <div class="page-title"><h1>Work Calendar</h1></div>

    
    <div class="select-container">
      <!-- <h5 class="demonstration">Choose Another Month</h5> -->
      <!-- <div class="show-month">
        <span class="change-month el-icon-arrow-left" @click="movePreviousMonth"></span>
        <el-select v-model="value" placeholder="Select">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <span class="change-month el-icon-arrow-right" @click="moveNextMonth"></span>
      </div> -->
      <div class="show-full-year-switch">
        <strong>Show Entire Year ({{thisYear}})</strong>
        <el-switch
          active-color="#1F98BD"
          v-model="hideFullYear"
          >
        </el-switch>
      </div>
    </div> <!-- End Select Container -->

    <div class="calendar">  
      <v-calendar
        :attributes='attributes'
        isExpanded
        :formats="formats"
        :theme-styles="themeStyles"
      >
      </v-calendar>
    </div>  
    
    <!-- Legend -->
    <div class="legend">
      <div class="legend-box">
        <span class="legend-current-day"></span>
        <p>Current Day</p>
      </div>
      <div class="legend-box">
        <span class="legend-holiday"></span>
        <p>Holiday</p>
      </div>
      <div class="legend-box">
        <span class="legend-working-day"></span>
        <p>Working Day</p>
      </div>
      <div class="legend-box">
        <span class="legend-weekend"></span>
        <p>Weekend</p>
      </div>
    </div> 
    <!-- Holidays Legend -->
    <div class="holidays-legend" 
          v-for="item in attributes"
          >
      <div class="holiday-info" 
          v-for="key in item.hintDate"
          v-if=""
      >
        <div 
            class="holiday-date"
            
            
        >{{ key}}
        
        </div>
        <span >{{ item.key }}</span>
        {{ isCurrentMonth }}
      </div>
      <!-- <div class="holiday-info">
        <div class="holiday-date">5 Mar 2018</div>
        <span>National Liberation Day</span>
      </div> -->
    </div>
    <!-- <div 
        v-for="month in currentMonths"
        styles="display: inline-block;"
        > {{ month }} </div> -->
    <!--- Full Year Calendar -->
    <div class="calendar full-year-calendar" :class="{ hiddenFullYear: !hideFullYear }">
      
        <v-calendar
          class='full-year-month'
          v-for="month in months"
          :attributes='attributes'
          :formats='formats'
          :theme-styles='themeStyles'
          
         
        ></v-calendar>
    </div>
  </div>
</template>

<script>
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex';

const _today = new Date()

export default {
  data: function () {
    return {
      hideFullYear: false,
      months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "Oktober", "November", "December"],
      // currentMonths: [],
    }
  },
  computed: {
    ...mapState('workCalendar', [
      'themeStyles',
      'formats',
      'options',
      'attributes',
    ]),
    thisYear () {
      return _today.getFullYear();
    },
    // currentMonth () {
      //   var _countMonth = _today.getMonth();
      //   var _currentMonth = false;
      //   var countMonth="";
      //   var vm = this;
      
      //   for (let j=2; j < this.attributes.length; j++) {
      //     let dates = this.attributes[j].dates;
        
      //     for (let i=0; i < dates.length; i++) {
      //       countMonth = dates[i].getMonth();
      //       console.log(countMonth)
      //       if(countMonth == _countMonth) {
      //         _currentMonth = true;
      //         console.log(_currentMonth)
      //         return
      //       } else {
      //         _currentMonth = false;
      //         return
      //       }
          
      //       // vm.currentMonths.push(_currentMonth);
            
      //     } // End for loop 1
      //     console.log(vm.currentMonths);
      //   } // End for loop 2
      //   return _currentMonth
      //   console.log(_currentMonth)
      // },
    isCurrentMonth () {
      var presentMonth = _today.getMonth()
      var givenMonth = ''
      for (var i=2; i <= this.attributes.length; i++) {
        givenMonth  = this.attributes[i].dates
        return givenMonth
      }
      
    }
  },
  
}
</script>

<style lang="sass" scoped>

strong
  color: #000 !important

.select-container
  display: flex
  flex-flow: row
  justify-content: space-between

.hiddenFullYear
  display: none !important

.show-month
  display: flex
  align-items: flex-end

.change-month
  height: 38px
  width: 43px
  border: 1px solid #dcdfe6
  border-radius: 3px

  &:hover 
    cursor: pointer

.el-icon-arrow-left
  line-height: 2
  &:before
    padding: 12px

.el-icon-arrow-right
  line-height: 2
  &:before
    padding: 12px

.el-select
  width: 150px
  margin-right: 10px
  margin-left: 10px

.el-switch
  margin-left: 15px

.show-full-year-switch
  display: flex
  align-items: center

strong
  font-size: 14px

/***** Legend Styles *****/
.legend
  display: flex
  flex-flow: row
  margin-top: 20px

.legend-box
  margin-right: 85px
  position: relative

.legend-box>p
  font-size: 12px
  color: #8D8D8D
  position: relative
  top: -20px
  left: 40px

.legend-box>span
  width: 28px
  height: 18px
  border: 1px solid #BFBFBF
  display: inline-block
  margin-right: 15px

.legend-current-day
  background-color: #EAF6FB

.legend-holiday
  background-color: #F1FBEA

.legend-working-day
  background-color: #fff

.legend-weekend
  background-color: #ECECEC

/****** Calendar ******/
.calendar
  margin-top: 30px
  
.c-title-popover
  border: 1px solid lightgrey
  border-radius: 4px
  padding: 5px 35px

  &:hover
    cursor: pointer

.c-pane-container
  background: #fff !important
  border: none  !important

.c-title
  color: #444444 !important

.c-weekday
  padding: 10px !important

.c-week,
  border-bottom: 1px solid lightgrey

.c-week:nth-chilld(6)
  background-color: #ECECEC

.c-day-background
  width: 100% 
  height: 100% 

.c-day
   height: 56px 
  
/******* Holidays Legend *******/
.holidays-legend
  margin-top: 30px

.holiday-info
  display: flex
  width: 370px
  border-top: 1px solid lightgrey
  
  &:last-of-type
    border-bottom: 1px solid lightgrey

  &>span
    padding-top: 20px
    padding-left: 10px

.holiday-date
  
  height: 40px
  background-color: #F1FBEA
  color: #444444
  font-size: 14px
  font-weight: bold
  padding: 20px 28px 11px 15px

.full-year-month
  width: 45%

.full-year-calendar
  &:nth-child(odd)
    margin-right: 10%
.full-year-calendar:first-child()
  margin-right: 10%
</style>
