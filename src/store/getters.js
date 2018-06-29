const getters = {
  
  //Update selected Calendar, Status and Department values
  departmentValue: (state) => {
    return state.departmentValue;
  },
  statusValue: (state) => {
    return state.statusValue;
  },
  pickerValue: (state) => {
    return state.pickerValue;
  },
  datePickerValue: (state) => {
    return state.datePickerValue;
  },
  
  // Update side nav values
  selectedPage: state => {
    return state.selectedPage;
  },
  selectedChildPage: state => {
    return state.selectedChildPage;
  }
}

export default {
  getters
}