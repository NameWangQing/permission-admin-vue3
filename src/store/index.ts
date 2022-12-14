import { createStore } from "vuex";

interface breadType {
  name: string;
}

export default createStore({
  state: {
    breads: [],
    user: sessionStorage.getItem("v-user")
      ? JSON.parse(sessionStorage.getItem("v-user") as string)
      : {},
  },
  mutations: {
    addBread(state, bread:any) {
      const index = state.breads.findIndex(
        (_bread:breadType) => _bread.name === bread.name
      );
      if (index > -1) {
        state.breads.splice(index + 1, state.breads.length - index - 1);
      } else {
        // state.breads.push(bread);
      }
    },
    removeBread(state, bread) {
      state.breads = state.breads.filter((_bread) => _bread !== bread);
    },
    setUser(state, user) {
      state.user = user;
    },
  },
  actions: {},
  modules: {},
});
