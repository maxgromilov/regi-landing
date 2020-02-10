<!-- =========================================================================================
    File Name: SignUp.vue
    Description: Sign Up Page
    ----------------------------------------------------------------------------------------
    Item Name: Vuesax Admin - VueJS Dashboard Admin Template
      Author: Pixinvent
    Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
    <div class="h-screen flex w-full bg-img vx-row no-gutter items-center justify-center" id="page-login">
        <div class="vx-col sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-3/5 sm:m-0 m-4">
            
                    <div class="vx-row no-gutter justify-center items-center">
                        <!-- <div class="vx-col hidden lg:block lg:w-1/2">
                            <img src="@/assets/images/pages/login.png" alt="login" class="mx-auto">
                        </div> -->
                        <div class="vx-col sm:w-full md:w-full lg:w-1/2 d-theme-dark-bg rounded-lg">
                            <div class="p-8">
                                <div class="vx-card__title mb-8">
                                    <h4 class="mb-4">{{$t('signUp')}}</h4>
                                </div>
                                <vs-input
                                    icon="icon icon-user"
                                    icon-pack="feather"
                                    :label-placeholder="$t('fullName')"
                                    v-model="email"
                                    class="w-full no-icon-border"/>
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

                                <vs-input
                                    type="password"
                                    icon="icon icon-lock"
                                    icon-pack="feather"
                                    :label-placeholder="$t('password')"
                                    v-model="password"
                                    class="w-full mt-6 no-icon-border" />

                                <div class="flex flex-wrap justify-between my-5"></div>

                                <vs-button :to="{name: 'login'}" type="border">{{$t('login')}}</vs-button>
                                <vs-button :to="{name: 'home'}" class="float-right">{{$t('signUp')}}</vs-button>
                            </div>
                        </div>
                    </div>

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
  background-color: $success;
  // background: linear-gradient(180deg, #204768 0%, #508485 33.85%, #508485 53.58%, #204768 100%)  
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
