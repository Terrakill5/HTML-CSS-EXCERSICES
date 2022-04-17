<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <buscador></buscador>
        <button @click="changeName">cambiar nombre</button>
        <div class="space-y-4">
            <div class="w-96 bg-amber-400 shadow rounded">
                w-96
            </div>
            <div class="w-80 bg-amber-400 shadow rounded">
                w-80
            </div>
            <div class="w-72 bg-amber-400 shadow rounded">
                w-72
            </div>
            <div class="w-64 bg-amber-400 shadow rounded">
                w-64
            </div>
            <div class="w-60 bg-amber-400 shadow rounded">
                w-60
            </div>
            <div class="w-56 bg-amber-400 shadow rounded">
                w-56
            </div>
            <div class="w-52 bg-amber-400 shadow rounded">
                w-52
            </div>
            <div class="w-48 bg-amber-400 shadow rounded">
                w-48
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import Buscador from '../components/Layout/Buscador.vue';
import { useUserStore } from '@/store/userStore';
import { computed } from 'vue';

const userStore = useUserStore();
const { changeName } = userStore;
const username = computed(() => userStore.username);
</script>
