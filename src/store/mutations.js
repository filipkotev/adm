const mutations = {
  
  //Update selected Calendar, Status and Department values
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
  },
  
  // Update side nav values
  updateSelectedPage: (state, payload) => {
      state.selectedPage = payload;
  },
  updateSelectedChildPage: (state, payload) => {
      state.selectedChildPage = payload;
  }
};

export default {
  mutations
}