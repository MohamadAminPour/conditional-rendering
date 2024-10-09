Vue.createApp({
  data() {
    return {
      isShow: true,
      name: "mmd",
    };
  },
  methods: {
    ShowHandler(){
      this.isShow = !this.isShow
    }
  },
}).mount(".app");
