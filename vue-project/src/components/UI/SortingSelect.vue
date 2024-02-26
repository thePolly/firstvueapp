<template>
  <select :value="modelValue" @change="changeOption">
    <option disabled value="">Choose</option>
    <option
      v-for="option in sortOptions"
      :key="option.value"
      :value="option.value"
    >
      {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'sorting-select',
  props: {
    // Corrected the props definition
    modelValue: {
      type: String, // or the appropriate type for your use case
      required: true
    }},
    sortOptions: {
      type: Array,
      default: () => []
    
  },
  methods: {
    changeOption(event) {
      this.$emit('update:modelValue', event.target.value);
    }
  }
}
</script>

<style scoped>
select {
  width: 100px;
}
  </style>