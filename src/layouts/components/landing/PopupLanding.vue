<template>
    <div class="popup-landing" v-if="isLandingPopupActive">
      <div class="popup-landing__content">
        <div class="popup-landing__text"><span>{{$t('stepText' + step)}}</span></div>

        <div class="popup-landing__scheme">
          <div v-if="locale === 'en'">
            <img v-if="step === 1" src="@/assets/images/landing/svg-step/step1_en.svg" alt="">
            <img v-if="step === 2" src="@/assets/images/landing/svg-step/step2_en.svg" alt="">
            <img v-if="step === 3" src="@/assets/images/landing/svg-step/step3_en.svg" alt="">
          </div>

          <div v-if="locale === 'et'">
            <img v-if="step === 1" src="@/assets/images/landing/svg-step/step1_et.svg" alt="">
            <img v-if="step === 2" src="@/assets/images/landing/svg-step/step2_et.svg" alt="">
            <img v-if="step === 3" src="@/assets/images/landing/svg-step/step3_et.svg" alt="">
          </div>
          
          <div v-if="step < 3" @click="nextStep">
          <div class="popup-landing__next">
            {{$t('clickToContinue')}}
          </div>
        </div>
        </div>
        <!-- <div v-if="step < 3" @click="nextStep">
          <div class="popup-landing__next">
            {{$t('clickToContinue')}}
          </div>
        </div> -->
        <div @click="popupClose" class="popup-landing__close">X</div>
      </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: "popup-landing",
    props: {
        
    },
    data() {
        return {
            step: 1// activeLink: false,
        }
    },
    watch: {
        '$route'() {
            // this.CheckIsActive()
            // if (this.showBookmarkPagesDropdown) this.showBookmarkPagesDropdown = false
        }
    },
    computed: {
      locale() {
        return this.$i18n.locale
      },
      ...mapGetters([
        'isLandingPopupActive'
      ])
    },
    methods: {
      popupClose(){
        this.$store.dispatch('UPDATE_IS_LANDING_POPUP_ACTIVE', false)
        this.step = 1
      },
      nextStep(){
       this.step++
      }
    },
    directives: {
        
    },
    components: {
        
    },
}
</script>
<style lang="sass">
@import '@/assets/scss/vuesax/_variables.scss'
.popup-landing
  left: 0
  right: 0
  height:  100vh
  top: 0
  position: fixed
  display: flex
  width: 100%
  background: #17334B
  overflow-y: auto
  text-align: center
  justify-content: center
  color: #fff
  padding-top: 30px
  z-index: 100000
  flex-wrap: wrap
  @media (max-width: 576px)
    padding-top: 15px
  @media (max-height: 750px) and (min-width: 900px)
    padding: 30px 0
    //background: red
    .popup-landing__content
      display: flex
      font-display: auto
      flex-direction: row-reverse
      max-width: 100% 
      padding:  0 50px
      justify-content: center
      align-content: coenter
      flex-wrap: wrap
      margin: auto 0
    .popup-landing__scheme,
    .popup-landing__text
        width: 50%
        flex: 0 0 50%
        text-align: left
    .popup-landing__text
      padding-left: 30px
      display: flex
      margin: auto  0

    .popup-landing__scheme
      padding-left: 0
    
  // * 
  //   position: relative
  // &:before
  //   content: ''
  //   display: block
  //   position: absolute
  //   left: 0
  //   right: 0
  //   top: 0
  //   height: 1000px
  //   // background-image: url('../../../assets/images/landing/popup-bg.png')
  //   background-size: 100%
  //   background-position: center 0%
  //   background-repeat: no-repeat
  //   // transform: rotate(180deg)
  &__content
    max-width: 960px
    padding: 15px
  &__text 
    font-family: $font-m
    font-size: 32px
    line-height: 40px
    display: inline-block
    max-width: 100%
    text-align: center
    letter-spacing: 0.01em
    margin-bottom: 40px
    text-shadow: 0px 2px 1px rgba(0, 0, 0, 0.16)
    min-height: 120px
    @media (max-width: 576px)
      font-size: 18px
      line-height: 24px
      
  &__close
    top: 60px
    right: 60px
    position: fixed
    display: inline-block
    font-family: $font-h
    font-style: normal
    font-weight: normal
    font-size: 24px
    line-height: 40px
    align-items: center
    text-align: center
    letter-spacing: 0.05em
    color: #17334B
    width: 64px
    height: 64px
    margin: -32px
    padding: 12px 0
    background-color: $success
    cursor: pointer
    border-radius: 50px
    
    @media (max-width: 900px)
      left: 50%
      right: 50%
      bottom: 30px
      top: auto
    @media (max-width: 576px)
      width: 32px
      height: 32px
      margin: -16px
      font-size: 16px
      padding: 0px 0
      line-height: 32px
  &__scheme
    position: relative
    display: inline-block
    max-width: 624px + 80px
    width: 100%
    //padding-left: 55px
    @media (max-width: 576px)
      padding-left: 0px
    img 
      max-width: 100%
  &__next
    position: absolute
    display: inline-block
    color: $success
    font-size: 24px
    cursor: pointer
    width: 100%
    bottom: 50px
    right: 0
    left: 0
    text-align:  center !important

    @media (max-width: 576px)
      font-size: 14px
      //top: -60px

    
  
</style>
