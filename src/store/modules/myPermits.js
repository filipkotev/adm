const state = {
    person: 'Ivan Hristov',
    weekdays: [{
        day: "Monday",
        tagName: 'allowed',
        tagType: ''
      }, {
        day: "Tuesday",
        tagName: 'allowed',
        tagType: ''
      }, {
        day: "Wednesday",
        tagName: 'allowed',
        tagType: ''
      }, {
        day: "Thirsday",
        tagName: 'allowed',
        tagType: ''
      }, {
        day: "Friday",
        tagName: 'denied',
        tagType: ''
      }, {
        day: "Saturday",
        tagName: 'denied',
        tagType: ''
      }, {
        day: "Sunday",
        tagName: 'denied',
        tagType: ''
      }
    ] 
};

export default {
    namespaced: true,
    state
}