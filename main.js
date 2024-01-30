//* STRUTTUTA BASE VUE

const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      images: [
        "./img/01.webp",
        "./img/02.webp",
        "./img/03.webp",
        "./img/04.webp",
        "./img/05.webp",
      ],

      activeImg: 0,
    };
  },

  methods: {
    nextArrow() {
      if (this.activeImg >= this.images.length - 1) {
        this.activeImg = 0;
      } else {
        this.activeImg++;
      }
    },

    prevArrow() {
      if (this.activeImg == 0) {
        this.activeImg = this.images.length - 1;
      } else {
        this.activeImg--;
      }
    },
  },
});

app.mount("#root");
