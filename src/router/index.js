import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MusicHall from '../components/MusicHall.vue'
import PrivateFM from '../components/PrivateFM.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    // name: 'Home',
    component: Home,
    children: [{
      path: '',
      component: MusicHall
    },
    {
      path: 'my',
      component: PrivateFM
    }
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
