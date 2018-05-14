const state = {
    themeStyles: {
        weekdays: {
            borderBottom: '1px solid lightgrey',
            fontSize: '14px',
            fontWeight: 'bold',
            marginTop: '15px'
        },
        weeks: {
            padding: 0,
        },
        week: {
            borderBottom: '1px solid lightgrey',
        },
        dayContent: {
            fontSize: '14px',
            fontWeight: 500
        },
        dayCellNotInMonth: {
            display: 'none',
            opacity: 0
        },
    },
    formats: {
        weekdays: 'WWW',
    },
    options: [
        {
          value: 'January',
          label: 'January'
        }, {
          value: 'February',
          label: 'February'
        }, {
          value: 'March',
          label: 'March'
        }, {
          value: 'April',
          label: 'Aprill'
        }, {
          value: 'May',
          label: 'May'
        }, {
          value: 'June',
          label: 'June'
        }, {
          value: 'July',
          label: 'July'
        }, {
          value: 'August',
          label: 'August'
        }, {
          value: 'September',
          label: 'September'
        }, {
          value: 'October',
          label: 'October'
        }, {
          value: 'November',
          label: 'November'
        }, {
          value: 'December',
          label: 'December'
        }
      ],
    attributes: [
        { // Today styles
            key: 'today',
            highlight: {
                backgroundColor: '#EAF6FB',
                borderRadius: '0'
            },
            contentStyle: {
                color: '#1F98BD',
            },
            dates: new Date(),
            popover: {
                label: "Today"
            }
        },
        { // Weekends Styles
            key: 'weekends',
            highlight: {
                backgroundColor: '#ECECEC',
                borderRadius: '0',
            },
            dates: { weekdays: [1, 7] }, // On the weekends
        },
        { // National Liberation Day
            key: 'National Liberation Day',
            highlight: {
                backgroundColor: '#F1FBEA',
                borderRadius: '0'
            },
            contentStyle: {},
            dates: [ 
                new Date(2018, 2, 3), //National Liberation Day 
                new Date(2018, 2, 5), // National Liberation Day
            ],
            hintDate: [
                "3 March 2018",
                "5 March 2018",
            ],
            popover: {
                label: 'National Liberation Day',
            }
        },
        { // Easter
            key: 'Easter',
            highlight: {
                backgroundColor: '#F1FBEA',
                borderRadius: '0'
            },
            contentStyle: {},
            dates: [
                new Date(2018, 3, 6),
                new Date(2018, 3, 7),
                new Date(2018, 3, 8),
                new Date(2018, 3, 9)
            ],
            hintDate: [
                "6 April 2018",
                "7 April 2018",
                "8 April 2018",
                "9 April 2018",
            ],
            popover: {
                label: 'Easter',
            }
        },
        {  // New Year
            key: 'New Year',
            highlight: {
                backgroundColor: '#F1FBEA',
                borderRadius: '0'
            },
            contentStyle: {},
            dates: [new Date(2018, 0, 1)],
            hintDate: [
                "1 January 2018",
            ],
            popover: {
                label: 'New Year',
            }
        },
        {  // Labour Day
            key: 'Labour Day',
            highlight: {
                backgroundColor: '#F1FBEA',
                borderRadius: '0'
            },
            contentStyle: {},
            dates: [new Date(2018, 4, 1)],
            hintDate: [
                "1 May 2018",
            ],
            popover: {
                label: 'Labour Day',
            }
        },
        {  // St. Georgi\'s day
            key: 'St. Georgi\'s day',
            highlight: {
                backgroundColor: '#F1FBEA',
                borderRadius: '0'
            },
            contentStyle: {},
            dates: [
                new Date(2018, 4, 6),
                new Date(2018, 4, 7)
            ],
            hintDate: [
                "6 May 2018",
                "7 May 2018",
            ],
            hintDate: [
                "6 May 2018",
                "7 May 2018",
            ],
            popover: {
                label: 'St. Georgi\'s day',
            }
        },
        {  // St Cyril and Methodius Day
            key: 'St Cyril and Methodius Day',
            highlight: {
                backgroundColor: '#F1FBEA',
                borderRadius: '0'
            },
            contentStyle: {},
            dates: [new Date(2018, 4, 24)],
            hintDate: [
                "24 May 2018",
            ],
            popover: {
                label: 'St Cyril and Methodius Day',
            }
        },
        {  // National Unification Day
            key: 'National Unification Day',
            highlight: {
                backgroundColor: '#F1FBEA',
                borderRadius: '0'
            },
            contentStyle: {},
            dates: [new Date(2018, 8, 6)],
            hintDate: [
                "6 September 2018",
            ],
            popover: {
                label: 'National Unification Day',
            }
        },
        {  // Independance day
            key: 'Independence day',
            highlight: {
                backgroundColor: '#F1FBEA',
                borderRadius: '0'
            },
            contentStyle: {},
            dates: [
                new Date(2018, 8, 22),
                new Date(2018, 8, 24)
            ],
            hintDate: [
                "22 September 2018",
                "24 September 2018",
            ],    
            popover: {
                label: 'Independence day',
            }
        },
        {  // Christmas
            key: 'Christmas',
            highlight: {
                backgroundColor: '#F1FBEA',
                borderRadius: '0'
            },
            contentStyle: {},
            dates: [
                new Date(2018, 11, 24),
                new Date(2018, 11, 25),
                new Date(2018, 11, 26)
            ],hintDate: [
                "24 Decemeber 2018",
                "25 Decemeber 2018",
                "26 Decemeber 2018",
            ],
            popover: {
                label: 'Christmas',
            }
        },
    ]
};

const getters = {
   
};

const mutations = {

};

const actions = {

};

export default {
    namespaced: true,
    state,
    mutations,
    getters,
    actions
}