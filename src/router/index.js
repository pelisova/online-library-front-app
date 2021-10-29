import {createRouter, createWebHistory} from 'vue-router';
import About from '../views/About';
import Registration from '../views/Registration';
import Home from '../views/Home';
import LogIn from '../views/LogIn'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
    {
        path: '/signUp',
        name: 'Registration',
        component: Registration,
    },
    {
        path: '/login',
        name: 'LogIn',
        component: LogIn,
    },
    
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

router.beforeEach((to, from, next) => {
    const publicPages = ['/login', '/signUp', '/', '/about'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem('library_token');
  
    // trying to access a restricted page + not logged in
    // redirect to login page
    if (authRequired && !loggedIn) {
      next('/login');
    } else {
      next();
    }
  });

export default router