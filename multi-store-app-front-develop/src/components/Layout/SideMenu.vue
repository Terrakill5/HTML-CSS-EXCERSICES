<template>
    <div class="bg-slate-700 w-1/3 md:w-72 h-screen p-5">
        <h3 class="text-2xl font-bold">Menu</h3>

        <menu-list>
            <menu-item>
                <router-link to="/">Home</router-link>
            </menu-item>
            <menu-item>
                <router-link to="/about">About</router-link>
            </menu-item>
        </menu-list>
    </div>
</template>

<script lang="ts" setup>
import MenuItem from '@/components/Layout/menus/MenuItem.vue';
import MenuList from '@/components/Layout/menus/MenuList.vue';
</script>

<style scoped>

</style>
