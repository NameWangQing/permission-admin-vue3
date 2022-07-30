<template>
  <div class="login">
    <el-form ref="ruleFormRef" :model="userData" :rules="rules" status-icon label-width="120px" class="demo-ruleForm"
      v-loading="isLogin">
      <h2>用户登录</h2>
      <el-form-item label="用户名：" prop="username">
        <el-input v-model="userData.username" type="username" autocomplete="off" />
      </el-form-item>
      <el-form-item label="密&emsp;码：" prop="password">
        <el-input v-model="userData.password" type="password" autocomplete="off" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm(ruleFormRef)">Submit</el-button>
        <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import type { FormInstance } from 'element-plus'
import { login } from "@/api/user"
import { ElMessage } from 'element-plus'

const router = useRouter()
// const route = useRoute()
const store = useStore()

const ruleFormRef = ref<FormInstance>()
let isLogin = ref<boolean>(false)
const userData = reactive({
  username: '',
  password: '',
})

const rules = reactive({
  username: [
    { required: true, min: 3, max: 18, message: '请输入3到18位的用户名', trigger: 'blur' }
  ],
  password: [
    { required: true, min: 3, max: 18, message: '请输入3到18位的密码', trigger: 'blur' }
  ]
})

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      isLogin.value = true;
      login({
        username: userData.username,
        password: userData.password
      }).then((res: any) => {
        isLogin.value = false;
        console.log(res);

        if (!res.data) {
          ElMessage.error('用户名或密码错误！')
          return false;
        }

        store.commit("setUser", res.data)
        ElMessage.success('Oops, this is a error message.')
        // initDynamicRouter()
        sessionStorage.setItem('v-user', JSON.stringify(res.data))
        sessionStorage.setItem('v-encryp', encodeURIComponent(JSON.stringify(res.data)))
        // router.replace('/')
        router.push('/')
      })
    } else {
      console.log('error submit!')
      return false
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}

</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;
  background: skyblue;
  display: flex;
  justify-content: center;
  align-items: center;

  .el-form {
    padding: 15px 70px 0 70px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 10px;
    box-shadow: 5px 5px 10px rgba(255, 255, 255, .5);

    h2 {
      margin-bottom: 35px;
      text-shadow: 10px 10px 2px #ccc;
      ;
    }

    .el-input {
      width: 200px;
    }

    label {
      width: 50px;
      display: inline-block;
      text-align: justify;
      text-align-last: justify;
    }

    .el-form-item {
      width: 100%;
      text-align: right;

      & .el-form-item__error {
        left: 69px;
      }
    }
  }
}
</style>