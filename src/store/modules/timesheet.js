// import data from '../../data/data';
import axios from 'axios'
// const { add } = require('timelite');

const state = {
  loadedData : [],  
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
};

const mutations = {
  loadTimesheets (state, responseData) {
    var days = [ Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday]
    var day // getDay()
    var checkInHours // getHours()
    var checkInMinutes // getMinutes()
    var checkOutHours
    var checkOutMinutes
    var date  // getDate()
    var month // getMonth()
    var year //getFullyear()
    
    for (let i=0; i <= responseData.length; i++) {
      year = responseData[i].logIn.getFullYear() //2018
      date = responseData[i].logIn.getDate() //22
	month = responseData[i].logIn.getMonth() + 1// 1-12
      hours = responseData[i].logIn.getHours() // 9
      day = days[responseData[i].logIn.getDay()] // 1 or Monday
      checkInHours = responseData[i].logIn.getHours() // 9
      checkInMinutes = responseData[i].logIn.getMinutes() // 15
	checkOutHours = responseData[i].logOut.getHours() // 17
	checkOutMinutes = responseData[i].logOut.getMinutes() //10
	
	state.timesheetTable[i].date = day + ' ' + date + '-' + month + '-' + year
	state.timesheetTable[i].checkIn = checkInHours + checkInMinutes
	state.timesheetTable[i].checkOut = checkOutHours + checkOutMinutes	
    }
  },
  loadDaata (state, responseData) {
    state.loadedData = responseData
  }
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
  loadTimesheetTable ({commit}) {
    var responseData = []
    let id = this.$store.state.loggedUserId
    let checkIn = this.$store.state.shared.datePickerValue[0]
    let checkOut = this.$store.state.shared.datePickerValue[1]

    axios.get('/api/log' + id + '/' + checkIn + '/' + checkOut)
      .then(res => {
        responseData = res.data
        commit('loadDaata', responseData)
      })
      .cathc(error => {
        console.log(error)
      })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
