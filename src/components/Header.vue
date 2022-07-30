<template>
  <div class="header">
    <div class="header-left">
      <div class="header-left__logo">
        <img src="@/assets/logo.png" alt="">
      </div>
      <div class="header-left__title">后台管理系统权限Demo实现</div>
    </div>
    <div class="header-right">
      <div class="header-right__info">
        <div class="header-right__info-name">{{ user.username }}</div>
      </div>
      <div class="header-right__logout">
        <el-button type="danger"  @click="logout">退出</el-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {reactive} from "vue"
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { ElMessageBox } from 'element-plus'

const router = useRouter()
const store = useStore()

const user = reactive({...store.state.user})

function logout() {
  ElMessageBox.confirm('你是否要退出登录?', '登出', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  }).then(() => {
    setTimeout(() => {
      sessionStorage.clear()
      router.push('/login')
      window.location.reload()
    }, 500)
  }).catch(( error:any ) => error)
}

</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 100%;
  background-color: #00BFFF;
  display: flex;
  justify-content: space-between;
  padding: 0 15px;
  box-shadow: 0 2px 5px #00BFFF;

  &-left {
    height: 100%;
    display: flex;
    align-items: center;

    &__logo {
      width: 80px;
      height: 100%;
      padding: 5px;

      &>img {
        width: 100%;
        height: 100%;
      }
    }

    &__title {
      font-size: 20px;
      color: #fff;
      text-shadow: 10px 10px rgba(25, 255, 255, .3);
    }
  }

  &-right {
    height: 100%;
    display: flex;
    align-items: center;

    &__info {
      &-name {
        color: #F0FFFF;
        font-size: 16px;
        margin-right: 15px;
      }
    }
  }
}
</style>
