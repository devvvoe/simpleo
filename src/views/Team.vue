<template>
  <div class="header-container">
    <Menu></Menu>
    <my-title>{{ team.name }}</my-title>
    <div class="com">
      <div class="com-flex">
        <img :src="team.img" alt="" class="team-block-img" />
        <div class="about-com">
          <div class="com-title">
            Team: <span>{{ team.name }}</span>
          </div>
          <div class="com-title">
            Range: <span> {{ team.date }}</span>
          </div>
          <div class="btn-p"><my-button :href="team.href">HLTV</my-button></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Menu from "@/components/Menu.vue";
export default {
  name: "Team",
  components: {
    Menu,
  },
  data() {
    return {
      team: null,
    };
  },
  computed: {
    ...mapGetters(["getTeam"]),
  },
  created() {
    this.team = this.getTeam(this.$route.params.slug);
    if (!this.team) {
      this.$router.push("/");
    }
  },
};
</script>

<style scoped>
.bio-title {
  margin-top: 30px;
}

.com {
  width: 95%;
  margin: auto;
  padding: 10px;
  margin: auto;
  background: #000;
  box-shadow: rgba(240, 46, 46, 0.4) -5px 5px, rgba(153, 10, 10, 0.3) -10px 10px,
    rgba(240, 46, 46, 0.2) -15px 15px, rgba(240, 46, 170, 0.1) -20px 20px,
    rgba(240, 46, 46, 0.05) -25px 25px;
  border-radius: 10px;
}

.com-flex {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.com-title span {
  font-size: 45px;
  font-weight: 700;
  text-transform: uppercase;
  background-image: linear-gradient(
    -225deg,
    #ff1361 0%,
    #fff800 33%,
    #ff1361 67%,
    #fff800 100%
  );
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  color: #fff;
  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 2s linear infinite;
}
.btn-p {
  padding-top: 10px;
}
@keyframes textclip {
  to {
    background-position: 200% center;
  }
}
.com-title {
  color: #fff;
  font-size: 34px;
  margin-top: 10px;
  font-weight: 400;
  margin-bottom: 10px;
}

@media all and (max-width: 930px) {
  .com-flex {
    flex-direction: column;
    text-align: center;
  }
}
@media all and (max-width: 750px) {
  .com-title {
    font-size: 20px;
  }
  .com-title span {
    font-size: 30px;
  }
}
</style>
