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
      pageNumber: 1,
      postNumber: 10,
      totalPageNumber: 0,
      searchQuery: '',
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
    changePage(newPage) {
      this.pageNumber = newPage;
    },
    async fetchPosts() {
      try {
        this.arePostsLoading = true;
        setTimeout(async () => {
          const response = await axios.get(
            "https://jsonplaceholder.typicode.com/posts", {
            params: {
              _page: this.pageNumber,
              _limit: this.postNumber,
              
            }
          }
          );
          console.log(response);
          this.totalPageNumber = Math.ceil(response.headers['x-total-count'] / this.postNumber);
          console.log(this.postNumber )
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
    pageNumber(newPage) {
        this.fetchPosts();
    }
  },
  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2) =>
        post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
      );
    },
    sortedAndFilteredPosts() {
      return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()));
    }
  },
};
</script>

//v-bind:posts == :posts //props should be modified before sending to child
container
<template>
  <div>
    <h1></h1>
    <the-input v-model="searchQuery" placeholder = "..."/>
    <div class="control_container">
      <the-button @click="showPost"> Create Post </the-button>
      <sorting-select v-model="selectedSort" :sortOptions="sortOptions" />
    </div>

    <the-dialog v-model:show="dialogVisible">
      <post-form @create="createPost" />
    </the-dialog>



    <post-list :posts="sortedAndFilteredPosts" @remove="removePost" v-if="!arePostsLoading" />
    <div v-if="arePostsLoading">Loading...</div>

    <the-page :currentPage = "pageNumber" @change = "changePage" :total = "totalPageNumber"></the-page>
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
