<template>
  <div class="cascader">
    <input type="text" class="input-wrapper" v-model="val">
    <template v-for="item in data">
      <!-- <cascader-item :key="item.value" v-if="!(item.children || []).length" :itemVal="item">{{ item.label }}</cascader-item> -->
      <re-item :key="item.value" :datas="item" @itemval="itemval" />
    </template>
  </div>
</template>

<script scoped>
export default {
  name: "Cascader",
   props: [
        "data",
    ],
  data() {
    return {
      val:'',
    };
  },
  methods:{
    itemval(itemval){
      this.val = itemval
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cascader {
  width: 200px;
}
</style>
