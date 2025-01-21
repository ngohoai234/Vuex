import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const store = createStore({
  state() {
    return {
      counter: 0,
    };
  },
  mutations: {
    increment(state, payload) {
      state.counter += payload.value;
    },
  },
  actions: {
    increment(context, payload) {
      setTimeout(() => {
        context.commit('increment', payload);
      }, 1000);
    },
  },
  getters: {
    finalCounter(state) {
      return state.counter * 2;
    },
  },
});

const app = createApp(App);

app.use(store);

app.mount('#app');
