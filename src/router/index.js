import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/components/Index';
import Home from '@/components/Home';
import About from '@/components/About';
import ThumbnailDetail from '@/components/image/ThumbnailDetail';

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      redirect: '/home',
      children: [
        {
          path: '/home',
          name: 'Home',
          component: Home,
          children: [

          ],
        },
        {
          path: '/about',
          name: 'About',
          component: About
        },

      ]
    },
    {
      path: '/image/resolution',
      name: 'ThumbnailDetail',
      component: ThumbnailDetail
    },
  ]
})
