<script>
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import axios from "axios";

export default {
  components: {
    PostForm,
    PostList,
  },

  data() {
    return {
      posts: [],
      dialogVisible: false,
      arePostsLoading: false,
      selectedSort: '',
      sortOptions: [
        { value: "title", name: "By Title" },
        { value: "desc", name: "By Description" },
      ],
    };
  },

  methods: {
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter((p) => p.id !== post.id);
    },
    showPost() {
      this.dialogVisible = true;
    },
    async fetchPosts() {
      try {
        this.arePostsLoading = true;
        setTimeout(async () => {
          const response = await axios.get(
            "https://jsonplaceholder.typicode.com/posts?_limit=10"
          );
          console.log(response);
          this.posts = response.data;
          this.arePostsLoading = false;
        }, 1000);
      } catch (e) {
        alert("An error occurred during loading posts.");
      } finally {
        this.arePostsLoading = false;
      }
    },
  },

  mounted: function () {
    console.log("mounted");
    this.fetchPosts();
  },
  watch: {
    dialogVisible(newOption) {
      console.log(newOption);
    },
  },
  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2) =>
        post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
      );
    },
  },
};
</script>

//v-bind:posts == :posts //props should be modified before sending to child
container
<template>
  <div>
    <h1>Posts</h1>

    <div class="control_container">
      <the-button @click="showPost"> Create Post </the-button>
      <sorting-select v-show="false" v-model="selectedSort" :options="sortOptions" />
    </div>

    <the-dialog v-model:show="dialogVisible">
      <post-form @create="createPost" />
    </the-dialog>

    <post-list :posts="posts" @remove="removePost" v-if="!arePostsLoading" />
    <div v-if="arePostsLoading">Loading...</div>
  </div>
</template>

//scoped is used when we want styles to be applied only for current component
<style >


* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

}
html {
  background-color: rgb(229, 218, 220);
}

.app {

  padding: 20px;

}

.control_container {
  margin: 20px 50px;
  display: flex;
  justify-content: space-between;
}
</style>
