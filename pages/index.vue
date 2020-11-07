<template>
  <div class="container">
    <div class="profile">
      <h1>test</h1>
    </div>
    <div class="img">
      <div class="img__container" v-for="item in items['posts']" :key="item.id">
        <img class="img__item" v-bind:src="item.url" />
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
  background-color: red;
  width: 20%;
}
.img {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  &__container {
    margin: 5px;
    width: 400px;
    height: 300px;
    border-radius: 10px;
    background: #f7f7f7;
    box-shadow:  6px 6px 12px #dedede, 
                -6px -6px 12px #ffffff;
  }
  &__item {
    display: block;
    margin: 8px;
    width: 384px;
    height: 284px;
    border-radius: 10px;
    object-fit: cover;
  }
}
</style>