import { createStore } from "vuex";

export default createStore({
  state() {
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
  getters: {
    getTeam(state) {
      return (slug) => state.teams.find((team) => team.value === slug);
    },
    getPlayer(state) {
      return (slug) => state.players.find((player) => player.value === slug);
    },
  },
});
