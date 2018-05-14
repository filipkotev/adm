import data from '../../data/data';
const { add } = require('timelite');

const state = {
  timesheetTable: [{
        date: 'Monday 03-05-2016',
        checkIn: '09:00',
        checkOut: '17:44',
        duration: '08:00',
        missing: '01:30'
      }, {
        date: 'Tuesday 04-05-2016',
        checkIn: '09:00',
        checkOut: '17:58',
        duration: '08:00',
        missing: '01:10'
      }, {
        date: 'Wednesday 05-05-2016',
        checkIn: '09:00',
        checkOut: '17:53',
        duration: '17:50',
        missing: '01:00'
      }, {
        date: 'Thirsday 06-05-2016',
        checkIn: '09:00',
        checkOut: '18:53',
        duration: '08:10',
        missing: '00:52'
      }, {
        date: 'Friday 07-05-2016',
        checkIn: '09:00',
        checkOut: '18:53',
        duration: '08:50',
        missing: '00:32'
      }
  ],
  timesheetTotal : '35:00'
};

const mutations = {
  // timesheetTotal: state => {
  //   console.log(state.timesheetTable.duration)
  //   // for (var i=0; i <= state.timesheetTable.duration.length; i++ ) {
  //   //   // add (state.timesheetTable[i].duration);
  //   //   console.log(state.timesheetTable[i].duration)
  //   // }
  // }
}

const actions = {
  
}

export default {
  namespaced: true,
  state,
  mutations
}
