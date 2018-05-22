import data from '../../data/data';
const { add } = require('timelite');

const state = {
  timesheetTable: [{
        date: 'Monday 03-05-2016',
        checkIn: '09:00',
        checkOut: '17:44',
        duration: '08:00',
        missing: '01:30',
        tagName: 'business',
        tagType: ''
      }, {
        date: 'Tuesday 04-05-2016',
        checkIn: '09:00',
        checkOut: '17:58',
        duration: '08:00',
        missing: '01:10',
        tagName: 'on duty',
        tagType: ''
      }, {
        date: 'Wednesday 05-05-2016',
        checkIn: '09:00',
        checkOut: '17:53',
        duration: '17:50',
        missing: '01:00',
        tagName: 'on duty',
        tagType: ''
      }, {
        date: 'Thirsday 06-05-2016',
        checkIn: '09:00',
        checkOut: '18:53',
        duration: '08:10',
        missing: '00:52',
        tagName: 'overtime',
        tagType: ''
      }, {
        date: 'Friday 07-05-2016',
        checkIn: '09:00',
        checkOut: '18:53',
        duration: '08:50',
        missing: '00:32',
        tagName: 'business',
        tagType: ''
      }
  ],
  timesheetTotal : '35:00'
};

const mutations = {
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
  loadData: ({commit}, payload) => {
    commit 
  }  
}

export default {
  namespaced: true,
  state,
  mutations
}
