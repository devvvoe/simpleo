<template>
  <body>
    <header>
      <div class="header-container">
        <Menu></Menu>
        <div class="header-big-text">
          The Best <br />
          Player <br />
          In The World
        </div>
      </div>
    </header>

    <section class="biography">
      <div class="bio-container">
        <my-title>About</my-title>
        <div class="about">
          <div class="flex-for-simple">
            <img src="../assets/img/simplebio.png" class="simple_img" alt="" />
          </div>
          <div class="wiki">
            <div class="wiki-text">
              {{ wikiText }}
            </div>
            <div class="flex-for-wiki">
              <my-button
                href="https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D1%81%D1%82%D1%8B%D0%BB%D0%B5%D0%B2,_%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80_%D0%9E%D0%BB%D0%B5%D0%B3%D0%BE%D0%B2%D0%B8%D1%87"
                >Wikipedia</my-button
              >
              <my-button href="https://www.instagram.com/s1mpleo/"
                >Instagram</my-button
              >
              <my-button href="https://t.me/s1mplegod123">Telegram</my-button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="teams">
      <div class="teams-container">
        <my-title>Teams</my-title>
        <div class="teams-flex">
          <div
            class="team-block"
            v-for="(team, i) in teams"
            :key="i"
            @click="$router.push(`/team/${team.value}`)"
          >
            <img :src="team.img" alt="" class="team-block-img" />
            <div class="team-block-date">{{ team.date }}</div>
            <div class="team-block-title">{{ team.name }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="navi">
      <div class="teams-container">
        <my-title>S1mple's Current Team</my-title>
        <div class="teams-flex">
          <div
            class="team-block"
            v-for="(player, i) in players"
            :key="i"
            @click="$router.push(`/player/${player.value}`)"
          >
            <img :src="player.img" alt="" class="team-block-img" />
            <div class="team-block-date">{{ player.name }}</div>
            <div class="team-block-title">{{ player.date }}</div>
          </div>
        </div>
      </div>
    </div>

    <Footer />
  </body>
</template>

<script>
import { mapState } from "vuex";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer";

export default {
  name: "Main",
  components: {
    Menu,
    Footer,
  },
  data() {
    return {
      teams: [
        {
          id: 1,
          value: "faze",
          name: "Faze clan",
          date: "Sep 2014 - Jan 2015",
          img: require("@/assets/img/hellraisers.jpg"),
          href: "https://www.hltv.org/team/6667/faze",
        },
        {
          id: 2,
          value: "flipside",
          name: "FlipSid3",
          date: "Mar 2015 - Jul 2015",
          img: require("@/assets/img/flipside.jpg"),
          href: "https://www.hltv.org/team/5988/flipsid3",
        },
        {
          id: 3,
          value: "liquid",
          name: "Liquid",
          date: "Feb 2016 - Apr 2016",
          img: require("@/assets/img/liquid.jpg"),
          href: "https://www.hltv.org/team/5973/liquid",
        },
        {
          id: 4,
          value: "navi",
          name: "Natus Vincere",
          date: "Aug 2016 - Present",
          img: require("@/assets/img/navi.jpg"),
          href: "https://www.hltv.org/team/4608/natus-vincere",
        },
      ],
      wikiText:
        "          Kostylev, Oleksandr Olegovich (Ukrainian Oleksandr Olegovich Kostyliev; born October 2, 1997, Kyiv) is a\n" +
        "            Ukrainian cybersportsman, better known by the nickname s1mple. Plays in the Natus Vincere team. The best\n" +
        "            player in Counter-Strike: Global Offensive according to HLTV.org in 2018 and 2021 . In 2021, as part\n" +
        "            of Natus Vincere, he became the winner and MVP of PGL Major Stockholm 2021.",
      players: [
        {
          id: 1,
          name: "Alexandr Costylev",
          date: "simple",
          value: "s1mple",
          img: require("@/assets/img/simplebio.png"),
          year: 24,
          href: "https://www.hltv.org/player/7998/s1mple",
        },
        {
          id: 2,
          name: "Denis Sharipov",
          date: "Electonic",
          value: "electronic",
          img: require("@/assets/img/electronic.png"),
          year: 23,
          href: "https://www.hltv.org/player/8918/electronic",
        },
        {
          id: 3,
          name: "Ilya Zalutskiy",
          date: "Perfecto",
          value: "perfecto",
          img: require("@/assets/img/perfecto.png"),
          year: 22,
          href: "https://www.hltv.org/player/16947/perfecto",
        },
        {
          id: 4,
          name: "Valeriy Vakhovskiy",
          date: "b1t",
          value: "bit",
          img: require("@/assets/img/bit.png"),
          year: 19,
          href: "https://www.hltv.org/player/18987/b1t",
        },
      ],
    };
  },
  computed: {
    ...mapState({
      teams: (state) => state.teams,
    }),
  },
};
</script>

<style src="../assets/css/main.css" scoped></style>
