<template>
  <div class="top-bar">
    <el-input placeholder="请输入内容，按回车键搜索..." @keydown.enter.native="handleSearch" v-model="inputValue">
      <template slot="append">
       搜索
      </template>
    </el-input>
    <el-button v-permission.disabled="!rights.includes('add')" type="primary" @click="$emit('show')">添加商品</el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      inputValue: '',
      rights: []
    }
  },
  methods: {
    handleSearch () {
      this.$emit('handleSearch', this.inputValue)
    }
  },
  created () {
    this.rights = this.$route.meta.rights
  }
}
</script>

<style lang="scss" scoped>
.top-bar {
  .el-input {
    width: 300px;
  }
  .el-button {
    margin-left: 15px;
  }
}
</style>