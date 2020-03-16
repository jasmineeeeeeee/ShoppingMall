import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login/login'//@----->会自动找到src文件夹
import Home from '@/components/home/home'




Vue.use(Router)

const router = new Router({
  routes: [
    {
      path:'/',
      redirect:'/login'
    },
    {
      path:'/home',
      name:'home',
      component:Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
});

//路由导航守卫
router.beforeEach((to,from,next) =>{
  if(to.path === '/login') return next();
  const tokenStr = window.sessionStorage.getItem('token');
  if(!tokenStr) return next('/login');
  else return next();
});

export default router;
