const state = {
    selectedPage: 'Office Status'
}

const getters = {
    selectedPage: state => {
        return state.selectedPage;
    }
}
const mutations = {
    updateSelectedPage: (state, payload) => {
        state.selectedPage = payload;
    }
}

const actions = {
    updateSelectedPage: ({commit}, payload) => {
        commit('updateSelectedPage', payload);
    }
    
}
export default {
    namespaced: true,
    state,
    getters, 
    mutations,
    actions
}