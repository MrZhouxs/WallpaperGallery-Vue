<template>
  <div>
    <el-input
      class="searchInput"
      size="medium"
      @keyup.enter.native="searchImage"
      placeholder="搜索您喜欢的壁纸图片"
      prefix-icon="el-icon-search"
      v-model="searchContent">
    </el-input>

    <!-- 搜索图片的子组件 -->
    <image-component :searchImageKey="searchImageKey"
                     v-on:listenChildrenData="listenChildrenDataEvent"></image-component>

  </div>
</template>

<script>
import ImageComponent from "./image/ImageComponent";

export default {
  name: "Home",
  components: {ImageComponent},
  data() {
    return {
      // 搜索框的值
      searchContent: null,
      // 传递给子组件的变量值
      searchImageKey: null,
    }
  },
  // 监听路由参数的变化
  watch: {
    "$route.query.category": {
      // immediate页面加载完后监听
      immediate: true,
      // 深度监听路由
      deep: true,
      handler() {
        this.watchRouter();
      }
    }
  },
  methods: {
    searchImage() {
      // 将搜索框的值给到子组件
      this.searchImageKey = this.searchContent;
    },

    watchRouter() {
      this.searchContent = null;
      let category = this.$route.query.category;
      if (category !== undefined) {
        this.searchContent = this.$route.query.name;
        this.searchImage();
      }
    },
    // 子组件传值事件
    listenChildrenDataEvent(data) {
      this.searchContent = data;
    }
  },
}
</script>

<style scoped>
/* 搜索框的位置 */
.searchInput {
  position: absolute;
  margin-top: -55px;
  width: 225px;
  margin-left: 205px;
}

/* 搜索框的圆角 */
.searchInput >>> .el-input__inner {
  /* 搜索框圆角 */
  border-radius: 16px;
  background-color: #2a2a2a;
  color: #666666;
  /* 无边框 */
  border: 0;
  /* 提示词左移 */
  text-indent: 15px;
}
</style>
