<template>
  <div class="fa">
    <h2>父组件</h2>
    <ch :icon="iconf">
      <template v-slot:test="slotProps">
        <div>{{slotProps.cicon}}111</div>
      </template>
    </ch>
  </div>
</template>

<script>
import Ch from './ch'
export default {
  components:{
    Ch
  },
  data(){
    return {
      iconf:'父组件传子11111'
    }
  },
  
}
</script>

<style>

</style>