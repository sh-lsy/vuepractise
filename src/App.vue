<template>
  <div id="app">
    <input type="text" class="input-wrapper" v-model="val">
    <Cascader />
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data(){
    return{
      val: ''
    }
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
.input-wrapper{
  height: 30px;
  width: 200px;
}
</style>
