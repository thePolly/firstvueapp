<template>
  <div>
  <input :value="modelValue" @input="updateInput" class="input" type="text" placeholder="Search" />
</div>
</template>

<script>
export default {
  name: "the-input",
  props: {
    modelValue: [String, Number],
  },
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style scoped>
.input {
  margin:  10px 50px;
  width: 300px;
  border: 1px solid plum;
  padding: 10px 10px;
  border-radius: 5px;

}


</style>
