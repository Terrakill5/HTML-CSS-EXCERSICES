import { defineStore } from 'pinia';

const useUserStore = defineStore('userStore', {
    state: () => ({
        username: 'jose27duran08',
        user: null,
        token: ''
    }),
    getters: {
        isLoggedIn: (state) => state.username + '1'
    },
    actions: {
        changeName () {
            this.username = 'jdguitar27';
        }
    }
});

export {
    useUserStore
};
