// import data from '../../data/data';
import axios from 'axios'
// const { add } = require('timelite');

const state = {
  loggedinUserId: 40820,
  loadedData: [],
  timesheetTable: [
//	{
//      date: '',
//      checkIn: '',
//      checkOut: '',
//      duration: '',
//      missing: '',
//      tagName: '',
//      tagType: ''
//    }, 
//      {
//        date: 'Monday 03-05-2016',
//        checkIn: '09:00',
//        checkOut: '17:44',
//        duration: '08:00',
//        missing: '01:30',
//        tagName: 'business',
//        tagType: ''
//      },
//      {
//        date: 'Tuesday 04-05-2016',
//        checkIn: '09:00',
//        checkOut: '17:58',
//        duration: '08:00',
//        missing: '01:10',
//        tagName: 'on duty',
//        tagType: ''
//      },
//      {
//        date: 'Wednesday 05-05-2016',
//        checkIn: '09:00',
//        checkOut: '17:53',
//        duration: '17:50',
//        missing: '01:00',
//        tagName: 'on duty',
//        tagType: ''
//      },
//      {
//        date: 'Thirsday 06-05-2016',
//        checkIn: '09:00',
//        checkOut: '18:53',
//        duration: '08:10',
//        missing: '00:52',
//        tagName: 'overtime',
//        tagType: ''
//      }, 
//      {
//        date: 'Friday 07-05-2016',
//        checkIn: '09:00',
//        checkOut: '18:53',
//        duration: '08:50',
//        missing: '00:32',
//        tagName: 'business',
//        tagType: ''
//      }
  ],
  timesheetTotal: '',
  // Date picker
  pickerOptions: {
    shortcuts: [
    {
      text: 'Last week',
      onClick (picker) {
        const end = new Date ();
        const start = new Date ();
        start.setTime(start.getTime () - 3600 * 1000 * 24 * 7);
        picker.$emit('pick', [start, end])
      }
    }, {
      text: 'Last month',
      onClick (picker) {
        const end = new Date ();
        const start = new Date ();
        start.setTime(start.getTime () - 3600 * 1000 * 24 * 30);
        picker.$emit('pick', [start, end])
      }
    }, {
      text: 'Last 3 months',
      onClick (picker) {
        const end = new Date ();
        const start = new Date ();
        start.setTime(start.getTime () - 3600 * 1000 * 24 * 90);
        picker.$emit('pick', [start, end])
      }
    }]
  },
  datePickerValue: [new Date(), new Date()]
}

const mutations = {
  updateDatePickerValue: (state, payload) => {
    state.datePickerValue = payload
  },
  loadTimesheets (state, responseData) {
    // empty the timesheet table first
    state.timesheetTable = []

    var weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    var day             // getDay()
    var hours
    var checkInHours    // getHours()
    var checkInMinutes  // getMinutes()
    var checkOutHours   // getHours()
    var checkOutMinutes // getMinutes()
    var date            // getDate()
    var month           // getMonth()
    var year            // getFullyear()

    for (let i = 0; i < responseData.length; i++) {
//      var options = { weekday: 'long', year: 'numeric', month: '2-digit', day: '2-digit' }
      let a = new Date(responseData[i].logIn)
      let b = new Date(responseData[i].logOut)

//      function checkForSingleNumber (c) {
//        if (c.toString().length < 10) {
//          c = '0' + c
//        }
//      }

      year = a.getFullYear()           // 2018
      date = a.getDate()               // 22
      month = a.getMonth() + 1         // 1-12
      hours = a.getHours()             // 9
      day = weekdays[a.getDay()]       // 1 or Monday
      checkInHours = a.getHours()      // 09
      checkInMinutes = a.getMinutes()  // 15
      checkOutHours = b.getHours()     // 17
      checkOutMinutes = b.getMinutes() // 10

//      checkForSingleNumber(date)
//      checkForSingleNumber(hours)
//      checkForSingleNumber(checkInHours)
//      checkForSingleNumber(checkInMinutes)
//      checkForSingleNumber(checkOutHours)
//      checkForSingleNumber(checkOutMinutes)
      
//      if (hours.toString().length == 1 ||
//          checkInHours.toString().length == 1 ||
//          checkInMinutes.toString().length == 1 ||
//          checkOutHours.toString().length == 1 ||
//          checkOutMinutes.toString().length == 1) {
//
//        hours = '0' + hours
//        checkInHours = '0' + checkInHours
//        checkInMinutes = '0' + checkInMinutes
//        checkOutHours = '0' + checkOutHours
//        checkOutMinutes = '0' + checkOutMinutes
      }

      var dayAtWork = {
        date: day + '  ' + date + '-' + month + '-' + year,
        checkIn: checkInHours + ':' + checkInMinutes,
        checkOut: checkOutHours + ':' + checkOutMinutes
      }
      state.timesheetTable.push(dayAtWork)
  }
}

const actions = {
  loadTimesheetTable ({commit}, payload) {
    var responseData = []
    let checkIn = state.datePickerValue[0]
    let checkOut = state.datePickerValue[1]
    let id = state.loggedinUserId

    axios.get('/api/log/' + id + '/' + checkIn + '/' + checkOut)
//    axios.get('http://admission.sofia.ifao.net/api/log/45507/2018-06-01/2018-06-27')
      .then(res => {
        responseData = res.data
        console.log(responseData)
        commit('loadTimesheets', responseData)
      })
      .catch(error => {
        console.log(error)
      })
  },
  updateDatePickerValue: ({commit}, payload) => {
    commit('updateDatePickerValue', payload)
  }
}

const getters = {
  datePickerValue: (state) => {
    return state.datePickerValue
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
