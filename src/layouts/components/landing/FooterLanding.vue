<template>
  <div class="footer-landing">
    <div class="footer-landing__content">
      <div class="footer-landing__title">{{ $t('footerTitle') }}</div>
      <div class="footer-landing__subtitle">{{ $t('footerSubtitle') }}</div>
      <div class="footer-landing__text">{{ $t('footerText') }}</div>

      <form
        :disabled="disabled"
        @submit.prevent="subscribe"
        method="post"
        action="https://gmail.us20.list-manage.com/subscribe/post?u=5f31cedb4c663eb70bc448e21&amp;id=959bd72ae2"
        class="footer-landing__form"
      >
        <div v-if="thanks" class="footer-landing__thanks">
          <img src="@/assets/images/landing/home-heart.svg" alt />
          <div class="footer-landing__thanks__title">{{ $t('thanksTitle') }}</div>
          <div class="footer-landing__thanks__subtitle">{{ $t('thanksSubtitle') }}</div>
        </div>
        <div v-if="!thanks">
          <div class="footer-landing__form__row">
            <label class="footer-landing__form__label">{{ $t('email') }}</label>
            <input
              v-model="form.EMAIL"
              name="EMAIL"
              class="footer-landing__form__input"
              type="email"
              _placeholder="$t('email')"
              required
            />
          </div>
          <div class="footer-landing__form__row">
            <label class="footer-landing__form__label">{{ $t('firstName') }}</label>
            <input
              v-model="form.FNAME"
              name="FNAME"
              class="footer-landing__form__input"
              type="text"
              _placeholder="$t('firstName')"
              required
            />
          </div>
          <div class="footer-landing__form__row">
            <label class="footer-landing__form__label">{{ $t('lastName') }}</label>
            <input
              v-model="form.LNAME"
              name="LNAME"
              class="footer-landing__form__input"
              type="text"
              _placeholder="$t('lastName')"
              required
            />
          </div>
          <button :disabled="disabled" class="footer-landing__form__send">{{ $t('getEarlyAccess') }}</button>
        </div>
      </form>
    </div>
    <div class="footer-landing__copyright">{{ $t('copyright') }}</div>
    <a href="mailto:info@regi.org" target="_blank" class="email">
      <svg
        width="44"
        height="44"
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle opacity="0.4" cx="22" cy="22" r="21" stroke="white" stroke-width="2" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M15 16H29C30.1046 16 31 16.8954 31 18V27C31 28.1046 30.1046 29 29 29H15C13.8954 29 13 28.1046 13 27V18C13 16.8954 13.8954 16 15 16ZM28.1444 17.8396L22 21.1482L15.8556 17.8396C15.4909 17.6433 15.036 17.7797 14.8396 18.1444C14.6433 18.5091 14.7797 18.964 15.1444 19.1604L21.6444 22.6604C21.8664 22.7799 22.1336 22.7799 22.3556 22.6604L28.8556 19.1604C29.2203 18.964 29.3567 18.5091 29.1604 18.1444C28.964 17.7797 28.5091 17.6433 28.1444 17.8396Z"
          fill="white"
        />
      </svg>
    </a>
  </div>
</template>

<script>
const $ = async () => {};
export default {
  props: {},
  data() {
    return {
      form: {
        EMAIL: "",
        FNAME: "",
        LNAME: ""
      },
      email: "",
      response: {},
      errorMessage: null,
      successMessage: null,
      thanks: false,
      disabled: false
    };
  },
  // watch: {
  //   $route() {
  //     // this.CheckIsActive()
  //     // if (this.showBookmarkPagesDropdown) this.showBookmarkPagesDropdown = false
  //   }
  // },
  computed: {},
  methods: {
    clearForm() {
      this.form.EMAIL = "";
      this.form.FNAME = "";
      this.form.LNAME = "";
    },
    clearMessage() {
      this.errorMessage = null;
      this.successMessage = null;
    },
    async subscribe(e) {
      if (this.disabled) return;
      this.disabled = true;
      const res = await $.ajax({
        type: "POST",
        url:
          "https://gmail.us20.list-manage.com/subscribe/post-json?u=5f31cedb4c663eb70bc448e21&amp;id=959bd72ae2&c=?",
        data: $(e.currentTarget).serialize(),
        dataType: "jsonp"
      });

      this.clearMessage();

      if (res.result === "success") {
        this.successMessage = res.msg;
        this.thanks = true;
        setTimeout(() => (this.thanks = false), 7000);
        this.clearForm();
      } else {
        this.errorMessage = res.msg;
        this.$vs.notify({
          time: 10000,
          title: "Error",
          text: res.msg,
          color: "danger",
          position: "top-right"
        });
        this.form.EMAIL = "";
        // _this.errorMessage = _this.errorMessage.substring(_this.errorMessage.indexOf('-') + 1, _this.errorMessage.length);
      }
      this.disabled = false;
    }
  }
};
</script>

