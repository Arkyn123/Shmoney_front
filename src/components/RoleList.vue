<template lang="">
  <div>
    <button @click="getAll()">Получить всех</button>
    <table>
      <tr>
        <th>ID</th>
        <th>Название</th>
        <th>Описание</th>
      </tr>
      <tr v-for="(role, index) in roles" :key="index">
        <td>{{ role.id }}</td>
        <td>{{ role.name }}</td>
        <td>{{ role.description }}</td>
      </tr>
    </table>
  </div>
</template>
<script>
import { api } from "../main";

export default {
  data() {
    return {
      roles: [],
    };
  },
  methods: {
    async getAll() {
      try {
        const roles = await api.get(`/roles`);
        console.log(roles);
        this.roles = roles.data;
      } catch (e) {
        console.warn(e);
      }
    },
  },
};
</script>
<style lang=""></style>
