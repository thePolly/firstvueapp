
//v-model="post.title" == v-bind="post.title" @input="post.title = $event.target.value"
<template>
    <div>
      <form @submit.prevent>
        <the-input  placeholder="Name" v-model="post.title"/>
        <the-input  placeholder="Text" v-model = "post.body"/>
        <the-button  class = "btn_create" @click = "createPost">Create</the-button>
      </form>
    </div>
    </template>
    
    <script>



    export default {

        data(){
     
            return {
                post: {
                    title: '',
                    body: '',
                }
            }
        },
    
    methods: {
        createPost() {
        this.post.id =  Date.now();
        this.$emit('create', this.post);
        this.post = {
          title: '',
          body: ''
        }
      }
    }
}
    </script>
    
    
    <style scoped>
    
    
    form{
      display: flex;
      flex-direction: column;
    }
 
    .btn_create {
      align-self: flex-end;
    }
    </style>