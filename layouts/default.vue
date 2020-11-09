<template>
  <div>
    <div class="header">
      <h1>{{ isActive }}</h1>
      <div class="button">
        <div class="button__false" v-on:click="isActive = !isActive" v-bind:class="{button__true:isActive}">
          <span></span>
          <span></span>
          <span></span>
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
body {
  margin: 0;
  padding: 0;
}
.header {
  z-index: 10;
  width: 100%;
  background-color: white;
  position: fixed;
  top: 0;
  display: flex;
}
.container-box {
  z-index: 8;
  margin: 0 auto;
}
@media screen and (max-width: 480px){
  .header {
    height: 70px;
  }
  .container-box {
    padding-top: 70px;
    width: 100%; 
  }
}
@media screen and (max-width: 896px) and (min-width: 481px){ 
  .header {
    height: 70px;
  }
  .container-box {
    padding-top: 70px;
    width: 100%; 
  }
}
@media screen and (min-width: 897px){ 
  .header {
    height: 70px;
  }
  .container-box {
    padding-top: 70px;
    width: 95%;
  }
}
.button {
  margin: 10px 30px 0 auto;
  &__false {
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-tap-highlight-color: transparent;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    cursor:pointer;
    background-color:#eeeeee;
    width:60px;
    height:60px;
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
    span{
      background-color:lightcoral;
      box-shadow: 0px 0px 10px 0px rgba(240,128,128,0.3);
      width:35px;
      height:4px;
      border-radius:4px;
      margin:3px 0px 3px 0px;
      transition:margin 0.4s cubic-bezier(.79,.21,.06,.81),transform 0.4s cubic-bezier(.79,.21,.06,.81);
    }
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
</style>
