<template>
  <div class="top, display">
    <div class="left">

      <el-image class="image"
                title="点击查看详情"
                :src="image.relative_filepath_server"
                fit="fill"
                :preview-src-list="image.preview"
                lazy>
        <div slot="placeholder" class="image-slot">
          加载中<span class="dot">...</span>
        </div>
      </el-image>
    </div>

    <div class="right">
      <div>
        <!-- 分享按钮 -->
        <share-component class="share"></share-component>

        <el-button class="download button" @click.native="downloadImage">下载高清原图</el-button>
      </div>
      <div class="dispflex" style="margin-top: 80px;">
        <div class="dispflex-l">
          <i class="fa el-icon-view mrm fa-fw"></i>
          <span class="mrw views">{{ image.preview_count }}</span>
          <i class="fa el-icon-alarm-clock fa-fw mrm"></i>
          <span>{{ image.create_time }}</span>
        </div>
      </div>
      <el-divider></el-divider>
      <!-- 图片分类-->
      <div>
        <i class="el-icon-price-tag" style="margin-right: 8px;"></i>
        <el-tag class="tag" v-for="(tag, index) in image.categories" :key="index" size="mini">
          <a class="a" target="_self" :title="tag.label" @click="searchCategory(tag.href, tag.label)">
            {{ tag.label }}
          </a>
        </el-tag>
      </div>
      <div style="margin-top: 50px">
        <span >其它尺寸</span>
        <div class="properties" v-if="image.wallpapers.length > 0"
             v-for="(wallpaper, index) in image.wallpapers" :key="index">
          <div class="dispflex plw prw">
            <div class="txt-left">类型：{{ wallpaper.file_type }}</div>
            <div class="txt-left">大小：{{ wallpaper.size }}</div>
            <div class="txt-left">尺寸：{{ wallpaper.dimensions }}</div>
            <i class="el-icon-download" title="点击下载" @click="downloadWallpaper(wallpaper)"></i>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import ShareComponent from "./ShareComponent";
import {getThumbnailDetailApi, addWallpaperDownloadApi} from "@/api/rest/ImageApi";
import {downloadFile} from "@/api/commons";

export default {
  components: {
    ShareComponent
  },
  name: "DownloadImage",
  data() {
    return {
      image: {
        "filename": "t015d03c0ae16974bdc.jpg",
        "file_type": "unknown",
        "width": 3840,
        "wallpapers": [
          {
            "filename": "down",
            "file_type": "unknown",
            "width": 2560,
            "id": 11,
            "mdsum": "d41d8cd98f00b204e9800998ecf8427e",
            "filename_server": "down",
            "relative_filepath_server": "computerWallPaper/2023-12/14/down",
            "height": 1600
          },
          {
            "filename": "6528cc8f27496a194f574b01160cfe39.jpg",
            "file_type": "unknown",
            "width": 1440,
            "id": 12,
            "mdsum": "cfb2a5fb3396a126f9f220b11db63666",
            "filename_server": "6528cc8f27496a194f574b01160cfe39.jpg",
            "relative_filepath_server": "computerWallPaper/2023-12/14/6528cc8f27496a194f574b01160cfe39.jpg",
            "height": 900
          },
          {
            "filename": "64b3dbadec90ee1a6203e9cb2e8dc41b.jpg",
            "file_type": "unknown",
            "width": 1024,
            "id": 13,
            "mdsum": "e9c2c16fbbadae35a705b5eb4f53820f",
            "filename_server": "64b3dbadec90ee1a6203e9cb2e8dc41b.jpg",
            "relative_filepath_server": "computerWallPaper/2023-12/14/64b3dbadec90ee1a6203e9cb2e8dc41b.jpg",
            "height": 768
          },
          {
            "filename": "2521221be2cfab7734299c667254cb1d.jpg",
            "file_type": "unknown",
            "width": 800,
            "id": 14,
            "mdsum": "832b0dafbfb3bab7c09a885299e4b64b",
            "filename_server": "2521221be2cfab7734299c667254cb1d.jpg",
            "relative_filepath_server": "computerWallPaper/2023-12/14/2521221be2cfab7734299c667254cb1d.jpg",
            "height": 600
          },
          {
            "filename": "a2f4f9ca5e556b057de52ab0eaf42830.jpg",
            "file_type": "unknown",
            "width": 3840,
            "id": 15,
            "mdsum": "55c885132f494352289fc17e2027a4a1",
            "filename_server": "a2f4f9ca5e556b057de52ab0eaf42830.jpg",
            "relative_filepath_server": "computerWallPaper/2023-12/14/a2f4f9ca5e556b057de52ab0eaf42830.jpg",
            "height": 2160
          }
        ],
        "id": 3,
        "mdsum": "f1b194a4d700e9a43e8627499a9f0564",
        "categories": [
          {
            "label": "手镯",
            "href": "/category/shouzhuo"
          },
          {
            "label": "口红",
            "href": "/category/kouhong"
          },
          {
            "label": "模特",
            "href": "/category/mote"
          },
          {
            "label": "时尚",
            "href": "/category/shishang"
          }
        ],
        "filename_server": "t015d03c0ae16974bdc.jpg",
        "relative_filepath_server": "/api/static/computerWallPaper/thumbnail/2023-12/14/t015d03c0ae16974bdc.jpg",
        "height": 2160,
        "preview_count": 0,
        "create_time": '2023-20-20'
      }
    }
  },
  created() {
    this.image = {};
    // 当前页面的URL的参数
    let thumbnailId = this.$route.query.image;
    this.searchThumbnailById(thumbnailId);
  },
  methods: {
    // 搜索缩略图详情
    searchThumbnailById(thumbnailId) {
      getThumbnailDetailApi(thumbnailId).then(res => {
        this.image = res.data;
        this.image.preview = [this.image.relative_filepath_server]
        this.image.create_time = this.image.create_time.slice(0, 10)
        // 过滤无用图片
        this.image.wallpapers = this.image.wallpapers.filter(wallpaper => {
          let filename = wallpaper.filename;
          return filename.toLowerCase() !== 'down';
        });
        // 类型大小尺寸为原图的信息
        for (let i = 0; i < this.image.wallpapers.length; i++) {
          let wallpaper = this.image.wallpapers[i];
          let filename = wallpaper.filename;
          let imageType = wallpaper.file_type;
          if (imageType === "unknown" || imageType === null || imageType === undefined) {
            // 取文件名后缀
            if (filename.indexOf(".") !== -1) {
              let tmp = filename.split(".");
              imageType = tmp[tmp.length - 1];
            } else {
              imageType = "JPG";
            }
          }
          wallpaper.file_type = imageType.toUpperCase();
          // 大小
          wallpaper.size = wallpaper.size_ch;
          // 尺寸
          wallpaper.dimensions = `${wallpaper.width}x${wallpaper.height}`;
        }

      }).catch(err => {

      });
    },
    // 根据当前缩略图的width和height找出原图的数据
    getWallpaperData() {
      let width = this.image.width;
      let height = this.image.height;
      for (let i = 0; i < this.image.wallpapers.length; i++) {
        let wallpaper = this.image.wallpapers[i];
        if (wallpaper.width === width && wallpaper.height === height) {
          return wallpaper;
        }
      }
      return null;
    },
    // 下载原图时原图下载量加一
    addWallpaperDownloadCount(id) {
      addWallpaperDownloadApi(id);
    },
    // 下载原图
    downloadImage() {
      // 根据当前缩略图的width和height找出原图的数据
      let wallpaper = this.getWallpaperData();
      if (wallpaper !== null) {
        this.addWallpaperDownloadCount(wallpaper.id);
        downloadFile("/api/static/" + wallpaper.relative_filepath_server, wallpaper.filename);
      } else {
        alert("原图已丢失，刷新一下试试吧～");
      }
    },
    // 下载各尺寸的原图
    downloadWallpaper(wallpaper) {
      this.addWallpaperDownloadCount(wallpaper.id);
      downloadFile("/api/static/" + wallpaper.relative_filepath_server, wallpaper.filename);
    },
    // 标签搜索
    searchCategory(href, name) {
      let tmp = href.split("/");
      this.$router.push({name: 'Home', query: {category: tmp[tmp.length - 1], name: name}})
    }
  },
}
</script>

