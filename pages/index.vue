<template>
  <div>
    <div class="container">
      <div class="profile">
        <div class="profile__box">
          <div class="profile__icon">
            <img class="profile__icon__item" src="http://pbs.twimg.com/profile_images/1320606686290141185/Glv-1X4W_normal.jpg" />
          </div>
        </div>
      </div>
      <div class="img">
        <div class="img__container" v-for="item in items['posts']" :key="item.id">
          <img class="img__item" v-bind:src="item.url" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  asyncData() {
    const items = require('~/assets/data.json')
    return {
      items
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
  height: 140px;
  top: 80px;
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
    position: relative;
    margin-top: 50px;
    width: 200px;
    height: 365px;
    border-radius: 10px;
    background: #f7f7f7;
    box-shadow:  6px 6px 12px #dedede, 
                -6px -6px 12px #ffffff;
  }
}
.img {
  width: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
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
@media screen and (max-width: 480px){
  .profile {
    width: 0px;
  }
  .img {
    &__container {
      width: 45%;
      height: 100px;
    }
  }
}
@media screen and (max-width: 896px) and (min-width: 481px){ 
  .profile {
    width: 200px;
  }
  .img {
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
  .img {
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
  .img {
    &__container {
      width: 31%;
      height: 200px;
    }
  }
}
</style>