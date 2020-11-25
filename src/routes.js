import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import Login from './components/Login.vue';
import SignUp from './components/SignUp.vue';
import NotFound from './components/NotFound.vue';
import Courses from './components/Courses.vue';
import Account from './components/Account.vue';

Vue.use(VueRouter);

const routes = [
    {path: '/', component: Home},
    {path: '/signin', component: Login},
    {path: '/signup', component: SignUp},
    {path: '/courses', component: Courses},
    {path: '/account', component: Account},
    {path: '/:invalidroute(.*)', component: NotFound}


]

export default new VueRouter ({mode: 'history', routes})