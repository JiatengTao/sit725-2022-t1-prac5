import { createRouter, createWebHistory } from 'vue-router'
import HouseHold from '../views/HouseHold.vue'
import LogIn from '../views/LogIn.vue'
import SignUp from '../views/SignUp.vue'

const routes = [
  {
    path:'/signup',
    name:'SignUp',
    component: SignUp,
    meta:{
      isLogin: false
    }
  },
  {
    path: '/',
    name: 'LogIn',
    component: LogIn,
    meta:{
      isLogin: false
    }
  },
  {
    path: '/household',
    name: 'HouseHold',
    component: HouseHold,
    meta:{
      isLogin: true
    }
  },
  {
    path: '/groups',
    name: 'Groups',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Groups.vue'),
    meta:{
      isLogin: true
    }
  },
  {
    path: '/friends',
    name: 'Friends',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Friends.vue'),
    meta:{
      isLogin: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) => {
  if (to.meta.isLogin) {   //If the page needs to log in
  if (sessionStorage.getItem('token')) {   //If user already login, go next
   next();
   
  } else { //If user haven't login, go to log in page
   alert("Log in first!")
   console.log('Log in first!');  
   next('/');
  }
  } 
  else {       //If the page don't need log in
  if (sessionStorage.getItem('token')){ //If user already login, go to homepage
    next('/household')
    console.log('Log in alreay')
  }
  else{ //If user haven't login, go next
    next()
  }
  }
 });

export default router
