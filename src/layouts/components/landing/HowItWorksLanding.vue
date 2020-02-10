
<template>
  <div id="works-landin" class="works-landing">
    <div class="works-landing__content">
      <div class="works-landing__title">{{ $t('howItWorks') }}</div>
      <div class="works-landing__steps">
        <div class="works-landing__step">
          <div class="works-landing__step__img">
            <img
              src="@/assets/images/landing/step1.png"
              srcset="@/assets/images/landing/step1-2x-1.png 2x"
            />
          </div>
          <div class="works-landing__step__wrapper">
            <div class="works-landing__step__title">{{ $t('stepTitle1') }}</div>
            <div class="works-landing__step__text">{{ $t('stepText1') }}</div>
          </div>
        </div>

        <div class="works-landing__step">
          <div class="works-landing__step__img">
            <img
              src="@/assets/images/landing/step2.png"
              srcset="@/assets/images/landing/step2-2x-1.png 2x"
            />
          </div>
          <div class="works-landing__step__wrapper">
            <div class="works-landing__step__title">{{ $t('stepTitle2') }}</div>
            <div class="works-landing__step__text">{{ $t('stepText2') }}</div>
          </div>
        </div>

        <div class="works-landing__step">
          <div class="works-landing__step__img">
            <img
              src="@/assets/images/landing/step3.png"
              srcset="@/assets/images/landing/step3-2x-1.png 2x"
            />
          </div>
          <div class="works-landing__step__wrapper">
            <div class="works-landing__step__title">{{ $t('stepTitle3') }}</div>
            <div class="works-landing__step__text">{{ $t('stepText3') }}</div>
          </div>
        </div>
      </div>
      <div @click="popupOpen" class="works-landing__see-eco-cycle">{{ $t('seeEcoCycle') }}</div>
      <div class="works-landing__arrow">
        <svg
          width="19"
          height="130"
          viewBox="0 0 19 130"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.5 1V126.5"
            stroke="#B9E1D7"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M18.2277 120.727L18.2268 120.726C17.8924 120.425 17.3689 120.425 17.0344 120.726L17.3693 121.097L17.0344 120.726L9.49965 127.522L1.96557 120.726L1.96555 120.726C1.63115 120.425 1.10763 120.425 0.773224 120.726C0.408925 121.055 0.408925 121.612 0.773224 121.94L8.90195 129.272C8.90234 129.272 8.90273 129.272 8.90312 129.273C9.07565 129.429 9.29354 129.5 9.49963 129.5C9.70651 129.5 9.92263 129.429 10.0943 129.276L10.0962 129.274L18.2268 121.941L18.2277 121.94C18.5908 121.611 18.5908 121.056 18.2277 120.727Z"
            fill="#B9E1D7"
            stroke="#B9E1D7"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({ isLandingPopupActive: "isLandingPopupActive" })
  },
  methods: {
    popupOpen() {
      this.$store.dispatch("UPDATE_IS_LANDING_POPUP_ACTIVE", true);
    }
  }
};
</script>
<style lang="sass">
@import '@/assets/scss/vuesax/_variables.scss'
.works-landing
  position: relative
  display: flex
  width: 100%
  background-size: 100%
  background-position: center 0
  background-repeat: no-repeat
  justify-content: center
  color: #fff
  padding-top: 24px
  padding-bottom: 10rem
  margin-bottom: 2rem
  // background: linear-gradient(180deg, rgba(#4c7d7d, 1) 0%, rgba(#4c7d7d, 1) 100%)
  *
    position: relative
  &:before
    content: ''
    position: absolute
    display: block
    left: 0
    right: 0
    top: 0
    bottom: 0
    background-image: url('../../../assets/images/landing/bg-bottom-earth.png')
    // background-image: url('../../../assets/landing/bg-bottom-earth.png')

    background-size:  2000px auto
    background-position: center 100%
    background-repeat: no-repeat
    z-index: 0
  &__content
    max-width: 1215px
    text-align: center
    padding: 0 15px

  &__title
    display: inline-block
    margin-bottom: 24px
    font-family: $font-h
    font-style: normal
    font-weight: normal
    font-size: 80px
    line-height: 80px
    text-align: center
    letter-spacing: 0.01em
    max-width: 650px
    text-shadow: 0px 2px 1px rgba(0, 0, 0, 0.16)
    @media (max-width: 768px)
      font-size: 58px
      line-height: 1
    @media (max-width: 576px)
      font-size: 48px
  &__steps
    padding: 124px 0
  &__step
    $radius: 50px
    position: relative
    display: flex
    text-align: left
    padding: 0 $radius
    @media (max-width: 576px)
      display: block
      text-align: center !important
      padding: 0 $radius / 2
    &:after,
    &:before
      position: absolute
      display: block
      content: ""
    &:before
      bottom: 0
      top: 0

    &:nth-child(1)

      &:after
        width: $radius
        height: $radius * 2
        border-right: 2px solid $stroke
        border-bottom: 2px solid $stroke
        border-radius: 0 0 $radius 0
        left: calc(50% - 50px)
        top: -$radius * 2
      &:before
        left: 0
        right: calc(50% + 50px)
        border-radius: $radius 0 0 $radius
        border-left: 2px solid $stroke
        border-top: 2px solid $stroke
        border-right: 0 solid $stroke
        border-bottom: 2px solid $stroke
      .works-landing__step__img
        padding-top: 50px
    &:nth-child(2)
      flex-direction: row-reverse
      &:before
        left: 30%
        right: 0
        top: -2px
        bottom: -2px
        border-radius: 0 $radius $radius 0
        border-left: 0 solid $stroke
        border-top: 2px solid $stroke
        border-right: 2px solid $stroke
        border-bottom: 2px solid $stroke
      .works-landing__step__img
        padding-top: 50px
    &:nth-child(3)
      padding-left: $radius
      &:after
        width: $radius
        height: $radius * 2
        border-right: 2px solid $stroke
        border-top: 2px solid $stroke
        border-radius: 0 $radius 0 0
        left: calc(50% - 50px)
        bottom: -$radius * 2
      &:before
        left: 0
        right: calc(50% + 50px)

        border-radius: $radius 0 0 $radius
        border-left: 2px solid $stroke
        border-top: 2px solid $stroke
        border-right: 0 solid $stroke
        border-bottom: 2px solid $stroke
      .works-landing__step__img
        padding-top: 50px
    &__img
      @media (max-width: 768px)
        -webkit-box-flex: 0
        flex: 0 0 30%
        max-width: 30%
        img
          max-width: 100%
      @media (max-width: 576px)
        max-width: 100%
    &__wrapper
      display: flex
      flex-direction: column
      justify-content: center
      align-content: center
      @media (max-width: 576px)
        padding-bottom: 50px
    &__title
      margin-bottom: 16px
      text-shadow: 0px 2px 1px rgba(0, 0, 0, 0.16)
      font-family: $font-h
      font-style: normal
      font-weight: normal
      font-size: 48px
      line-height: 48px
      letter-spacing: 0.02em
      @media (max-width: 768px)
        font-size: 32px
        line-height: 32px

    &__text
      text-shadow: 0px 2px 1px rgba(0, 0, 0, 0.16)
      font-family: $font-m
      font-size: 24px
      line-height: 32px
      font-feature-settings: 'salt' on, 'ss01' on, 'ordn' on, 'kern' off, 'calt' off, 'liga' off
      opacity: 0.8
      @media (max-width: 768px)
        font-size: 18px
        line-height: 21px

  &__see-eco-cycle
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
    padding: 12px 45px
    background-color: $success
    cursor: pointer
    border-radius: 50px
  &__arrow
    margin-top: 23px

// @media( min-width: 576px )

// @media (min-width: 768px)
//   .works-landing
//     &__step
//       &__title
//         font-size: 42px
//         line-height: 1


// @media (min-width: 992px)


// @media (min-width: 1200px)
</style>
