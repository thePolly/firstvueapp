

<template>
<div v-if="posts.length > 0">
  <h2>List of Posts</h2>
  <post-item 
  v-for="post in posts"
  :post="post"
  :key="post.id"
  @remove = "$emit('remove', post)"
  />
</div>
<h2 v-else>List of posts if empty</h2>

</template>

<script>
import PostItem from "@/components/PostItem.vue";
    export default {
      components: {PostItem},
        props: {
            posts: {
                type: Array,
                required: true,
            }
        }
    }

</script>


<style>
h2{
  text-align :center;
}

</style>