<style scoped>

.display {
  width: 86%;
  height: 100%;
  min-width: 1380px;
  max-width: 1580px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  display: flex;
  padding-top: 40px;
}

/* 左边图片区域大小 */
.left {
  width: 66%;
  height: 680px;
  background-color: #1f1f1f;
  position: relative;
  border-radius: 8px 0 0 8px;
  overflow: hidden;
  float: right;
  text-align: center;
  margin-bottom: 20px;
}
/* 左侧图片大小设置 */
.image {
  height: 680px;
  max-width: 100%;
  max-height: 100%;
}

/* 右边详情大小 */
.right {
  width: 34%;
  height: 680px;
  box-sizing: border-box;
  padding: 30px;
  background-color: #2a2a2a;
  border-radius: 0 8px 8px 0;
  overflow: hidden;
}

.dispflex-l {
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.mrm {
  margin-right: 10px !important;
}
.mrw {
  margin-right: 20px !important;
}

/* 分享按钮 */
.share {
  position: relative;
  float: left;
}

/* 所有按钮的共性 */
.button {
  font: 14px/1.5 'PingFang SC', 'Lantinghei SC', 'Microsoft YaHei', 'HanHei SC', 'Helvetica Neue', 'Open Sans', 'Arial', 'Hiragino Sans GB', '微软雅黑', 'STHeiti', 'WenQuanYi Micro Hei', 'SimSun', sans-serif;
  border: 0
}

/* 下载按钮 */
.download {
  float: right;
  background-color: #d30000;
  color: #ffffff;
}

/* 分割线设置 */
.el-divider--horizontal {
  background-color: #999999;
  margin-top: 20px;
}

/* 标签分类设置 */
.tag {
  background-color: #444444;
  color: inherit;
  border: 0;
  margin-right: 8px;
  margin-bottom: 8px;
  padding: 2px 6px;
  vertical-align: middle;
}

.el-tag--mini {
  height: 22px;
  line-height: 18px;
}

.tag:hover {
  background-color: #d30000;
}

.a {
  color: inherit;
  text-decoration: none;
}

/* 图片详情 */
.properties {
  margin-top: 8px;
  padding-top: 14px;
  padding-bottom: 14px;
  background-color: #222222;
  border-radius: 4px;
}
.dispflex {
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}
.plw {
  padding-left: 20px !important;
}
.prw {
  padding-right: 20px !important;
}
.txt-left {
  text-align: left;
}
</style>
