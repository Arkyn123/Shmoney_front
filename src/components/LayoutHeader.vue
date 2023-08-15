<template lang="">
  <header>
    <nav>
      <MyButton @click="$router.push('/')">Главная</MyButton>
      <MyButton @click="$router.push('/services')">Услуги</MyButton>
      <MyButton @click="$router.push('/orders')">Мои заказы</MyButton>
      <MyButton v-if="admin" @click="$router.push('/admin')"
        >Администратор</MyButton
      >
      <MyButton v-if="employee" @click="$router.push('/employee')"
        >Сотрудник студии</MyButton
      >
    </nav>
    <div class="header-title">
      <h1 class="line">SHMONEY</h1>
      <h1 class="line">SOUND</h1>
    </div>
  </header>
</template>
<script>
import MyButton from "@/components/UI/Button";

export default {
  components: {
    MyButton,
  },

  data() {
    return {
      admin: false,
      employee: false,
    };
  },

  async beforeMount() {
    try {
      const id = 1;
      const response = await this.api.get(`/users/${id}`);
      const role = response.data.role;
      if (role == "admin") this.admin = true;
      if (role == "employee") this.employee = true;

      console.log(response.data);
    } catch (e) {
      console.error(e);
    }
  },
};
</script>
<style>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #333;
  color: #fff;
  text-align: center;
}

.header-title {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.line {
  margin: 0;
}
</style>
