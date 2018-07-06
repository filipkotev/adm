// import data from '../../data/data';
import axios from 'axios'
var moment = require('moment')
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

    for (let i = 0; i < responseData.length; i++) {
      let checkIn = new Date(responseData[i].logIn)
                        .toLocaleTimeString(navigator.language, {hour: '2-digit', minute: '2-digit', hour12: false})
      let checkOut = new Date(responseData[i].logOut)
                        .toLocaleTimeString(navigator.language, {hour: '2-digit', minute: '2-digit', hour12: false})
      let date = new Date(responseData[i].logIn)
                        .toLocaleString([], { weekday: 'long', year: 'numeric', month: '2-digit', day: '2-digit' })

      let duration = moment.parseZone(moment(responseData[i].logOut, 'hh:mm').diff(moment(responseData[i].logIn, 'hh:mm'))).format('hh:mm')

      let dayAtWork = {
        date,
        checkIn,
        checkOut,
        duration
      }
      state.timesheetTable.unshift(dayAtWork)
    }
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
