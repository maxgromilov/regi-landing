<template>
  <div class="landin-page">
    <navbar-landing></navbar-landing>

    <header-landing></header-landing>
    <how-it-works-landing></how-it-works-landing>
    <footer-landing></footer-landing>
    <popup-landing></popup-landing>
  </div>
</template>

<script>
import NavbarLanding from "@/layouts/components/landing/TheNavbarLanding.vue";
import HeaderLanding from "@/layouts/components/landing/HeaderLanding.vue";
import FooterLanding from "@/layouts/components/landing/FooterLanding.vue";
import PopupLanding from "@/layouts/components/landing/PopupLanding.vue";
import HowItWorksLanding from "@/layouts/components/landing/HowItWorksLanding.vue";
import { mapGetters } from "vuex";

export default {
  name: "landing-page",
  components: {
    NavbarLanding,
    HeaderLanding,
    FooterLanding,
    PopupLanding,
    HowItWorksLanding
  },
  props: {
    navbarColor: {
      type: String,
      default: "#fff"
    }
  },
  // data()  {
  //   return {
  //     windowWidth: 0,
  //   }
  // },
  computed: {
    // style() {
    //   // const position = (this.windowWidth - 1920 ) / 2 + 60
    //   // if(this.windowWidth > 1920) return {left: position + "px" }
    //   return null
    // },
    ...mapGetters(["isLandingPopupActive"])
  }
  // methods: {
  //   getWindowWidth(event) {
  //     this.windowWidth = document.documentElement.clientWidth;
  //   },
  // },
  // mounted(){
  //   this.$nextTick(function() {
  //     window.addEventListener('resize', this.getWindowWidth);
  //     this.getWindowWidth()
  //   })
  // },
  // beforeDestroy() {
  //   window.removeEventListener('resize', this.getWindowWidth);
  //   // window.removeEventListener('resize', this.getWindowHeight);
  // }
};
</script>
<style lang="sass" scope>
.landin-page
  width: 100%
  min-height: 100vh
  background: linear-gradient(180deg, #204768 0%, #275B8F 44.29%, #2C4C71 100%)

</style>
