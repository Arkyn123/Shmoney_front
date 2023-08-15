<template>
  <div class="app-layout">
    <layout-header></layout-header>
    <layout-main></layout-main>
    <layout-footer></layout-footer>
  </div>
</template>

<script>
import LayoutFooter from "@/components/LayoutFooter";
import LayoutHeader from "@/components/LayoutHeader";
import LayoutMain from "@/components/LayoutMain";

export default {
  components: {
    LayoutFooter,
    LayoutHeader,
    LayoutMain,
  },
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
</style>
