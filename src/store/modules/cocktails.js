import axios from 'axios'
import logger from "vuex/dist/logger";

export default {

    state() {
        return {
            cocktails: []
        }
    },
    actions: {
        async fetchCocktails({commit}, filters = []) {
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=';
            const cocktails = [];
            Promise.all(
                filters.map(async filter => {
                    const cocktailsByCategory = await axios
                        .get(url + filter.strCategory);
                    cocktails.push({category: filter.strCategory, cocktails: cocktailsByCategory.data.drinks})
                })
            )
                .then(() => commit('updateCocktails', cocktails))
                .catch(e => console.log(e))
        }
    },
    mutations: {
        updateCocktails(state, cocktails) {
            state.cocktails = cocktails;
        }
    },
    getters: {
        cocktails(state) {
            return state.cocktails
        }
    }
}