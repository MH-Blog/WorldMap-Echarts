import Vue from 'vue'
import Router from 'vue-router'
import browser from '@/components/browser.vue'
import map from '@/components/map.vue'
import line from '@/components/line.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/browser',
      name: 'browser',
      component: browser
    },
    {
        path: '/map',
        name: 'map',
        component: map
      },
      {
          path: '/line',
          name: 'line',
          component: line
        }
  ]
})
