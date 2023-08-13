<template>
  <button class="my-button" @click="handleClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "MyButton",
  methods: {
    handleClick() {
      this.$emit("click");
    },
  },
};
</script>

<style scoped>
.my-button {
  margin-bottom: 20px;
  padding: 10px 20px;
  background-color: #666;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.1s ease;
}

.my-button:hover {
  background-color: #555;
}
</style>
