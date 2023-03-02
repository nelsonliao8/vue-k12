<template>
  <div class="logo">
    <img :src="require('../../../dist/_assets'+item.slice(1))" alt="" v-for="(item,index) in fileList" :key="index" />
  </div>
</template>
<script>
export default {
  name: 'Demo',
  data () {
    return {
      fileList: [],
    };
  },
  mounted() {
       // 通过函数获取数据
       const files= require.context("@/_assets",true,/\.*\.jpg|jpeg|png$/).keys();
       this.fileList =files;
  },
};
   
</script>
