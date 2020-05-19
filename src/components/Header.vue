<template>
    <div class="header">
        <h2 class="header__title">Cocktail DB</h2>
        <img src="@/assets/icons/cocktail.png" alt="cocktail image">
    </div>
</template>

<script>
    export default {
        name: "Header"
    };
</script>

<style scoped>
    .header {
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0px 5px 8px 0px rgba(0,0,0,0.30);
    }
    .header__title {
        color: orange;
        font-family: 'Seaweed Script Pro';
        font-size: 30px;
        letter-spacing: 10px;
    }
</style>