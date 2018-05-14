const state = {
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
      },{
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
  days: [ {
    date: 'Monday 01-01-2016',
    checkIn: '09:00',
    checkOut: '17:44',
    duration: '8:00'
    }, {
    date: 'Tuesday 02-01-2016',
    checkIn: '09:00',
    checkOut: '17:58',
    duration: '8:00'
    }, {
    date: 'Wednesday 03-01-2016',
    checkIn: '09:00',
    checkOut: '17:53',
    duration: '7:50'
    }, {
    date: 'Thirsday 04-01-2016',
    checkIn: '09:00',
    checkOut: '18:53',
    duration: '8:10'
    }, {
    date: 'Friday 05-01-2016',
    checkIn: '09:00',
    checkOut: '18:53',
    duration: '8:50'
    }
  ],
  valueSelectedEmployee: 'Filip Kotev',  
}

const getters = {
  valueSelectedEmployee: state => {
    return state.valueSelectedEmployee;
  }
}

const mutations = {
  updateSelectedEmployeeValue: (state, payload) => {
    state.valueSelectedEmployee = payload;
  }
}

const actions = {
  updateSelectedEmployeeValue: ({commit}, payload) => {
    commit('updateSelectedEmployeeValue', payload);
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}