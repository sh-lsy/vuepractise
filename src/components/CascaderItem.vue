<template>
  <div class="cascader-item">
    <slot></slot>
  </div>
</template>

<script>
export default {

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