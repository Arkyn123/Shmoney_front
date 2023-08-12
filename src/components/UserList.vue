<template lang="">
  <div>
    <button @click="getAll()">Получить всех</button>
    <table>
      <tr>
        <th>Имя</th>
        <th>Фамилия</th>
        <th>Номер телефона</th>
        <th>Заказы</th>
        <th>Рейтинг</th>
      </tr>
      <tr v-for="(user, index) in users" :key="index">
        <td>{{ user.name }}</td>
        <td>{{ user.surname }}</td>
        <td>{{ user.phone }}</td>
        <td>{{ user.orders }}</td>
        <td>{{ user.rating }}</td>
      </tr>
    </table>
  </div>
</template>
<script>
import { api } from "../main";
export default {
  methods: {
    async getData() {
      try {
      } catch (e) {
        console.warn(e);
      }
    },
  },
};
</script>
<style lang=""></style>
