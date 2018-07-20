<template lang="html">
  <div class="">
    <div class="page-title"><h1>Edit Employee Timesheet</h1></div>
    <el-row :gutter="10">
      <el-col :xs="24" :sm="24" :md="11">
        <h5 class="demonstration">Employee</h5>
        <div style="position: relative">
          <img class="defaultImg" src="../../assets/user.svg" alt=""/>
          <el-select 
            id="selectEmployee"
            class="full-width "
            v-model="valueSelectedEmployee"
            filterable 
            placeholder="Select Employee">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                <img class="selectImg" :src="item.url"/>
                <span style="margin-left: 40px;">{{item.value}}</span>
              </el-option>
          </el-select>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="11">
        <h5 class="demonstration">Period</h5>
        <el-date-picker
          class="full-width" 
          v-model="datePickerValue" 
          type="daterange" 
          align="right"
          format="dd/MM/yyyy" 
          unlink-panels range-separator="To" 
          start-placeholder="Start date" 
          end-placeholder="End date" 
          :picker-options="pickerOptions">
        </el-date-picker>
      </el-col>
      <el-col :xs="24" :sm="24" :md="2" class="submitButton">
        <el-button class="submit-button" type="primary">Go</el-button>
      </el-col> 
    </el-row>
  <!-- Table header titles -->  
    <div class="edit-time-table">
      <div class="edit-title-table">
        <p style="padding-left: 10px">Date</p> 
      </div>
      <div class="edit-title-table title-checkin">
        <p >Check In</p> 
      </div>
      <div class="edit-title-table title-checkout" style="float: right">
        <p style="margin-right: 18px">Check Out</p>
      </div>
    </div> 
  <!-- Table Body --> 
    <div class="edit-time-tablerow" v-for="day in days">
        <div class="editDateCell">
          <span><strong>{{day.date}}</strong></span>
        </div>
        <div class="editDateCell">
          <div class="editTimeBox " >
            <div class="clickable" @click="onEditTime">
              <i class="el-icon-time hidden"></i>
              <input  
                class="editTime" 
                maxlength="5"
                v-mask="'99:99'" 
                :value="day.checkIn"
                v-on:keydown.enter="entered"
              />
              <i class="el-icon-edit iconEditTime"></i>
            </div>
            <el-button class="secondary-button hidden" plain @click="onSave">Save</el-button>
          </div>
        </div>
        <div class="editDateCell">
          <div class="editTimeBox">
            <div class="clickable" @click="onEditTime">
              <i class="el-icon-time hidden" ></i>
              <input  
                class="editTime"
                maxLength="5" 
                v-mask="'99:99'"
                :value="day.checkOut"
                v-on:keydown.enter="entered"
              />
              <i class="el-icon-edit iconEditTime" ></i>
            </div>
            <el-button 
              class="secondary-button hidden"
              plain
              @click="onSave"
            >Save</el-button>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import { numeric, minLength, maxLength } from 'vuelidate/lib/validators'
import { mapState } from 'vuex'

export default {
  data () {
    return {
      options: [{
        value: 'Ivan Borisov',
        label: 'Ivan Borisov',
        url: 'https://randomuser.me/api/portraits/men/55.jpg'
      }, {
        value: 'Ivvan Hristov',
        label: 'Ivvan Hristov',
        url: 'https://randomuser.me/api/portraits/men/53.jpg'
      }, {
        value: 'Filipp Kotev',
        label: 'Filipp Kotev',
        url: 'https://randomuser.me/api/portraits/men/51.jpg'
      }, {
        value: 'Vasil Ivanov',
        label: 'Vasil Ivanov',
        url: 'https://randomuser.me/api/portraits/men/91.jpg'
      }, {
        value: 'Ilian Ivannov',
        label: 'ILian Ivannov',
        url: 'https://randomuser.me/api/portraits/women/55.jpg'
      }, {
        value: 'Ivan Borissov',
        label: 'Ivan Borissov',
        url: 'https://randomuser.me/api/portraits/men/13.jpg'
      }, {
        value: 'Ivan Hristov',
        label: 'Ivan Hristov',
        url: 'https://randomuser.me/api/portraits/men/29.jpg'
      }, {
        value: 'Filip Kotev',
        label: 'Filip Kotev',
        url: 'https://randomuser.me/api/portraits/men/15.jpg'
      }, {
        value: 'Vassil Georgiev',
        label: 'Vassil Georgiev',
        url: 'https://randomuser.me/api/portraits/men/35.jpg'
      }, {
        value: 'Ilian Ivanov',
        label: 'ILian Ivanov',
        url: 'https://randomuser.me/api/portraits/men/39.jpg'
      }],
      valueSelectedEmployee: ''
    }
  },
  computed: {
    ...mapState('shared', [
      'pickerOptions'
    ]),
    ...mapState('editTime', [
      'days'
    ]),
    datePickerValue: {
      get () {
        return this.$store.getters['shared/datePickerValue']
      },
      set (datePickerValue) {
        return this.$store.dispatch('shared/updateDatePickerValue', datePickerValue, {root: true})
      }
    },
    customValidation () {

    }
  }, // End Computed
  validations: {
    input: {
      numeric,
      minLength: minLength(5),
      maxLength: maxLength(5)
    }
  },
  methods: {
    showNotification () {
      this.$notify({
        message: 'Time has been updated!',
        type: 'success',
        offset: 180,
        duration: 1000
      })
    },
    onEditTime: function (event) {
      var vm = event.currentTarget

      vm.classList.add('editTimeBoxFocused')
      vm.querySelector('.el-icon-time').classList.remove('hidden')
      vm.querySelector('.iconEditTime').classList.add('hidden')
      vm.querySelector('.editTime').classList.add('f-14')
      vm.nextElementSibling.classList.remove('hidden')
    },
    onSave: function (event) {
      var vm = event.currentTarget

      vm.classList.add('hidden')
      vm.previousElementSibling.classList.remove('editTimeBoxFocused')
      vm.previousElementSibling.childNodes[0].classList.add('hidden')
      vm.previousElementSibling.childNodes[2].classList.remove('f-14')
      vm.previousElementSibling.lastChild.classList.remove('hidden')

      this.showNotification()
    },
    entered: function (event) {
      var vm = event.currentTarget

      vm.classList.remove('f-14')
      vm.nextElementSibling.classList.remove('hidden')
      vm.parentNode.classList.remove('editTimeBoxFocused')
      vm.parentNode.firstChild.classList.add('hidden')
      vm.parentNode.nextElementSibling.classList.add('hidden')

      this.showNotification()
    }

  } // End Methods
}
</script>

