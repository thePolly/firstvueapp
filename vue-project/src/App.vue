<script >
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import axios from 'axios';

export default {

  components: {
    PostForm,
    PostList
  },

  data(){
    return {
      posts: [],
      dialogVisible: false,
    }
  },

  methods:{
    createPost(post) {
        this.posts.push(post);
        this.dialogVisible = false;
    },
    removePost(post){
      this.posts = this.posts.filter(p => p.id !== post.id)
    },
    showPost(){
      this.dialogVisible=true;
    },
    async fetchPosts() {
      try{
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
        console.log(response);
        this.posts = response.data;

      } catch (e) {
        alert('An error occurred during loading posts.');
      }
    }
  },

mounted: function() {
    console.log('mounted');
    this.fetchPosts();
  }
}
</script>


//v-bind:posts == :posts
//props should be modified before sending to child container
<template>
<div>
  <h1>Posts</h1>
  <the-button @click="showPost">
    Create Post
  </the-button>
<the-dialog v-model:show = "dialogVisible">
  <post-form
 @create = "createPost"
 />
</the-dialog>



<post-list 
:posts="posts"
@remove = "removePost"
/>

</div>

</template>


//scoped is used when we want styles to be applied only for current component 
<style scoped>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app{
  padding: 20px;
}




</style>
