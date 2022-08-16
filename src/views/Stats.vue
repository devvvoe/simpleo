<template>
  <body>
    <header>
      <div class="header-container">
        <Menu></Menu>
        <div class="header-big-text">
          ALEXANDR COSTYLEV'S<br />
          S1MPLE <br />
          Statistics
        </div>
      </div>
    </header>
  </body>

  <div class="stats">
    <div class="stats-container">
      <my-title>Statistic (HLTV)</my-title>
      <div class="stats-block">
        <img class="simple_img" src="@/assets/img/simplestatss.jpg" alt="" />
        <div class="simple-stat">
          <div class="team">
            Team: <span>{{ team }}</span>
          </div>
          <div class="team">
            Maps Played: <span>{{ maps }}</span>
          </div>
          <div class="team">
            ADR: <span>{{ adr }}</span>
          </div>
          <div class="team">
            Rating: <span>{{ rating }}</span>
          </div>
          <div class="team">
            Kast: <span>{{ kast }}</span>
          </div>
          <div class="team">
            KPR: <span>{{ kpr }}</span>
          </div>
          <div class="team">
            Headshots: <span>{{ headshots }}</span>
          </div>
          <div class="team">
            Impact: <span>{{ impact }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer></Footer>
</template>

<script>
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";
export default {
  name: "Stats",
  components: {
    Menu,
    Footer,
  },
  data() {
    return {
      team: "Natus Vincere",
      maps: "",
      rating: "",
      adr: "",
      kast: "",
      kpr: "",
      headshots: "",
      impact: "",
    };
  },
  methods: {
    async fetchStat() {
      const res = await fetch("https://hltv-api.vercel.app/api/player.json");
      const data = await res.json();
      return data;
    },
  },
  async created() {
    const data = await this.fetchStat();
    this.maps = data.mapsPlayed;
    this.rating = data.rating;
    this.adr = data.adr;
    this.kast = data.kast;
    this.kpr = data.kpr;
    this.headshots = data.headshots;
    this.impact = data.impact;
  },
};
</script>

<style src="../assets/css/stats.css" scoped>
@media all and (max-width: 580px) {
  .wiki-text {
    width: 200px;
    font-size: 14px;
    text-align: center;
    margin: auto;
  }
}
</style>
