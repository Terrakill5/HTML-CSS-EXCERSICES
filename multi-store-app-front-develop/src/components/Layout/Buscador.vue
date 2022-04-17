
<script lang="ts" setup>
import { ref } from 'vue';
const search = ref('');
</script>

<template>
    <div class="wrapper">
        <div class="search-input">
            <input type="text" placeholder="Buscar..." v-model="search">
            <div class="autocom-box">   </div>
            <button @click="buscador">Buscar</button>
        </div>
    </div>
</template>

<style scoped>
button {
    background-color: azure;
    color: black;
    padding: 2px;
}

input {
    color: black;
}
</style>
