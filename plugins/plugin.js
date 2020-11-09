import Vue from 'vue'
import 'vue-burger-button/dist/vue-burger-button.css'
import BurgerButton from 'vue-burger-button'
import VueLazyLoad from "vue-lazyload"

Vue.component('burger-button', BurgerButton)
Vue.use(VueLazyLoad)

