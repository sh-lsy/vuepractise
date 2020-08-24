<template>
  <div>
    <more-item>
      <template #title>{{ datas.label }}</template>
      <template v-for="c of datas.children">
        <cascader-item :key="c.value" v-if="!c.children" :itemVal="c" v-slot='test' @click="itemClick(c)">{{c.label}}{{test.val.value}}</cascader-item>
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
      default: () => ({})
    }
  },
  methods:{
    itemClick(val){
      console.log(1)
      this.$emit('itemval', val)
    }
  }
};
</script>

<style>
</style>