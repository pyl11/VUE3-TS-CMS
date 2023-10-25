<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
 
      <el-tabs stretch v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane label="账号登陆" name="first"><LoginAccount ref="accountRef"/></el-tab-pane>
        <el-tab-pane label="手机登录" name="second"><LoginPhone ref="phoneRef"/></el-tab-pane>
      </el-tabs>

    <div class="account-control">
        <el-checkbox v-model="keepPassword">记住密码</el-checkbox>
        <el-link type="primary">忘记密码</el-link>
    </div>

    <el-button type="primary" class="login-btn" @click="handleLoginClick">立即登录</el-button>
  </div>
</template>

<script lang="ts">
//e-tabs
import { defineComponent,ref } from "vue";
import type { TabsPaneContext } from "element-plus";

import LoginAccount from './login-account.vue'
import LoginPhone from './login-phone.vue'

export default defineComponent({
    components:{
        LoginAccount,
        LoginPhone
    },
  setup() {
    const activeName = ref("first");
    const keepPassword=ref(false)
    const handleClick = (tab: TabsPaneContext, event: Event) => {
      console.log(tab, event);
    };

    const accountRef=ref<InstanceType <typeof LoginAccount>>()
    const phoneRef=ref<InstanceType<typeof LoginPhone>>()
    const handleLoginClick=()=>{
        if(activeName.value==='first'){
            accountRef.value?.loginAction()
        }else{
            phoneRef.value?.loginAction()
        }   
    }

    return {
      activeName,
      handleClick,
      keepPassword,
      handleLoginClick,
      accountRef,
      phoneRef
    };
  },
});
</script>

<style scoped lang="less">
.login-panel{
    width: 320px;
    margin-bottom: 160px;
}
.title{
    text-align:center;
}
.account-control{
    margin: 5px;
    display: flex;
    justify-content: space-between;
}
.login-btn{
    margin: 5px;
    width: 100%;
    height: 40px;
}
</style>