<template>
    <div class="nav">
        <a v-on:click="logout" href="#"> Logout</a> 
        <router-link to="/update">Update Restaurant</router-link>  
        <router-link to="/add">Add Restaurant</router-link>   
        <a href="#">Home</a>  
     </div>
</template>

<script>
export default {
    name:'HeaderFile',
    methods:{
        logout(){
            localStorage.clear();
            this.$router.push({name:"LoginPage"})
        }
    }
}
</script>

<style>

.nav{
    background-color: #333;
    overflow: hidden;
}
.nav a {
    float: right;
    color: white;
    padding: 14px 16px;
    text-align: center;
    font-size: 17px;
    text-decoration: none;
    margin-right: 5px;

}

.nav a:hover{
    background: whitesmoke;
    color:black

}
</style>