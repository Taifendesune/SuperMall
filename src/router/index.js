import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

const Home = () => import('views/home/Home');
const Category = () => import('views/category/Category');
const Cart = () => import('views/cart/Cart');
const Profile = () => import('views/profile/Profile');
const Detail = () => import('views/detail/Detail');


const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    name: 'Home',
    path: '/home',
    component: Home 
  },
  {
    name: 'Category',
    path: '/category',
    component: Category
  },
  {
    name: 'Cart',
    path: '/cart',
    component: Cart
  },
  {
    name: 'Profile',
    path: '/profile',
    component: Profile
  },
  {
    name: 'Detail',
    path: '/detail/:id',
    component: Detail
  }
]

const router = new Router({
  routes,
  mode: 'history'
});

export default router;