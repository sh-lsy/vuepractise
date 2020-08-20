<template>
  <div>
    <more-item>
      <template #title>{{ datas.label }}</template>
      <template v-for="c of datas.children">
        <cascader-item :key="c.value" v-if="!c.children">{{c.label}}</cascader-item>
        <re-item v-else :key="c.value" :datas='c'/>
      </template>
    </more-item>
  </div>
</template>

<script>
export default {
  props:{
    datas:{
      type:Object,
      default: () => {}
    }
  }
};
</script>

<style>
</style>