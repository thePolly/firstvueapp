<template>
   <div class="post">
   <div>
    <div>
      <strong>Name:</strong> {{post.title}}
    </div>
    <div>
      <strong>Desk:</strong> {{ post.body }}
    </div>
    </div>

   <div class = "post__btns"
   @click="$emit('remove', post)"
   >
    <the-button> Delete </the-button>
   </div>
   </div>

</template>

<script>
    export default {
        props: {
            post: {
                type: Object,
                requiered: true,
            }

        }
    }
</script>

<style>

.post {
  padding: 15px;
  border: 2px solid pink;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>