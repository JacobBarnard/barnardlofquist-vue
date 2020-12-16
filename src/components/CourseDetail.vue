<template>
    <div>
        <div class="card">
            <div class="card-body">
                <h2 class="text-primary">{{course.CourseTitle}}</h2>
                <br/>
                <p>Professor: <br/> <strong>{{course.Professor}}</strong></p>
                <p>Department: <br/> <strong>{{course.DepartmentName}}</strong></p>
            </div>
        </div>

        <br/>

        <router-link v-if="auth" :to="`/courses/${this.$route.params.pk}/assignment`"><button type="button" class="btn btn-success">Add Assignment</button></router-link>

        <router-link v-else :to="`/signin`"><button type="button" class="btn btn-outline-success">Sign in to Add Assignment</button></router-link>

        <br/>
        <br/>
        <router-view></router-view>

    </div>
</template>


<script>

export default {
     computed:{
        course(){
            var courses = this.$store.state.courses;
            var thisCourse = courses.find((aCourse)=> aCourse.CourseIDPK == this.$route.params.pk)

            return thisCourse
        },
        // formattedBudget(){
        //     return new Intl.NumberFormat("en-US",{
        //         style: 'currency',
        //         currency: 'USD'
        //     }).format(this.movie.Budget)
        // },
        auth(){
            return this.$store.state.token
        }
    }
  
}
</script>

<style scoped>

</style>