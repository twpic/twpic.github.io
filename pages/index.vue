<template>
  <div>
    <div class="container">
      <div class="profile">
        <div class="profile__box">
          <div class="profile__text">
            <div class="profile__text__name">yagu</div>
            <div class="profile__text__id">@yagu_ohuton</div>
            <div class="profile__text__detail">d!国民(納税)<br />@ch垢(@yagu_chtw)<br />イラストは勉強中</div>
          </div>
          <div class="profile__icon">
            <img class="profile__icon__item" src="http://pbs.twimg.com/profile_images/1320606686290141185/Glv-1X4W.jpg" />
          </div>
        </div>
      </div>
      <no-ssr>
        <image-lightbox ref="lightbox" :media="images" :show-light-box="false" :show-thumbs="false" :showFooterCount="false"></image-lightbox>
      </no-ssr>
      <div class="image">
        <div class="image__container" v-for="item in items['posts']" :key="item.id">
          <div>
            <img class="image__item" v-bind:src="item.url" v-on:click="show(item.url)"/>
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
      images: [
        { srcset: ''},
      ],
      url: ''
    }
  },
  components: {
  },
  asyncData() {
    const items = require('~/assets/data.json')
    return {
      items
    }
  },
  methods: {
    show(url) {
      this.images[0]['srcset']=url;
      this.$refs.lightbox.showImage(0);
    }
  }
}
</script>
<style lang="scss" scoped>
.container {
  display: flex;
}
.profile {
  position: -webkit-sticky;
  position:sticky;
  height: 300px;
  top: 80px;
  &__text {
    padding: 60px 0 0 30px;
    font-family: 'Roboto', sans-serif;
    &__name {
      font-size: 30px;
      text-shadow: 2px 2px 4px rgba(0,0,0,.3), -2px -2px 4px rgba(255,255,255,1);
    }
    &__id {
      font-size: 16px;
      text-shadow: 2px 2px 4px rgba(0,0,0,.3), -2px -2px 4px rgba(255,255,255,1);
    }
    &__detail {
      margin-top: 20px;
      font-size: 14px;
    }
  }
  &__icon {
    position: absolute;
    top: -40px;
    margin-left: 25px;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: #f7f7f7;
    box-shadow: inset 5px 5px 10px #d9d9d9,
    inset -5px -5px 10px #ffffff;
    &__item {
      margin: 9px auto;
      display: block;
      width: calc(100% - 18px);
      height: calc(100% - 18px);
      border-radius: 50%;
      object-fit: cover;
    }
  }
  &__box {
    top: 50px;
    position: relative;
    width: 200px;
    height: 263px;
    border-radius: 10px;
    background: #f7f7f7;
    box-shadow:  6px 6px 12px #dedede,
    -6px -6px 12px #ffffff;
  }
}
.image {
  width: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  margin-left: 20px;
  &__container {
    position: relative;
    margin: 5px;
    border-radius: 10px;
    background: #f7f7f7;
    box-shadow:  6px 6px 12px #dedede,
    -6px -6px 12px #ffffff;
  }
  &__item {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    display: block;
    width: calc(100% - 14px);
    height: calc(100% - 14px);
    border-radius: 10px;
    object-fit: cover;
  }
}
.modal {
  background-color: gray;
  &__img {
  }
}
@media screen and (max-width: 800px){
  .profile {
    display: none;
  }
  .image {
    &__container {
      width: 45%;
      height: 100px;
    }
  }
}
@media screen and (max-width: 896px) and (min-width: 801px){
  .profile {
    width: 200px;
  }
  .image {
    &__container {
      width: 45%;
      height: 100px;
    }
  }
}
@media screen and (max-width: 1024px) and (min-width: 897px){
  .profile {
    width: 250px;
  }
  .image {
    &__container {
      width: 48%;
      height: 200px;
    }
  }
}
@media screen and (min-width: 1025px) {
  .profile {
    width: 250px;
  }
  .image {
    &__container {
      width: 31%;
      height: 200px;
    }
  }
}
</style>
