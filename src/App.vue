<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
//import { ElButton } from 'element-plus'
export default defineComponent({
  name: 'App',
  components: {
    //ElButton
  }
})
</script>

<style lang="less">

</style>
