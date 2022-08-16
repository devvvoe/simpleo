<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>
<script>
import Main from "@/views/Main";
export default {
  components: { Main },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "lato";
}
a {
  text-decoration: none;
}
</style>
