

<template>
<div v-if="posts.length > 0">
  <h2>List of Posts</h2>
  <transition-group name = "post-list">

    <post-item 
  v-for="post in posts"
  :post="post"
  :key="post.id"
  @remove = "$emit('remove', post)"
  />
    
  </transition-group>

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

.post-list-move,
.post-list-enter-active,
.post-list-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

/* 2. declare enter from and leave to state */
.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: scaleY(0.01) translate(30px, 0);
}

/* 3. ensure leaving items are taken out of layout flow so that moving
      animations can be calculated correctly. */
.post-list-leave-active {
  position: absolute;
}

</style>