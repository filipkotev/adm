// import data from '../../data/data';
import axios from 'axios'
// const { add } = require('timelite');

const state = {
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
    var weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    var day // getDay()
    var hours
    var checkInHours // getHours()
    var checkInMinutes // getMinutes()
    var checkOutHours
    var checkOutMinutes
    var date  // getDate()
    var month // getMonth()
    var year // getFullyear()

    for (let i=0; i <= responseData.length; i++) {
      
        year = new Date(responseData[i].logIn).getFullYear() // 2018
        date =  new Date(responseData[i].logIn).getDate() // 22
        month = new Date( responseData[i].logIn).getMonth() + 1// 1-12
        hours = new Date( responseData[i].logIn).getHours() // 9
        day = weekdays[new Date(responseData[i].logIn).getDay()] // 1 or Monday
        checkInHours = new Date (responseData[i].logIn).getHours() // 9
        checkInMinutes = new Date (responseData[i].logIn).getMinutes() // 15
        checkOutHours = new Date (responseData[i].logOut).getHours() // 17
        checkOutMinutes = new Date (responseData[i].logOut).getMinutes() //10
      
      var dayAtWork = {
        date: day + ' ' + date + '-' + month + '-' + year,
        checkIn: checkInHours + ':' + checkInMinutes,
        checkOut: checkOutHours + ':' + checkOutMinutes,
      }
      state.timesheetTable.push(dayAtWork)
    }
  },
//  loadDaata (state, responseData) {
//    state.loadedData = responseData
//  }
  // setTageType (state) {
  //   for (var i = 0; i < state.timesheetTable.length; i++) {
  //     if (state.timesheetTable[i].tagName === 'on duty') {
  //         state.timesheetTable[i].tagType = 'success';
  //     }else if (state.timesheetTable[i].tagName === 'overtime') {
  //         state.timesheetTable[i].tagType = 'warning';
  //     }else {
  //       state.timesheetTable[i].tagType = '';
  //     }
  //   }
  // }
}

const actions = {
  loadTimesheetTable ({commit}, payload) {
    var responseData = []
    let checkIn = state.datePickerValue[0]
    let checkOut = state.datePickerValue[1]

    axios.get('/api/log/40820' + '/' + checkIn + '/' + checkOut)
//    axios.get('http://admission.sofia.ifao.net/api/log/45507/2018-06-01/2018-06-27')
      .then(res => {
        responseData = res.data
        commit('loadTimesheets', responseData)
      console.log(responseData)
      })
      .catch(error => {
        console.log(error)
      })
  },
  updateDatePickerValue: ({commit}) => {
    commit('updateDatePickerValue');
  }
}

const getters = {
  datePickerValue: (state) => {
    return state.datePickerValue;
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
