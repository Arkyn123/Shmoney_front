<template lang="">
  <div>
    <input type="text" placeholder="Название" v-model="name" />
    <input type="text" placeholder="Описание" v-model="description" />
    <button @click="postData()">Создать</button>
  </div>
</template>
<script>
import { api } from "../main";

export default {
  data() {
    return {
      name: "",
      description: "",
    };
  },
  methods: {
    async postData() {
      try {
        const role = {
          name: this.name,
          description: this.description,
        };
        console.log(role);
        this.name = "";
        this.description = "";
        await api.post(`/roles/create`, role);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
<style lang=""></style>
