<template>
  <div class="navbar-landing">
    <div class="navbar-landing__locale">
      <div
        class="navbar-landing__locale__item"
        :class="{active: activeLocale('et')}"
        @click="updateLocale('et')"
      >
        <span>Et</span>
        <span>Eesti</span>
      </div>
      <div
        class="navbar-landing__locale__item"
        :class="{active: activeLocale('en')}"
        @click="updateLocale('en')"
      >
        <span>En</span>
        <span>English</span>
      </div>
    </div>
    <div class="navbar-landing__nav">
      <a
        class="navbar-landing__signup"
        href="https://powerful-shore-89848.herokuapp.com/register"
      >{{$t('signUp')}}</a>
      <a class="navbar-landing__login" href="https://powerful-shore-89848.herokuapp.com/login">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path opacity="0.3" d="M7 4.89474V21H5V3H11V4.89474H7Z" fill="white" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.1783 2.24744L18.1783 3.69705C18.6541 3.78326 19 4.19752 19 4.68103V19.319C19 19.8025 18.6541 20.2168 18.1783 20.303L10.1783 21.7526C9.63486 21.8511 9.11449 21.4904 9.01602 20.9469C9.00536 20.8881 9 20.8284 9 20.7686V3.23141C9 2.67913 9.44772 2.23141 10 2.23141C10.0598 2.23141 10.1195 2.23678 10.1783 2.24744ZM11.9167 12.906C12.607 12.906 13.1667 12.2976 13.1667 11.547C13.1667 10.7965 12.607 10.188 11.9167 10.188C11.2263 10.188 10.6667 10.7965 10.6667 11.547C10.6667 12.2976 11.2263 12.906 11.9167 12.906Z"
            fill="white"
          />
        </svg>
        {{$t('login')}}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "navbar-landing",
  props: {},
  data() {
    return {};
  },
  watch: {
    $route() {
      // if (this.showBookmarkPagesDropdown) this.showBookmarkPagesDropdown = false
    }
  },
  computed: {
    getCurrentLocaleData() {
      const locale = this.$i18n.locale;
      if (locale == "en") return { flag: "us", lang: "English" };
      else if (locale == "et") return { flag: "et", lang: "Eesti" };
      else if (locale == "pt") return { flag: "br", lang: "Portuguese" };
      else if (locale == "fr") return { flag: "fr", lang: "French" };
      else if (locale == "de") return { flag: "de", lang: "German" };
    }
  },
  methods: {
    updateLocale(locale) {
      // localStorage.setItem('locale', locale);
      this.$i18n.locale = locale;
    },
    activeLocale(locale) {
      return locale === this.$i18n.locale;
    }

    // elapsedTime(startTime) {
    //     let x = new Date(startTime)
    //     let now = new Date();
    //     var timeDiff = now - x
    //     timeDiff /= 1000;

    //     var seconds = Math.round(timeDiff);
    //     timeDiff = Math.floor(timeDiff / 60);

    //     var minutes = Math.round(timeDiff % 60);
    //     timeDiff = Math.floor(timeDiff / 60);

    //     var hours = Math.round(timeDiff % 24);
    //     timeDiff = Math.floor(timeDiff / 24);

    //     var days = Math.round(timeDiff % 365);
    //     timeDiff = Math.floor(timeDiff / 365);

    //     var years = timeDiff;

    //     if (years > 0) {
    //         return years + (years > 1 ? ' Years ' : ' Year ') + 'ago';
    //     } else if (days > 0) {
    //         return days + (days > 1 ? ' Days ' : ' Day ') + 'ago';
    //     } else if (hours > 0) {
    //         return hours + (hours > 1 ? ' Hrs ' : ' Hour ') + 'ago';
    //     } else if (minutes > 0) {
    //         return minutes + (minutes > 1 ? ' Mins ' : ' Min ') + 'ago';
    //     } else if (seconds > 0) {
    //         return seconds + (seconds > 1 ? ` sec ago` : 'just now');
    //     }

    //     return 'Just Now'
    // },
  },
  directives: {},
  components: {}
};
</script>
<style lang="sass">
@import '@/assets/scss/vuesax/_variables.scss'
.navbar-landing
  position: absolute
  top: 0
  left: 0
  right: 0
  display: flex
  padding-left: 56px
  padding-right: 56px
  background-color: rgba(#fff, 0)
  z-index: 10000
  @media (max-width: 576px)
    padding-left: 15px
    padding-right: 15px
  &__nav
    text-align: right
    width: 100%
    padding-top: 30px
    @media (max-width: 576px)
      padding-top: 0px
  &__signup,
  &__login
    line-height: 48px
    font-size: 19px
    @media (max-width: 576px)
      font-size: 16px !important

  &__signup
    padding: 14px 24px 10px 24px
    background-color: #fff
    color: #17334B
    border-radius: 50px
    margin-right: 24px
    @media (max-width: 576px) 
      padding: 10px 12px 8px 12px
      margin-right: 12px
      //display: none
      
    &:hover
      color: #000

  
    

  &__login
    padding: 0
    color: #fff !important
    &:hover
      color: #fff
    svg 
      position: relative
      top: 5px
      @media (max-width: 576px)
        top: 7px

  &__locale
    display: flex
    &__item
      font-family: $font-m
      position: relative
      color: #FFF
      margin-right: 32px
      margin-top: 42px
      line-height: 1
      cursor: pointer
      font-size: 19px
      @media (max-width: 576px)
        font-size: 16px
        margin-top: 15px
        margin-right: 16px
        opacity: 0.5
      span
        &:nth-child(1)
          display: none
        @media (max-width: 576px)
          &:nth-child(1)
            display: inline
          &:nth-child(2)
            display: none

      &:hover
        &:before
          position: absolute
          content: ""
          top: -45px
          left: 0
          height: 6px
          width: 100%
          background-color: rgba(#fff,.3)
          border-radius: 3px
          
          
      &.active
        @media (max-width: 576px)
          opacity: 1

        &:before
          position: absolute
          content: ""
          top: -45px
          left: 0
          height: 6px
          width: 100%
          background-color: #fff
          border-radius: 3px
          opacity: 1
          @media (max-width: 576px)
            top: -17px
            opacity: 1
    // background: linear-gradient(180deg, #062947 0%, rgba(32, 71, 104, 0) 100%);
    
</style>
