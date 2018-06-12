const state = {
    selectedPage: 'Office Status',
    selectedChildPage: ''
}

const getters = {
    selectedPage: state => {
        return state.selectedPage;
    },
    selectedChildPage: state => {
        return state.selectedChildPage;
    }
}
const mutations = {
    updateSelectedPage: (state, payload) => {
        state.selectedPage = payload;
    },
    updateSelectedChildPage: (state, payload) => {
        state.selectedChildPage = payload;
    }
}

const actions = {
    updateSelectedPage: ({commit}, payload) => {
        commit('updateSelectedPage', payload);
    },
    updateSelectedSubPage: ({commit}, payload) => {
        commit('updateSelectedChildPage', payload);
    }
    
}
export default {
    namespaced: true,
    state,
    getters, 
    mutations,
    actions
}