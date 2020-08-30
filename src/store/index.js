import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  cartList: []
}

const store = new Vuex.Store({
  state,
  mutations: {
    addCart (state, payload) {
      let item = state.cartList.find(item => item.id === payload.id);
      if (item) {
        item.count++;
      } else {
        payload.count = 1;
        state.cartList.push(payload);
      }
    }
  }
})

export default store;