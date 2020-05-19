<template>
    <div class="filter">
        <ul class="list">
            <li
                    class="list__item"
                    v-for="(filter, index) in allFilters"
                    :key="index"
            >
                <label>
                    <input
                            type="checkbox"
                            v-model="checkedFilters"
                            :value="filter.strCategory"
                    />
                    <span class="filter__title">
                        {{ filter.strCategory}}
                    </span>
                </label>
            </li>
            <a
                    class="waves-effect waves-light btn button"
                    @click="updateSelectedFilters(checkedFilters)"
            >Apply</a>
        </ul>

    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import {mapMutations} from 'vuex'

    export default {
        name: "Filters",
        data() {
            return {
                checkedFilters: []
            }
        },
        computed: {
            ...mapGetters(['allFilters'])
        },
        methods: {
            ...mapMutations(['updateSelectedFilters'])
        }
    };
</script>

<style scoped>
    .filter {
        max-width: 400px;
        padding: 10px;
        color: #818181!important;
        border-right: 1px solid #acacac;
    }
    .list {
        width: 100%;
        list-style: none;
        padding: 20px 20px 20px 40px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
    .list__item {
        margin: 0 0 10px;
        text-align: left;
        white-space: nowrap;
    }
    .button {
        width: 100%;
        height: 40px;
        font-size: 20px!important;
        font-weight: 600;
        background-color: #4e4e4e!important;
        border-radius: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .filter__title {
        font-size: 20px!important;
        padding-left: 30px!important;
    }
    .filter__title:before {
        border-radius: 4px!important;
        border-color: #acacac!important;
    }

    @media screen and (max-width: 880px) {
        .list {
            padding: 15px 15px 15px 20px;
        }
        .filter__title {
            font-size: 15px!important;
            padding-left: 30px!important;
        }
    }
</style>