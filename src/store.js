import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import routes from './routes.js';

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        token: null,
        user: null,
        courses: []
    },
    mutations:{
        storeTokenInApp(state, myToken){
            state.token = myToken
        },
        storeUserInApp(state, myUser){
            state.user = myUser
        },
        storeCourses(state, myCourses){
            state.courses = myCourses
        },
        clearAuthData(state){
            state.token = null;
            state.user = null;
        }
    },
    actions:{
        getCourses({commit}){
            axios.get('/course')
            .then((myResponse)=>{
                console.log("response from getCourse action", myResponse)
                commit('storeCourses', myResponse.data)
            })
            .catch(()=>{console.log("error getting courses")})
        },
        logout({commit, state}){
            axios.post('/student/logout', null, {
                headers:{
                    Authorization: `Bearer ${state.token}` 
                }
            })

            commit('clearAuthData');

            routes.replace("/");
        }
    }
})