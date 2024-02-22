<template>

<button class="btn">

    <slot></slot>
</button>
</template>


<script>
export default{
    name: 'the-button'
}

</script>


<style scoped >
   
    .btn{
  
      padding: 10px;
      font-size: 16px;
      background: none;
      color:rgb(241, 236, 241);
      border: 1px solid plum;
      background-color: rgb(237, 155, 163);
      border-radius: 5px;
      cursor: pointer;
    }

</style>