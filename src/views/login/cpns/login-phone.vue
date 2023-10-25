<template>
  <div class="login-acconut">
    <el-form label-width="70px" :rules="rules" :model="phone" ref="formRef">
      <el-form-item label="手机号" prop="number">
        <el-input v-model="phone.number" />
      </el-form-item>
      <el-form-item label="验证码" prop="verifyCode">
        <div class="get-code">
          <el-input v-model="phone.verifyCode" />
          <el-button type="primary" class="get-button">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>
    
<script lang="ts">
import { defineComponent, reactive ,ref} from "vue";
import { rules } from "../config/phone-config";
import {ElForm} from 'element-plus'
export default defineComponent({
  setup() {
    const phone = reactive({
      number: "",
      verifyCode: "",
    });
    //正则验证
    const formRef=ref<InstanceType <typeof ElForm>>()
    const loginAction=()=>{
        formRef.value?.validate((valid)=>{
            if(valid===true){
                console.log("开始手机号登录！")
            }else{
                console.log("请输入正确的手机号或验证码")
            }
        })
    }
    return {
      phone,
      rules,
      formRef,
      loginAction
    };
  },
});
</script>
    
<style scoped lang="less">
.get-code {
  display: flex;
}
.get-button {
  margin-left: 10px;
}
</style>
    