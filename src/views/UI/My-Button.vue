<template>
  <a target="_blank" class="wiki-btn"><slot></slot></a>
</template>

<script>
export default {
  name: "my-button",
};
</script>

<style scoped>
.wiki-btn {
  color: #fff;
  background-color: #343a40;
  border-color: #343a40;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 20px;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  font-weight: 400;
}
.wiki-btn:hover {
  color: #fff;
  background-color: #212529;
  border-color: #212529;
}
</style>
