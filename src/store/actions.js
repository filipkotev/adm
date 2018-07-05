const actions = {

  // Update selected Calendar, Status and Department values
  updateDepartmentValue: ({commit}, payload) => {
    commit('updateDepartmentValue', payload)
  },
  updateStatusValue: ({commit}, payload) => {
    commit('updateStatusValue', payload)
  },
  updatePickerValue: ({commit}, payload) => {
    commit('updatePickerValue', payload)
  },
  updateDatePickerValue: ({commit}, payload) => {
    commit('updateDatePickerValue', payload)
  },

  // Update side nav values
  updateSelectedPage: ({commit}, payload) => {
    commit('updateSelectedPage', payload)
  },
  updateSelectedSubPage: ({commit}, payload) => {
    commit('updateSelectedChildPage', payload)
  }
}

export default {
  actions
}
