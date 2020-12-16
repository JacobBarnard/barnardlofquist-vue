import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import Login from './components/Login.vue';
import Signup from './components/Signup.vue';
import NotFound from './components/NotFound.vue';
import Courses from './components/Courses.vue';
import Account from './components/Account.vue';
import CourseDetail from './components/CourseDetail.vue';
import CreateAssignment from './components/CreateAssignment.vue';

Vue.use(VueRouter);

const routes = [
    {path: '/', component: Home},
    {path: '/signin', component: Login},
    {path: '/signup', component: Signup},
    {path: '/courses', component: Courses},
    {path: '/account', component: Account},
    {path: '/courses/:pk', component: CourseDetail,
        children: [
            {path: 'assignment', component: CreateAssignment}
        ]},
    {path: '/:invalidroute(.*)', component: NotFound}


]

export default new VueRouter ({mode: 'history', routes})