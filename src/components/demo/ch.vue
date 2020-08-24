<template>
  <div class="ch">
    <h2>子组件{{icon}}</h2>
    <slot name="test" :cicon='icon'></slot>
  </div>
</template>

<script>
export default {
  props:{
    icon:{
      type: String,
      default: '我是子组件'
    }
  },
  data(){
    return {
      icon1: 'test'
    }
  }
}
</script>

<style>

</style>