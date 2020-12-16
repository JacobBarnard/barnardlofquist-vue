<template>
     <div class="row justify-content-center">
         <div class="col-lg-10">
             <div class="card">
                 <div class="card-body">
                     <h4>Create an Assignment</h4> 
                     <form id="review-form" @submit.prevent="submitAssignment">
                        <div class="form-group">
                             <label for="gradeinput">Grade</label> 
                             <select name="grade" id="gradeinput" v-model="grade">
                                 <option value="A"> A </option>
                                 <option value="B"> B </option>
                                 <option value="C"> C </option>
                                 <option value="D"> D </option>
                                 <option value="F"> F </option>
                             </select>
                         

                        </div> 
                        <div class="form-group">
                            <label for="summaryinput">Assignment Summary</label> <textarea row="3" id="summaryinput" name="summary" required="required" class="form-control" v-model="summary"></textarea>
                        </div> 
                        <div class="form-group">
                            <label for="improvementinput">Improvements</label> <textarea row="3" id="improvementinput" name="improvement" required="required" class="form-control" v-model="improvements"></textarea>
                        </div> 
                        
                        <button type="submit" class="btn btn-primary">Submit Assignment</button> 
                        
                        <button v-on:click="cancelAssignment" type="clear" class="btn btn-outline-danger">
                        Cancel
                        </button>

                        <p v-if="errorMessage" class="form-text text-danger">{{errorMessage}}</p>
                    </form>
                </div>
        </div>
        </div>
        </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return{
            grade: "",
            summary:"",
            improvements:"",
            errorMessage: null,
        }
    },
    methods: {
        submitAssignment(){
            const myAssignment = {
                grade: this.grade,
                summary: this.summary,
                improvements: this.improvements,
                courseIDFK: this.$route.params.pk
            };
            // console.log(myReview)
            const token = this.$store.state.token;
            axios.post("/assignment", myAssignment, {
                headers:{
                    Authorization: `Bearer ${token}`
                }
            }).then(()=> {
                this.$router.replace('/account')
            }).catch(()=>{
                this.errorMessage = "Unable to create a review, please try again later"
            })

        },
        
        cancelAssignment(){
            this.$router.go(-1)
        }
    }
}
</script>

<style scoped>

</style>