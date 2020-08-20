<template>
  <div class="more-item" @mouseenter="showItem" @mouseleave="hideItem">
    <div class="title">
      <slot name="title"></slot>
      <span class="icon">&gt;</span>
    </div>
    <div class="more" v-show="moreShow">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      isShow:false
    }
  },
  methods:{
    showItem(){
      this.isShow = true
    },
    hideItem(){
      this.isShow = false
    }
  },
  computed:{
    moreShow() {
      return this.isShow
    }
  }
};
</script>

<style scoped>
.more-item {
  position: relative;
}
.title {
  position: relative;
  width: 200px;
  text-align: center;
  line-height: 50px;
  background-color: #ccc;
}
.title:hover{
  background-color: rgb(58, 56, 56);
  color: #fff;
}
.icon{
  position: absolute;
  right:20px;
}
.more{
  position: absolute;
  left: 100%;
  width: 100%;
  top: 0;
  background-color: #ccc;
  border: 1px solid #f6f6f6;
}
</style>