<template>
    <div>
        <h1>Courses</h1>
        <hr/>
        <table class="table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Professor</th>
                    <th>Department</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="thisCourse in courses" :key="thisCourse.CourseIDPK">
                    <th>{{thisCourse.CourseTitle}}</th>
                    <td>{{thisCourse.Professor}}</td>
                    <td>{{thisCourse.DepartmentName}}</td>
                    <td><router-link :to="`/courses/${thisCourse.CourseIDPK}`">
                        <button @click="findCourses" type="button" class="btn btn-primary">Details</button></router-link></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data(){
        return {
            courses : null,
            courseError: false
        }
    },
    created(){
    axios.get("/course")
        .then((response)=>{
        console.log("here is the /course response: ", response.data)
        this.courses = response.data
    })
    .catch(()=> {
        this.courseError = true
    })
    },
    methods:{
      findCourses(){
        this.$store.dispatch("getCourses")
      }
    }
}
</script>

<style scoped>

</style>