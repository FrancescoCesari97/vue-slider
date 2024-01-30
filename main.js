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

      autoplay: false,
    };
  },

  //* RACCHIUDE TUTTE LE FUNZIONI CHE SI POSSONO UTILIZZARE
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

    clickThumb(imageindex) {
      this.activeImg = imageindex;
    },

    autoslide() {
      this.autoplay = setInterval(() => {
        this.nextArrow();
      }, 2500);
    },
    stopAutoSlide() {
      clearInterval(this.autoplay);
    },
  },

  //* INCOMINCIA A FUNZIONARE DOPO CHE LA PAGINA SI è CARICATA
  mounted() {
    this.autoplay = setInterval(() => {
      this.nextArrow();
    }, 2500);
  },
});

app.mount("#root");
