const state = {
    people: [{
        name: 'Ivan Ivanov',
        imgUrl: 'https://randomuser.me/api/portraits/men/15.jpg',
        business: '-',
        overtime: '-',
        from: '20-Apr-2018, 18:12:00, Friday',
        until: '20-Apr-2018, 18:12:00, Friday',
        commentary: 'He was on a trip about implementing the platform for credit cards for hotels'
     }, {
        name: 'Filip Kotev',
        imgUrl: 'https://randomuser.me/api/portraits/men/18.jpg',
        department: 'User Experience',
        business: '-',
        overtime: '03:30',
        from: '21-Apr-2018, 18:12:00, Monday',
        until: '22-Apr-2018, 18:12:00, Wednesday',
        commentary: 'none'
     }, {
        name: 'Vasil Ivanov',
        imgUrl: 'https://randomuser.me/api/portraits/men/17.jpg',
        department: 'Accounts',
        workId: 23612,
        work: '46:59',
        business: '46:00',
        overtime: '-',
        total: '92:59',
        from: '25-Apr-2018, 18:12:00, Tuesday',
        until: '27-Apr-2018, 18:12:00, Friday',
        commentary: 'He was on a trip about implementing the platform for credit cards for hotels'
     }, {
        name: 'Ivan Ivanov',
        imgUrl: 'https://randomuser.me/api/portraits/men/22.jpg',
        department: 'Cytric',
        workId: 40612,
        business: '-',
        overtime: '01:54',
        from: '20-Apr-2018, 18:12:00, Friday',
        until: '20-Apr-2018, 18:12:00, Friday',
        commentary: 'none'
     }
    ]
}

export default {
    namespaced: true,
    state
}