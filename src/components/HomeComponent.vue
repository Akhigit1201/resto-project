<template>
<h1> <HeaderFile />
<h1 class="style">Hello {{name}}, Welcome to Home Page</h1>
</h1>
 

    
</template>

<script>
import HeaderFile from './HeaderFile.vue'

export default {
    name:'HomeComponent',
    data(){
       return{
        name:''
       }

    },
    components:{
      HeaderFile
    },
    mounted()
    {
        let user=localStorage.getItem('User-info');
        this.name=JSON.parse(user).name;
        if(!user)
        {
          this.$router.push({name:'SignUp'}) 
            
        }
    }
}
</script>
<style >
  .style{
     padding: 20px 24px;
     color: blue;
     font-size: 30px;
     text-align: center;
   }

</style>
