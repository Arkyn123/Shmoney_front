<template>
  <button class="my-button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "MyButton",
};
</script>

<style scoped>
.my-button {
  margin-right: 30px;
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
