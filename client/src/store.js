import Vue from 'vue';
import Vuex from 'vuex';

import videos from './videos';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    video: null
  },
  mutations: {
    setVideo(state, video) {
      state.video = video;
    }
  },
  actions: {
    setRandomVideo({ commit }, category) {
      let video_list = videos[category];
      let video = video_list[Math.floor(Math.random() * video_list.length)];
      commit('setVideo', video);
    }
  }
});

export default store;
