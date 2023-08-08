import { defineStore } from "pinia";

//the first argument is a unique id for the store across your application
export const useMainStore = defineStore("main", {
  // a function that returns a fresh state
  state: () => {
    return {};
  },
  // optional getters
  getters: {},
  // optional actions
  actions: {},
});