<style lang="sass">
@import '@/assets/scss/vuesax/_variables.scss'
.footer-landing

  position: relative
  display: flex
  flex-wrap: wrap
  width: 100%
  // flex-direction: column
  // background: linear-gradient(180deg, #062947 0%, rgba(32, 71, 104, 0) 100%)
  text-align: center
  justify-content: center
  color: #fff
  padding: 15px
  &:before
    content: ''
    display: block
    position: absolute
    left: 0
    right: 0
    top: 0
    bottom: 0

    background-image: url('../../../assets/images/landing/earth-bottom.png')
    background-size:  2000px auto
    background-position: center 100%
    background-repeat: no-repeat
    // transform: rotate(180deg)
  &__thanks
    text-align: center
    &__title,
    &__subtitle
      font-family: $font-h
      font-style: normal
      font-weight: normal
      font-size: 24px
      line-height: 40px
  // padding-top: 136px
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
    margin-bottom: -24px
    font-family: $font-h
    font-style: normal
    font-weight: normal
    font-size: 75px
    line-height: 80px
    text-align: center
    letter-spacing: 0.01em
    max-width: 650px
    text-shadow: 0px 2px 1px rgba(0, 0, 0, 0.16)
    @media (max-width: 576px)
      font-size: 48px
      line-height: 48px

  &__subtitle
    position: relative
    font-size: 33px
    line-height: 80px
    font-family: $font-h
    font-style: normal
    font-weight: normal
    max-width: 650px
    text-shadow: 0px 2px 1px rgba(0, 0, 0, 0.16)
    @media (max-width: 576px)
      font-size: 22px
      line-height: 60px
  &__text
    font-family: $font-m
    font-size: 24px
    line-height: 32px
    display: inline-block
    max-width: 500px
    text-align: center
    letter-spacing: 0.01em
    margin-bottom: 40px
    text-shadow: 0px 2px 1px rgba(0, 0, 0, 0.16)
    @media (max-width: 576px)
      font-size: 18px
      line-height: 18px
  &__send
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
  &__form
    position: relative
    text-align: left
    color: #000
    max-width: 548px
    width: 100%

    padding: 48px
    border-radius: 32px
    
    //background-color: #fff
    *
      position: relative
    @media (max-width: 576px)
      padding: 30px

    &__row
      margin-bottom: 24px
      @media (max-width: 576px)
        margin-bottom: 5px
    &__label
      font-family: $font-h
      font-style: normal
      font-weight: normal
      font-size: 18px
      line-height: 40px
      color: #fff

    &__input
      font-family: $font-m
      border-radius: 32px
      width: 100%
      border-radius: 4px
      border: 1px solid $success
      font-size: 24px
      line-height: 64px
      padding: 0 15px
      color: #999
      background: #fff
      @media (max-width: 576px)
        line-height: 56px
    &__send
      display: inline-block
      font-family: $font-h
      font-style: normal
      font-weight: normal
      font-size: 24px
      line-height: 40px
      align-items: center
      text-align: center
      letter-spacing: 0.05em
      // color: #fff
      padding: 12px 15px
      background-color: $success
      cursor: pointer
      border-radius: 50px
      border: none
      width: 100%
      margin-top: 26px
  &__copyright
    width: 100%
    position: relative
    text-align: center
    font-size: 15px
    line-height: 40px
    margin: 20px 0

.email
  // position: fixed
  bottom: 56px
  left: 56px
  z-index: 100
  margin-bottom: 3rem
  margin-top: 1em
  @media (max-width: 576px)
    bottom: 24px
    left: 24px

  @media (min-width: 1920px)
    left: calc((100% - 1920px) / 2 + 56px)
</style>
