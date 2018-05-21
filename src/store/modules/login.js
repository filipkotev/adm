const state = {
    userAuth: false,
    adminAuth: false,
    authenticated: false
}

const mutations = {
    userLogin: (state) => {
        state.userAuth = true
        state.authenticated = true
    },
    adminLogin: (state) => {
        state.adminAuth = true
        state.authenticated = true
    }
}

const getters = {

}

const actions = {
   userLogin: ({commit}) => {
       commit ('userLogin')
   },
   adminLogin: ({commit}) => {
    commit ('adminLogin')
}
}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}