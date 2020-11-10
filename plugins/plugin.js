import Vue from 'vue'
import 'vue-burger-button/dist/vue-burger-button.css'
import BurgerButton from 'vue-burger-button'
import 'vue-image-lightbox/dist/vue-image-lightbox.min.css'
import VueLazyLoad from 'vue-lazyload'
import LightBox from 'vue-image-lightbox'


Vue.component('burger-button', BurgerButton)
Vue.component('vue-lazy', VueLazyLoad)
Vue.component('image-lightbox', LightBox)

