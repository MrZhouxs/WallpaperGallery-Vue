<template>
  <div>
    <div class="imageView">
      <el-row :gutter="10">
        <el-col :span="6" v-for="(image, index) in images" :key="index" style="margin-bottom: 10px;">
          <el-card :body-style="{ padding: '0px', height: '100%', position: 'relative' }" shadow="hover">
            <div>
              <div style="z-index: 999; position: absolute; top: -2px;">
                <span class="size-span">{{ image.width }}x{{ image.height }}</span>
              </div>
              <div class="download" style="z-index: 999; position: absolute; right: 0; top: -2px;">
                                <span class="download-span">
                                    <a target="_blank" :href="image.relative_filepath_server" download>保存</a>
                                </span>
              </div>
              <div style="margin: 0; padding: 0; position: relative">
                <a @click="imageResolution(image.id)">
                  <el-image class="image"
                            title="点击查看详情"
                            :src="image.relative_filepath_server"
                            fit="fill"
                            lazy>
                    <div slot="placeholder" class="image-slot">
                      加载中<span class="dot">...</span>
                    </div>
                  </el-image>
                </a>
              </div>
            </div>
            <div class="oneLineText">
              <el-link v-for="(category, key) in image.categories" :key="key"
                       style="margin-right: 5px"
                       @click.native="searchCategory(category.href, category.label)">
                {{ category.label }}
              </el-link>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>

    <!-- 分页功能 -->
    <el-pagination
      :hide-on-single-page="true"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="1"
      :page-sizes="[16, 32, 64, 128]"
      :page-size="10"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
  </div>
</template>

<script>
import {getImageListApi} from "@/api/rest/ImageApi";
import {string2int} from "@/api/commons";

export default {
  name: "ImageComponent",
  props: {
    // 接收父组件传递的值
    searchImageKey: String,
  },
  data() {
    return {
      images: [
        {
          "filename": "t01409d4a62e0210249.jpg",
          "file_type": "unknown",
          "width": 3840,
          "id": 1,
          "mdsum": "66f4b46429426d2fddf3decb30283132",
          "categories": [
            {
              "label": "锅盖",
              "href": "/category/guogai"
            },
            {
              "label": "接收器",
              "href": "/category/jieshouqi"
            },
            {
              "label": "雷达",
              "href": "/category/leida"
            }
          ],
          "url": "http://p5.qhimg.com/bdr/__85/t01409d4a62e0210249.jpg",
          "filename_server": "t01409d4a62e0210249.jpg",
          "relative_filepath_server": "computerWallPaper/thumbnail/2023-12/12/t01409d4a62e0210249.jpg",
          "height": 2160
        }
      ],
      // 记录当前是多少页
      page: 0,
      // 默认一页展示多少条数据
      size: 16,
      // 分页的总数
      total: 40,
      // 是否监听到的值
      isWatched: false,
    }
  },
  // 监听值的变换
  watch: {
    // 监听父组件搜索框的值的变换
    searchImageKey: {
      // immediate为true时，先监听到数据，然后再执行created的方法
      immediate: true,
      deep: true,
      handler: function (newVal, oldVal) {
        if (newVal !== null && newVal !== undefined) {
          this.isWatched = true;
          const params = {
            // 搜索出新的结果默认从第一页开始展示
            page: 0,
            size: this.size,
            key: newVal
          };
          this.getImageList(params);
        }
      }
    }
  },
  created() {
    // 初始化清除假数据
    this.images = [];
    if (!this.isWatched) {
      this.init();
    }
  },
  methods: {
    init() {
      // 页面初始化时获取缩略图数据
      const params = {
        page: this.page,
        size: this.size
      }
      this.getImageList(params);
    },
    // 通过API获取缩略图
    getImageList(params) {
      getImageListApi(params).then(res => {
        this.images = res.data;
        this.total = string2int(res.headers['x-total-count']);
      }).catch(err => {
        console.log(err);
      });
    },
    // 图片详情页
    imageResolution(resolution) {
      this.$router.push({
        name: 'ThumbnailDetail',
        query: {
          image: resolution
        },
      });
    },
    // 以下为分页功能
    handleSizeChange(size) {
      // pageSize 改变时会触发，即用户选择每页展示多少条数据时触发
      const params = {
        // 减去1是后台默认开始页从0开始
        page: this.page,
        size: size
      }
      this.getImageList(params);
    },
    handleCurrentChange(page) {
      // 用户选择当前的分页，page的值为当前分页数
      const params = {
        // 减去1是后台默认开始页从0开始
        page: page - 1,
        size: this.size
      }
      this.getImageList(params);
    },
    // 标签搜索
    searchCategory(href, name) {
      const params = {
        // 搜索出新的结果默认从第一页开始展示
        page: 0,
        size: this.size,
        key: name
      };
      this.getImageList(params);
      this.$emit("listenChildrenData", name);
    }
  },
}
</script>

<style scoped>
/* 让el-image占满el-card */
.image {
  width: 100%;
  display: block;
  height: 250px;
}

/* 让div只展示一行，多余字以...展示 */
.oneLineText {
  display: inline-block;
  /* 强制不换行 */
  white-space: nowrap;
  /* 左移5px */
  padding-left: 5px;
  /* 固定宽度 */
  width: 100%;
  /* 隐藏超出部分 */
  overflow: hidden;
  /* 显示... */
  text-overflow: ellipsis;
}

/* div设置鼠标hover: 将光标变为小手 */
.download:hover, .image:hover {
  cursor: pointer;
}

/* 图片尺寸和下载按钮的设置 */
.size-span, .download-span {
  color: #fafafa;
  font-weight: 700;
  background-color: rgba(50, 50, 50, .25);
  font-size: 9pt;
  border-radius: .5rem;
  padding: 0 4px;
}

/* 去掉a标签的CSS样式*/
a {
  color: #fafafa;
  text-decoration: none;
}

a:link {
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}

a:visited {
  text-decoration: none;
}

a:active {
  text-decoration: none;
}

a:focus {
  text-decoration: none;
}
</style>
