<template>
  <input :value="modelValue" @input="updateInput" class="input" type="text" />
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
  width: 100%;
  border: 1px solid plum;
  padding: 5px 5px;
  margin-top: 10px;
}
</style>
