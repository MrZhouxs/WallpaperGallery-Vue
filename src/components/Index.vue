<template>
  <div class=".page-component__scroll top">
    <!-- Backtop 回到顶部 -->
    <el-backtop title="回到顶部"></el-backtop>

    <el-container>
      <el-main>
<!--        <div class="block" style="float: left; position: absolute; transform: translate(-50%, 50%);">-->
<!--          <el-avatar :size="30" :src="this.logo">-->
<!--          </el-avatar>-->
<!--        </div>-->
        <el-menu :default-active="$route.path" mode="horizontal" router
                 background-color="#1B1B1B"
                 text-color="#fff"
                 active-text-color="#ffd04b"
                 style="width: 100%;">
          <el-menu-item index="/home">
            <span slot="title">首页</span>
          </el-menu-item>
          <el-menu-item index="/about" style="float: right">关于</el-menu-item>
        </el-menu>
      </el-main>

    </el-container>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: "Index",
  data() {
    return {
      logo: require("@/assets/logo.png"),
    }
  },
}
</script>

<style scoped>
.top {
  width: 80%;
  text-align: center;
  margin-left: 10%;
}
/* 导航栏的内边距 */
.el-card__body, .el-main {
  padding: 10px;
}

/* 去掉导航栏的下划线 */
.el-menu.el-menu--horizontal {
   border-bottom: none;
}

</style>
