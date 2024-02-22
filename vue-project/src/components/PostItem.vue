<template>
   <div class="post">
   <div>
    <div class="post__title">
      {{post.title}}
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
  border: 1px solid #b4b4b4;
  background-color: rgb(250, 248, 249);
  border-radius: 8px;
  margin: 25px 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.post__title {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 30px;

}
</style>