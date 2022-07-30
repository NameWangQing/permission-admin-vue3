<template>
  <div class="aside">
    <el-menu background-color="#00BFFF" text-color="#fff" class="el-menu-vertical-demo" @open="handleOpen"
      @close="handleClose">
      <el-sub-menu v-for="(item, idx) in menus" :key="idx" class="nav-title" :index="String(idx)">
        <template #title>
          <el-icon>
            <icon-menu />
          </el-icon>
          <span>{{ item.authName }}</span>
        </template>
        <el-menu-item v-for="(subitem, idx) in item.children" :key="idx"
          @click="$router.push({ path: subitem.path, query: { name: subitem.authName } })">{{ subitem.authName }}
        </el-menu-item>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue"
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import {
  Menu as IconMenu,
} from '@element-plus/icons-vue'

const router = useRouter()
const store = useStore()

const user = reactive({ ...store.state.user })

const menus = reactive([...user.rights])
console.log(menus);


const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style lang="scss" scoped>
.nav-title {
  & i {
    color: #fff;
  }

  .el-menu-item {
    color: #fff;
  }
}
</style>
