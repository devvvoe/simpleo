<template>
  <body>
    <header>
      <div class="header-container">
        <Menu></Menu>
        <div class="header-big-text">
          S1MPLE'S <br />
          Highlights
        </div>
      </div>
    </header>
    <div class="high">
      <div class="teams-container">
        <my-title>S1imple's Clutche's</my-title>
        <div class="teams-flex">
          <a
            class="team-block"
            target="_blank"
            :href="clutchF.href"
            v-for="(clutchF, i) in clutechesF"
            :key="i"
          >
            <img :src="clutchF.map" alt="" class="team-block-img" />
            <div class="team-block-name">{{ clutchF.name }}</div>
          </a>
        </div>
      </div>
    </div>
    <Footer />
  </body>
</template>

<script>
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";
export default {
  name: "highlights",
  components: {
    Menu,
    Footer,
  },
  data() {
    return {
      clutechesF: [
        {
          id: 1,
          name: "S1mple 1v2 Cache",
          href: "https://www.youtube.com/watch?v=kUSN6u5CSRE&ab_channel=Ryuka",
          map: require("@/assets/img/cache.jpg"),
        },
        {
          id: 2,
          name: "S1mple 1v4 Nuke",
          href: "https://www.youtube.com/watch?v=oxFmrQvcYhg&t=4s&ab_channel=sunnybunny50",
          map: require("@/assets/img/nuke.jpg"),
        },
        {
          id: 3,
          name: "M0nesy 1v4 Inferno",
          href: "https://www.youtube.com/watch?v=z30CR6Pb3Yg&ab_channel=CS%3AGO-Dailyvideos",
          map: require("@/assets/img/inferno.jpg"),
        },
        {
          id: 4,
          name: "S1mple 1v5 Overpass",
          href: "https://www.youtube.com/watch?v=X5kPjGZHzlM&ab_channel=Skill-UPCSGO",
          map: require("@/assets/img/overpass.jpg"),
        },
        {
          id: 5,
          map: require("@/assets/img/dust.jpg"),
          name: "S1mple 1v1 Dust2",
          href: "https://www.youtube.com/watch?v=FuvMNVbuE1g&ab_channel=Liideli",
        },
        {
          id: 6,
          name: "Zywoo 1v5 Mirage",
          href: "https://www.youtube.com/watch?v=YGPOhZYZimw&ab_channel=BeastyNationCSGO",
          map: require("@/assets/img/mirage.jpg"),
        },
        {
          id: 7,
          map: require("@/assets/img/inferno.jpg"),
          name: "Happy 1v5 Deagle",
          href: "https://www.youtube.com/watch?v=dg6TQy6pGfs&ab_channel=OddshotBot",
        },
        {
          id: 8,
          map: require("@/assets/img/cbble.jpg"),

          name: "S1mple 1v5 Cobblestone",
          href: "https://www.youtube.com/watch?v=iXomGlBc_xg&ab_channel=sevenCSGO",
        },
        {
          id: 9,
          map: require("@/assets/img/inferno.jpg"),
          name: "Electronic 1v3 Inferno",
          href: "https://www.youtube.com/watch?v=lg1pga4lvVg&ab_channel=Logsi",
        },
        {
          id: 10,
          name: "S1mple 1v5 Nuke",
          map: require("@/assets/img/nuke.jpg"),

          href: "https://www.youtube.com/watch?v=2ktVW-ZtVsw&ab_channel=Getfight-CS%3AGOPOVS%2FValorantWTFMoments",
        },
      ],
    };
  },
};
</script>

<style scoped src="../assets/css/highlights.css"></style>
