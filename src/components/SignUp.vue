<template>
    <div>
        <h1> Sign Up </h1>
        <div class="login">
            <input type="text" v-model="name" placeholder="Enter Name" />
            <input type="text" v-model="email" placeholder="Enter Email" />
            <input type="password" v-model="password" placeholder="Enter Password" />
            <button v-on:click="signUp"> Sign Up </button>
            <p> 
                <router-link to="/login" > LoginPage </router-link>
            </p>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default{
    name: "SignUp",
    data()
    {
         
         return{

            name:'',
            email:'',
            password:''
         }
    },
    methods:{
        async signUp(){
            let result=await axios.post("http://localhost:3000/user",{
                email:this.email,
                password:this.password,
                name:this.name
            });
           console.warn(result); 
           if(result.status==201)
           {
            
            localStorage.setItem("User-info",JSON.stringify(result.data));
            this.$router.push({name:'HomeComponent'})
           }
        }
    },
    mounted()
    {
        let user=localStorage.getItem('User-info');
        if(user)
        {
          this.$router.push({name:'HomeComponent'})   
        }
    }
}

</script>

<style>



</style>
