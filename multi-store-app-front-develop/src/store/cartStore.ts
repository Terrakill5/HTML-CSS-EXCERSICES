import { defineStore } from 'pinia';

const useCartStore = defineStore('cartStore', {
    state: () => ({
        items: []
    }),
    getters: {
        itemsCount: (state) => state.items.length
    }
});

export {
    useCartStore
};
