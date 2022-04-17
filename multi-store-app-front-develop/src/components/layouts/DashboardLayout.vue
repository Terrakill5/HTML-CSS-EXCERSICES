<template>
    <div class="flex">
        <side-menu/>
        <div class="px-5">
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import SideMenu from '@/components/Layout/SideMenu.vue';
</script>

<style scoped>

</style>
