<template>
  <div class="header-landing">
    <div class="header-landing__content">
      <div class="header-landing__logo">Regi</div>
      <div class="header-landing__title">{{ $t('headerTitle') }}</div>
      <div class="header-landing__text">{{ $t('headerText') }}</div>
      <div class></div>
      <div v-scroll-to="'#works-landin'" class="header-landing__read-more">{{ $t('readMore') }}</div>
      <div class="header-landing__arrow">
        <svg
          width="18"
          height="176"
          viewBox="0 0 18 176"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9 1.5V173" stroke="#B9E1D7" stroke-width="2" stroke-linecap="round" />
          <path
            d="M17.2451 166.737L17.2442 166.736C16.9151 166.421 16.3895 166.421 16.0605 166.736L16.4064 167.097L16.0605 166.736L8.99967 173.503L1.93954 166.737L1.93952 166.736C1.61047 166.421 1.08485 166.421 0.755796 166.736C0.414735 167.063 0.414735 167.603 0.755796 167.93L8.40629 175.261C8.40665 175.262 8.40701 175.262 8.40737 175.262C8.57424 175.423 8.79026 175.5 8.99965 175.5C9.20973 175.5 9.42398 175.423 9.59001 175.265L9.59186 175.264L17.2442 167.93L17.2451 167.93C17.585 167.602 17.585 167.065 17.2451 166.737Z"
            fill="#B9E1D7"
            stroke="#B9E1D7"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<style lang="sass">
@import '@/assets/scss/vuesax/_variables.scss'
.header-landing

  display: flex
  width: 100%
  // background: linear-gradient(180deg, #062947 0%, rgba(32, 71, 104, 0) 100%)
  // background-image: url('../../../assets/images/landing/header-bg.png')
  // background-size: 100%
  // background-position: center 0
  text-align: center
  // background-repeat: no-repeat

  justify-content: center
  // height: 100vh
  color: #fff
  padding: 15px
  padding-top: 136px
  *
    position: relative

  &:before
    content: ''
    display: block
    position: absolute
    left: 0
    right: 0
    top: 0
    height: 1100px
    background-image: url('../../../assets/images/landing/top-bg.png')
    background-size:  2000px auto
    background-position: center 0
    background-repeat: no-repeat
    // transform: rotate(180deg)
  &__content

    max-width: 711px
  &__logo
    font-family: $font-h
    font-style: normal
    font-weight: normal
    font-size: 40px
    line-height: 54px
    color: $success
    margin-bottom: 18px
    text-shadow: 0px 2px 1px rgba(0, 0, 0, 0.16)
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
    @media (max-width: 576px)
      font-size: 48px
      line-height: 48px

  &__text
    font-family: $font-m
    font-size: 32px
    line-height: 40px
    display: inline-block
    max-width: 500px
    text-align: center
    letter-spacing: 0.01em
    margin-bottom: 40px
    text-shadow: 0px 2px 1px rgba(0, 0, 0, 0.16)
    @media (max-width: 576px)
      font-size: 24px
      line-height: 32px
  &__read-more
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
</style>
