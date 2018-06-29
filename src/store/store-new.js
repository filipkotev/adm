import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    loggedUsername: 'Filip Kotev',
    loggedUserId: '40820',
    loggedUserImg: '',
    selectDepartment: [
      {
        value: 'everyone',
        label: 'everyone'
      }, {  
        value: 'Ux Team',
        label: 'Ux Team'
      }, {
        value: 'Mobile Team',
        label: 'Mobile Team'
      }, {
        value: 'Vegas',
        label: 'Vegas'
      }, {
        value: 'Systems',
        label: 'Systems'
      }, {
        value: 'Analytics',
        label: 'Analytics'
      }, {
        value: 'General Managers',
        label: 'General Managers'
      }, {
        value: 'Development staff',
        label: 'Development staff'
      }, {
        value: 'Cytric',
        label: 'Cytric'
      }, {
        value: 'DB Administration',
        label: 'DB Administration'
      }, {
        value: 'CIB Teams',
        label: 'CIB Teams'
    }],
    departmentValue: 'everyone',

    // Shared select Status
    status: [
      {
      stat: 'Show All',
      label: 'Show All'
      },{
      stat: 'At Work',
      label: 'At Work'
      }, {
      stat: 'Absent',
      label: 'Absent'
      }, {
      stat: 'Gone Out',
      label: 'Gone Out'
      }, {
      stat: 'Business',
      label: 'Business'
      } 
    ],
    statusValue: '',

    // Date picker
    pickerOptions: {
      shortcuts: [
        {text: 'Last week',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: 'Last month',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            picker.$emit('pick', [start, end]);
          }
        }, {
          text: 'Last 3 months',
          onClick(picker) {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
            picker.$emit('pick', [start, end]);
          }
        }]
    },
    datePickerValue: [new Date(), new Date()],
    pickerValue: '',
    
    // Side nav
    selectedPage: 'Office Status',
    selectedChildPage: '',
    
    // Timesheet
    timesheetTable: [
//	{
//        date: '',
//        checkIn: '',
//        checkOut: '',
//        duration: '',
//        missing: '',
//        tagName: '',
//        tagType: ''
//      }, 
      {
        date: 'Monday 03-05-2016',
        checkIn: '09:00',
        checkOut: '17:44',
        duration: '08:00',
        missing: '01:30',
        tagName: 'business',
        tagType: ''
      }, 
      {
        date: 'Tuesday 04-05-2016',
        checkIn: '09:00',
        checkOut: '17:58',
        duration: '08:00',
        missing: '01:10',
        tagName: 'on duty',
        tagType: ''
      }, 
      {
        date: 'Wednesday 05-05-2016',
        checkIn: '09:00',
        checkOut: '17:53',
        duration: '17:50',
        missing: '01:00',
        tagName: 'on duty',
        tagType: ''
      }, 
      {
        date: 'Thirsday 06-05-2016',
        checkIn: '09:00',
        checkOut: '18:53',
        duration: '08:10',
        missing: '00:52',
        tagName: 'overtime',
        tagType: ''
      }, 
      {
        date: 'Friday 07-05-2016',
        checkIn: '09:00',
        checkOut: '18:53',
        duration: '08:50',
        missing: '00:32',
        tagName: 'business',
        tagType: ''
      }
  ],
    timesheetTotal : ''
  },
  modules: {
    actions,
    mutations,
    getters
  }

});
