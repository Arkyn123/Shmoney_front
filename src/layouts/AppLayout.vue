<template>
  <div class="app-layout">
    <header>
      <h1>SHMONEY SOUND</h1>
      <nav><my-button @click="handleButtonClick">Нажми меня</my-button></nav>
    </header>
    <main></main>
    <footer>
      <p>&copy; 2023 Студия звукозаписи. Все права защищены.</p>
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
    handleButtonClick() {
      alert("Кнопка нажата!");
    },
  },

  name: "AppLayout",
};
</script>

<style>
#app {
  height: 100%;
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

header,
footer {
  background-color: #333;
  color: #fff;
  text-align: center;
}

main {
  flex-grow: 1;
}
</style>
