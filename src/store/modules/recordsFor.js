const state = {
    people: [{
        name: 'Ivan Ivanov',
        imgUrl: 'https://randomuser.me/api/portraits/men/15.jpg',
        business: '-',
        overtime: '-',
     }, {
        name: 'Filip Kotev',
        imgUrl: 'https://randomuser.me/api/portraits/men/18.jpg',
        department: 'User Experience',
        business: '-',
        overtime: '03:30',
     }, {
        name: 'Vasil Ivanov',
        imgUrl: 'https://randomuser.me/api/portraits/men/17.jpg',
        department: 'Accounts',
        workId: 23612,
        work: '46:59',
        business: '46:00',
        overtime: '-',
        total: '92:59' 
     }, {
        name: 'Ivan Ivanov',
        imgUrl: 'https://randomuser.me/api/portraits/men/22.jpg',
        department: 'Cytric',
        workId: 40612,
        business: '-',
        overtime: '01:54',
     }
    ]
}

export default {
    namespaced: true,
    state
}