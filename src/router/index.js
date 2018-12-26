import Vue from 'vue';
import Router from 'vue-router';

import Video from '../components/Video.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/clip/:category',
      component: Video
    }
  ]
});

export default router;