<script >
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";

import { toHandlers } from 'vue';

export default {
  components: {
    PostForm,
    PostList
  },
  data(){
    return {
 posts: [
  { id: 1, title: 'JavaScript', body: 'Text 1 text about javascript'},
  { id: 2, title: 'Java', body: 'Text 1222 text about javascript'},
  { id: 3, title: 'HTML', body: 'Text 1333 text about javascript'}
]

    }
  },

  methods:{
    createPost(post) {
        this.posts.push(post);
    }

  }
}

</script>
//v-bind:posts == :posts
//props should be modified before sending to child container
<template>
 <post-form
 @create = "createPost"
 />

<post-list 
:posts="posts"

/>

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
