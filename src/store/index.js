import Vue from "vue";
import Vuex from 'vuex';
import filters from './modules/filters'
import cocktails from './modules/cocktails'
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        filters,
        cocktails
    }
})