import { defineStore } from 'pinia';

export const useLoginStore = defineStore('login', {
  state: () => ({
    isLoggedIn: false,
    userName: ''
  }),
  getters: {
    getIsLoggedIn: (state) => state.isLoggedIn,
    getUserName: (state) => state.userName
  },
  actions: {
    setIsLoggedIn(value) {
      this.isLoggedIn = value;
    },
    setUserName(name) {
      this.userName = name;
    }
  }
});

export const usePanierStore = defineStore('panier', {
    state: () => ({
        panier: []
    }),
    getters: {
        getPanier: (state) => state.panier
    },
    actions: {
        addToPanier(item) {
        this.panier.push(item);
        },
        removeFromPanier(index) {
        this.panier.splice(index, 1);
        }
    }
});