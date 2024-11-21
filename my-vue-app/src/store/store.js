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
