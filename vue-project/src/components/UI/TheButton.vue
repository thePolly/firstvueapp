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
      background: none;
      color:purple;
      border: 1px solid plum;
      cursor: pointer;
    }

</style>