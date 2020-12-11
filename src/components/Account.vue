<template>
    <div>
        <h1> Home </h1>
        <hr/>
        <h3> {{firstName}}'s Assignments</h3>

        <p v-if="accountError" class="form-text text-danger">Can not get your account information, please try again later</p>
        <table v-if="assignmentsByUser" class="table">
            <thead>
                <th>Assignment Number</th>
                <th>Grade</th>
                <th>Summary</th>
                <th>Improvements</th>
            </thead>
            <tbody>
                <tr v-for="thisAssignment in assignmentsByUser" :key="thisAssignment.AssignmentIDPK">
                    <th><router-link :to="`/courses/${thisAssignment.CourseIDFK}`">{{thisAssignment.AssignmentIDPK}}</router-link></th>
                    <th>{{thisAssignment.Grade}}</th>
                    <th>{{thisAssignment.Summary}}</th>
                    <th>{{thisAssignment.Improvements}}</th>
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
            assignmentsByUser: null,
            accountError: false
        }
    },
    computed: {
        firstName(){

            return this.$store.state.user.Name
            // firstName = this.$store.state.user.StudentIDPK
            // console.log(this.firstName)
            // return this.firstName
        }
    },
    created(){
        axios.get("/assignment/records", {
            headers: {
                Authorization: `Bearer ${this.$store.state.token}`
            }
        }).then((response)=>{
            console.log("here is the reviews /me response: ", response)
            this.assignmentsByUser = response.data
        })
        .catch(()=> {
            this.accountError = true
        })
    }
}
</script>

<style scoped>

</style>