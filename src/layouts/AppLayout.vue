<template>
  <div class="app-layout">
    <header class="header-container">
      <nav><router-view></router-view></nav>
      <div class="header-title">
        <h1 class="line">SHMONEY</h1>
        <h1 class="line">SOUND</h1>
      </div>
    </header>
    <main></main>
    <footer>
      <p>&copy; 2023 Shmoney Sound. Все права защищены.</p>
    </footer>
  </div>
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
  name: "AppLayout",
};
</script>

<style>
#app {
  height: 100%;
}

.header-container {
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
}

.line {
  margin: 0;
}

.app-layout {
  display: flex;
  flex-direction: column;
  min-height: 100%;
}

html,
body {
  height: 100%;
  margin: 0;
}

footer {
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 10px;
  margin-top: auto;
}

main {
  flex-grow: 1;
}
</style>
