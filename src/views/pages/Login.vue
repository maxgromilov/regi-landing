<!-- =========================================================================================
    File Name: Login.vue
    Description: Login Page
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->

<template>
    <div class="h-screen flex w-full bg-img vx-row no-gutter items-center justify-center" id="page-login">
        <div class="vx-col sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-3/5 sm:m-0 m-4">
            <!-- <vx-card>
                <div slot="no-body" class="full-page-bg-color"> -->
                    <div class="vx-row no-gutter justify-center items-center">
                        <!-- <div class="vx-col hidden lg:block lg:w-1/2">
                            <img src="@/assets/images/pages/login.png" alt="login" class="mx-auto">
                        </div> -->
                        <div class="vx-col sm:w-full md:w-full lg:w-1/2 d-theme-dark-bg rounded-lg">
                            <div class="p-8">
                                <div class="vx-card__title mb-8">
                                    <h4 class="mb-4">{{$t('login')}}</h4>
                                    <p>{{$t('welcomeBack')}}</p>
                                </div>
                                <vs-input
                                    icon="icon icon-user"
                                    icon-pack="feather"
                                    :label-placeholder="$t('email')"
                                    v-model="email"
                                    class="w-full no-icon-border"/>
                                
                                <vs-input
                                    type="password"
                                    icon="icon icon-lock"
                                    icon-pack="feather"
                                    :label-placeholder="$t('password')"
                                    v-model="password"
                                    class="w-full mt-6 no-icon-border" />

                                <div class="flex flex-wrap justify-between my-5">
                                    <div></div>
                                    <!-- <vs-checkbox v-model="checkbox_remember_me" class="mb-3">Remember Me</vs-checkbox> -->
                                    <router-link to="#">{{$t('forgotPassword')}}</router-link>
                                </div>
                                <vs-button :to="{name: 'signUp'}" type="border">{{$t('signUp')}}</vs-button>
                                <vs-button :to="{name: 'home'}" class="float-right">{{$t('login')}}</vs-button>
                            </div>
                        </div>
                    </div>
                <!-- </div>
            </vx-card> -->
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            email: '',
            password: '',
            checkbox_remember_me: false
        }
    }
}
</script>

<style lang="scss">
@import '@/assets/scss/vuesax/_variables.scss';
.bg-gradient {
  background: $success
}
#page-login {
    .social-login {
        .bg-facebook {
          background-color: #1551b1;
        }
        .bg-twitter {
          background-color: #00aaff;
        }
        .bg-google {
          background-color: #4285F4;
        }
        .bg-github {
          background-color: #333;
        }
    }
}
</style>
