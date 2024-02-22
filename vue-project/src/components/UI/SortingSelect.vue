<template>
  <select modelValue="modelValue" @change="changeOptions">
    <option disable value="">Select sorting type</option>
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: "sorting-select",
  props: {
    modelValue: {
      type: String,
    },
  },
  options: {
    type: Array,
    default: () => [],
  },
  methods: {
    changeOptions(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style></style>