<style lang="scss" scoped>

.select-container { 
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}
.block {
  width: 41%;
}
.full-width {
  width: 100% !important;
}
.selectPeriod {
  margin-left: 20px;
}
.submitButton {
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-start;
  position: relative;
  top: 52px;
}
#selectEmployee {
    padding-left: 60px;
}
.parent {
  position: relative;
  padding-left: 40px;
  height: 50px;
}
.defaultImg {
  background-color: #BFBFBF;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  position: absolute;
  top: 5px;
  left: 10px;
  z-index: 2;
}
.selectImg {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  position: absolute;
  top: 5px;
  left: 10px;
  z-index: 2;
}
.submit-button-box {
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-start;
}
.submit-button {
  background-color: #1F98BD;
  border-color: transparent;
}
.el-button {
  height: 40px;
  width: 85px;
  color: white;
}
.el-button:hover {
  background-color: hsl(192, 65%, 45%);
  color: white !important;
}
.el-button--primary.is-active,
.el-button--primary:active,
.el-button--primary:focus {
  background-color: hsl(192, 65%, 45%);
  border-color: transparent;
}
.edit-time-table {
  display: flex;
  justify-content: space-between;
  /* margin-right: 140px */
  margin-top: 60px;
  /* padding-right: 64px */
  border-bottom: 1px solid #dddddd;
}
.edit-title-table {
  width: 33% !important;
  line-height: 1;
  color: #878d99;
  font-weight: 500;
  font-size: 14px;
}
.title-checkin p {
  padding-left: 19px;
}
.title-checkout p {
  padding-left: 32px;
}
.edit-time-tablerow {
  height: 80px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #dddddd;
  padding: 20px 15px 15px 10px;
}

.editDateCell {
  width: 30%;
  line-height: 3;
  display: flex;
  flex-flow: column;
  justify-content: center;
  /* float: left  */
}
.el-icon-time {
  margin-right: 5px;
}
.clickable {
  width: 100px;
}
.clickable:hover {
  cursor: pointer;
}
.hidden {
  display: none;
}
.editTimeBox {
  display: flex;
  flex-flow: row;
}
.editTimeBoxFocused {
  width: 100px;
  height: 40px;
  padding-left: 10px;
  border: 1px solid #B4B4B4;
  border-radius: 3px;
  outline: none;
}
.editTime {
  width: 40px;
  color: #444444;
  font-size: 16px;
  font-weight: 400;
  margin-right: 5px;
  outline: none;
  border: none;
}

.f-14 {
  font-size: 14px;
}
.iconEditTime {
  color: #0C85AA;
  opacity: 0.4;
}
.iconEditTime:hover {
  opacity: 1;
  cursor: pointer;
}
.saveButton {
  width: 65px;
  padding: 0 !important;
  padding-top:12px;
  padding-bottom: 12px;
  text-align: center !important;
  background: #fff;
  border-color: #409eff;
  color: #409eff;
}
.editButton .el-button {
  background-color: white;
  color: #1F98BD;
  border: 1px solid #1F98BD;
}
.editButton .el-button:hover {
  background-color: hsl(192, 65%, 45%);
}
.editButton .el-button--primary.is-active,
.editButton .el-button--primary:active,
.editButton .el-button--primary:focus {
  background-color: hsl(192, 65%, 45%);
  border-color: transparent;
}
.invalid {
  border: 1px solid red;
  background-color: indianred;
}
</style>
