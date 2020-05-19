<template>
    <div id='app'>
        <Header/>
        <main class='main'>
            <Filters/>
            <Content/>
        </main>
    </div>
</template>

<script>
    import Header from './components/Header';
    import Filters from './components/Filters';
    import Content from './components/Content';
    import {mapActions} from 'vuex'

    export default {
        name: 'App',
        components: {Header, Content, Filters},
        created() {
            this.fetchData();
        },
        methods: {
            ...mapActions(['fetchCocktails', 'fetchFilters']),
            async fetchData() {
                const filters = await this.fetchFilters();
                this.fetchCocktails(filters);
            }
        }
    };
</script>

<style>
    @import "./assets/fonts/fonts.css";
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    #app {
        font-family: 'CorporateS', Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        display: flex;
        flex-direction: column;

    }

    .main {
        display: flex;
        flex-direction: row;
    }
</style>
