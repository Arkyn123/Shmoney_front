<template>
  <MyButton @click="$router.push('/')">Главная</MyButton>
  <MyButton @click="$router.push('/services')">Прайс-лист</MyButton>
  <MyButton @click="handleButtonClick">Мои заказы</MyButton>
</template>

<script>
import MyButton from "@/UI/Button";

export default {
  components: {
    MyButton,
  },
  methods: {
    async handleClick() {
      try {
        const response = await this.api.get("/roles");
        console.log(response.data);
      } catch (e) {
        console.error(e);
      }
    },
  },
  name: "Main",
};
</script>
