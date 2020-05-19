<template>
    <div class="content-wrapper">
        <div
                class="section"
                v-for="(cocktailsByCategory, index) in paginate"
                :key="index"
        >
            <h3 class="cocktail-category">{{cocktailsByCategory.category}}</h3>
            <div class="divider"></div>
            <div class=" cards">
                <div
                        class="cards__item"
                        v-for="cocktail in cocktailsByCategory.cocktails"
                        :key="cocktail.idDrink"
                >
                    <div class="cards__image">
                        <img :src="cocktail.strDrinkThumb" alt="cocktail image">
                    </div>
                    <p class="cards__title">{{cocktail.strDrink}}</p>
                </div>
            </div>
        </div>
        <ul class="pagination">
            <li :class="curPage === 1 ? 'disabled' : 'waves-effect'">
                <a href="#app" @click="--curPage"><i class="material-icons">chevron_left</i></a>
            </li>

            <li
                    v-for="page in allPages"
                    :class="curPage === page ? 'active' : 'waves-effect'"
            >
                <a href="#app" @click="curPage = page">
                    {{page}}
                </a>
            </li>
            <li :class="curPage === allPages ? 'disabled' : 'waves-effect'">
                <a @click="++curPage" href="#app"><i class="material-icons">chevron_right</i></a>
            </li>
        </ul>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: "Content",
        data()  {
            return {
                maxItemsInContent: 50,
                curPage: 1
            }
        },
        computed: {
            ...mapGetters(['cocktails', 'selectedFilters']),
            selectedCocktails() {
                if (this.selectedFilters.length === 0) {
                    return this.cocktails
                }
                return this.cocktails.filter(item =>{
                    return this.selectedFilters.includes(item.category)
                });
            },
            allItems() {
                let items = 0;
                this.selectedCocktails.forEach(cocktailsByCategory => {
                    items += cocktailsByCategory.cocktails.length
                });
                return items
            },
            allPages() {
                return Math.ceil(this.allItems / this.maxItemsInContent) || 1
            },
            paginate() {
                const arr = JSON.parse(JSON.stringify(this.selectedCocktails));
                const curPage = this.curPage;
                const maxItems = this.maxItemsInContent;
                const from = curPage * maxItems - maxItems;
                const outputArr = [];
                let restItems = maxItems;
                let temp = 0;

                for (let i = 0; i < arr.length; i++) {
                    const length = arr[i].cocktails.length + temp;

                    if (length <= from) {
                        temp = length;
                        continue
                    }

                    const start = arr[i].cocktails.length - (length - from) <= 0 ? 0 : arr[i].cocktails.length - (length - from);

                    const end = arr[i].cocktails.length - start;
                    if (end < restItems) {
                        outputArr.push({
                            category: arr[i].category,
                            cocktails: arr[i].cocktails.splice(start)
                        });
                        restItems -= outputArr[outputArr.length - 1].cocktails.length;
                        temp = length
                    } else {
                        outputArr.push({
                            category: arr[i].category,
                            cocktails: arr[i].cocktails.splice(start, restItems)
                        });
                        break
                    }
                }
                return outputArr
            }
        }
    };
</script>

<style scoped>
    .content-wrapper {
        padding: 0 0 0 45px;
        width: 100%;
    }
    .divider {
        margin-bottom: 25px;
    }
    .cocktail-category {
        text-align: left;
        color: #9f9f9f;
    }
    .cards {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        column-gap: 25px;
        row-gap: 25px;
    }
    .cards__item {
        width: 150px;
    }
    .cards__image{
        position: relative;
        width: 150px;
        height: 150px;
    }
    .cards__image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
        top: 0;
        left: 0;
    }
    .cards__title {
        font-size: 20px;
        font-weight: 600;
    }
    .disabled {
        pointer-events: none!important;
    }
    @media screen and (max-width: 1300px) {
        .cards {
            grid-template-columns: repeat(4, 1fr);
            column-gap: 20px;
            row-gap: 20px;
        }
    }
    @media screen and (max-width: 1100px) {
        .cards {
            grid-template-columns: repeat(3, 1fr);
        }
        .content-wrapper {
            padding: 0 0 0 35px;
        }
    }
    @media screen and (max-width: 880px) {
        .content-wrapper {
            padding: 0 0 0 20px;
        }
    }
    @media screen and (max-width: 800px) {
        .cards {
            grid-template-columns: repeat(2, 1fr);
        }
    }
</style>