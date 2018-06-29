const state = {
  // Select Department
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

  //shared select Status
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
  datePickerValue: [new Date(), new Date()],
  pickerValue: '',
};
// Getters
const getters = {
  departmentValue: (state) => {
    return state.departmentValue
  },
  statusValue: (state) => {
    return state.statusValue
  },
  pickerValue: (state) => {
    return state.pickerValue
  },
  datePickerValue: (state) => {
    return state.datePickerValue
  }
}
// Mutations
const mutations = {
  updateDepartmentValue: (state, payload) => {
    state.departmentValue = payload
  },
  updateStatusValue: (state, payload) => {
    state.statusValue = payload;
  },
  updatePickerValue: (state, payload) => {
    state.pickerValue = payload;
  },
  updateDatePickerValue: (state, payload) => {
    state.datePickerValue = payload;
  }
};
// Actions
const actions = {
  updateDepartmentValue: ({commit}, payload) => {
    commit('updateDepartmentValue', payload);
  },
  updateStatusValue: ({commit}, payload) => {
    commit('updateStatusValue', payload);
  },
  updatePickerValue: ({commit}, payload) => {
    commit('updatePickerValue', payload);
    console.log(payload);
  },
  updateDatePickerValue: ({commit}, payload) => {
    commit('updateDatePickerValue', payload);
  }
};

export default {
  namespaced: true,
  state, 
  mutations,
  getters,
  actions
}
