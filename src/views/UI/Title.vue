<template>
  <div class="text-centred">
    <div class="title-text"><slot></slot></div>
  </div>
</template>

<script>
export default {
  name: "my-title",
};
</script>

<style scoped>
.text-centred {
  text-align: center;
}
.title-text {
  margin-top: 20px;
  color: #fff;
  border-radius: 15px;
  border-top: 15px solid #000;
  border-bottom: 15px solid #ffb000;
  font-size: 50px;
  display: inline-block;
  font-weight: 700;
  margin-bottom: 30px;
}
</style>
