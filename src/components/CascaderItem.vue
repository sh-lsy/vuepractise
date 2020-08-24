<template>
  <div class="cascader-item">
    <!-- <button>{{itemVal}}</button> -->
    <slot @click="valClick" :val="itemVal"></slot>
  </div>
</template>

<script>
export default {
  props:{   
    itemVal:{
      type:Object,
      default:() =>({})
    }
   },
  methods:{
    valClick(){
      console.log(1111111111)
      alert('11')
      // let val =this.itemVals
      // this.$emit('itemval', val)
    }
  }
}
</script>

<style scoped>
.cascader-item{
  height: 50px;
  width: 100%;
  text-align: center;
  line-height: 50px;
  background-color: #ccc;
}
.cascader-item:hover{
  background-color: rgb(58, 56, 56);
  color: #fff;
}
</style>