import Vue from 'vue';
import Vuex from 'vuex';
import state from './state';
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex);

export default new Vuex.Store({
    state: state,              // 键和值一样时，可以直接写一个state
    actions: actions,
    mutations: mutations
})