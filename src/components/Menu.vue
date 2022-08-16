<template>
      <div class="menu">
        <router-link class="logo" to="/">
          S<span>1</span>MPLE
        </router-link>
        <div class="sec-menu">
          <router-link to="/stats" class="sec-menu-title">Statistic</router-link>
          <router-link to="/highlights" class="sec-menu-title">Highlights</router-link>
        </div>
      </div>
</template>

<script>
export default {
  name: "menu"
}
</script>

<style src="../assets/css/main.css">

</style>