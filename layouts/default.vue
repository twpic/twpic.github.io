<template>
  <div>
    <div class="header">
      <div class="title">yaguのお絵かき部屋</div>
      <div class="sp__button">
        <div class="sp__button__false" v-on:click="isActive = !isActive" v-bind:class="{sp__button__true:isActive}">
          <img v-if="isActive===false" src="~/assets/icon_profile.png"/>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
    <div class="sp__profile" v-bind:class="{sp__profile_true:isActive}">
      <div v-if="isActive" class="sp__profile__box">
        <div class="sp__profile__text">
          <div class="sp__profile__text__name">yagu</div>
          <div class="sp__profile__text__id">@yagu_ohuton</div>
          <div class="sp__profile__text__detail">d!国民(納税)<br />@ch垢(@yagu_chtw)<br />イラストは勉強中</div>
        </div>
        <div class="sp__profile__icon">
          <img class="sp__profile__icon__item" src="http://pbs.twimg.com/profile_images/1327235140553035777/nz4oX2bi.jpg" />
        </div>
      </div>
    </div>
    <div class="container-box">
      <Nuxt />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isActive: false
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
html,body {
  margin: 0;
}
html {
  background-color: #f2f3f7;
}
.header {
  z-index: 10;
  width: 100%;
  top: 0;
  position: fixed;
  display: flex;
  background-color: #f2f3f7;
  box-shadow: -6px -10px 20px 0;
}
.title {
  margin: auto 0;
  font-family: 'Roboto', sans-serif;
  font-size: 1.5rem;
  color: dimgray;
  font-weight: 900;
  text-shadow: 2px 2px 4px rgba(0,0,0,.3), -2px -2px 4px rgba(255,255,255,1);
}
.container-box {
  z-index: 8;
  margin: 0 auto;
}
@media screen and (max-width: 800px){
  .title {
    margin-left: 8%;
  }
  .header {
    height: 70px;
  }
  .container-box {
    padding-top: 80px;
    width: 100%;
  }
}
@media screen and (max-width: 896px) and (min-width: 801px){
  .title {
    margin-left: 5%;
  }
  .header {
    height: 70px;
  }
  .sp {
    &__button, &__profile {
      display: none;
    }
  }
  .container-box {
    padding-top: 80px;
    width: 100%;
  }
}
@media screen and (min-width: 897px){
  .title {
    margin-left: 5%;
  }
  .header {
    height: 70px;
  }
  .sp {
    &__button, &__profile {
      display: none;
    }
  }
  .container-box {
    padding-top: 80px;
    width: 95%;
  }
}
.sp {
  &__profile {
    z-index: 9;
    background-color: #f2f3f7;
    transition: .5s;
    &__text {
      padding-top: 60px;
      font-family: 'Roboto', sans-serif;
      text-align: center;
      &__name {
        font-size: 30px;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, .3), -2px -2px 4px rgba(255, 255, 255, 1);
      }
      &__id {
        font-size: 16px;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, .3), -2px -2px 4px rgba(255, 255, 255, 1);
      }
      &__detail {
        margin-top: 20px;
        font-size: 14px;
      }
    }
    &__icon {
      position: absolute;
      top: -40px;
      margin-left: calc(50% - 50px);
      width: 100px;
      height: 100px;
      border-radius: 50%;
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
      margin: 120px auto 0 auto;
      opacity: 0;
      animation: 0.8s fadeIn forwards;
      -webkit-animation: 0.8s fadeIn forwards;
      position: relative;
      width: 85%;
      height: 250px;
      border-radius: 10px;
      box-shadow:  6px 6px 12px #dedede,
                  -6px -6px 12px #ffffff;
    }
    @keyframes fadeIn {
      from {opacity: 0;}
      to {opacity: 1;}
    }
    @-webkit-keyframes fadeIn {
      from {opacity: 0;}
      to {opacity: 1;}
    }
  }
  &__profile_true {
    position: -webkit-sticky;
    position:sticky;
    height: 320px;
    top: 69px;
  }
  &__button {
    margin: 7px 7% 0 auto;
    &__false {
      -webkit-tap-highlight-color: rgba(0,0,0,0);
      -webkit-tap-highlight-color: transparent;
      display:flex;
      align-items:center;
      justify-content:center;
      flex-direction:column;
      cursor:pointer;
      background-color:#eeeeee;
      width:55px;
      height:55px;
      border-radius:10px;
      box-shadow: -7px -7px 20px 0px #fff9,
                  -4px -4px 5px 0px #fff9,
                  7px 7px 20px 0px #0002,
                  4px 4px 5px 0px #0001,
                  inset 0px 0px 0px 0px #fff9,
                  inset 0px 0px 0px 0px #0001,
                  inset 0px 0px 0px 0px #fff9,
                  inset 0px 0px 0px 0px #0001;
      transition:box-shadow 0.6s cubic-bezier(.79,.21,.06,.81);
      span:nth-child(2){
        transform-origin:50% 50%;
      }
    }
    &__true {
      box-shadow: 0px 0px 0px 0px #fff9,
                0px 0px 0px 0px #fff9,
                0px 0px 0px 0px #0001,
                0px 0px 0px 0px #0001,
                inset -7px -7px 20px 0px #fff9,
                inset -4px -4px 5px 0px #fff9,
                inset 7px 7px 20px 0px #0003,
                inset 4px 4px 5px 0px #0001;
      span{
        background-color: #4b4b4b;
        box-shadow: 0px 0px 10px 0px rgba(240,128,128,0.3);
        width:35px;
        height:4px;
        border-radius:4px;
        margin:3px 0px 3px 0px;
        transition:margin 0.4s cubic-bezier(.79,.21,.06,.81),transform 0.4s cubic-bezier(.79,.21,.06,.81);
        margin:-2px;
      }
      span:nth-child(1){
        transform:rotate(-45deg);
      }
      span:nth-child(2){
        transform:scale(0)
      }
      span:nth-child(3){
        transform:rotate(45deg)
      }
    }
  }
}
</style>
