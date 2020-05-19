import axios from 'axios'
import logger from "vuex/dist/logger";

export default {

    state() {
        return {
            filters: [],
            selectedFilters: []
        }
    },
    actions: {
        async fetchFilters(ctx) {
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
            const response = await axios.get(url);
            ctx.commit('updateFilters', response.data.drinks);
            return response.data.drinks
        }
    },
    mutations: {
        updateFilters(state, filters) {
            state.filters = filters
        },
        updateSelectedFilters(state, selectedFilters) {
            state.selectedFilters = selectedFilters
        }
    },
    getters: {
        allFilters(state) {
            return state.filters
        },
        selectedFilters(state) {
            return state.selectedFilters
        }
    }
}

