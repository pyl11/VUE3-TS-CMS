<template>
  <div class="login-acconut">
    <el-form
      label-width="60px"
      :rules="rules"
      :model="account"
      ref="formRef"
      status-icon
    >
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" />
      </el-form-item>
    </el-form>
  </div>
</template>
  
  <script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import { rules } from "../config/account-config";
import { ElForm } from "element-plus";
export default defineComponent({
  setup() {
    const account = reactive({
      name: "",
      password: "",
    });
    const formRef = ref<InstanceType<typeof ElForm>>();
    const loginAction = () => {
      if (formRef.value) {
        console.log(formRef.value)
        formRef.value?.validate((valid) => {
          if (valid === true) {
            console.log("开始账号登录！");
          } else {
            console.log("请输入正确的账号密码");
          }
        });
      }
    };
    return {
      account,
      rules,
      loginAction,
      formRef,
    };
  },
});
</script>
  
  <style scoped lang="less"></style>
  