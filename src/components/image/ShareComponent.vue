<template>
  <div>
    <el-button class="button" icon="el-icon-share" @click.native="shareQrCode" circle></el-button>

    <div class="shareCont">
      <a data-shareid="copyUrl" class="copy" title="复制链接" data-copyval="https://www.3gbizhi.com/wallDM/5227.html" href="javascript:;" style="opacity: 0.65;"><i class="fa fa-fw fa-chain"></i></a>
      <a data-shareid="weibo" target="_blank" title="分享到微博" href="http://service.weibo.com/share/share.php?url=https://www.3gbizhi.com/wallDM/5227.html&amp;title=%E8%92%99%E7%9D%80%E7%9C%BC%E7%BA%B1%EF%BC%8C%E8%BA%AB%E7%9D%80%E9%BB%91%E8%A3%99%EF%BC%8C%E9%95%BF%E5%8F%91%E9%A3%98%E9%A3%98%E7%9A%84%E9%85%B7%E9%A3%92AI%E7%BE%8E%E5%A5%B3%E9%AB%98%E6%B8%85%E6%89%8B%E6%9C%BA%E5%A3%81%E7%BA%B8%E5%9B%BE%E7%89%87&amp;pic=https://pic.3gbizhi.com/uploadmark/20231130/f9c724ae0505f46830a2057bb47d318d.jpg&amp;appkey=" style="opacity: 0.65;"><i class="fa-brands fa-weibo"></i></a>
      <a data-shareid="qq" target="_blank" title="分享到QQ" href="http://connect.qq.com/widget/shareqq/index.html?url=https://www.3gbizhi.com/wallDM/5227.html&amp;title=%E8%92%99%E7%9D%80%E7%9C%BC%E7%BA%B1%EF%BC%8C%E8%BA%AB%E7%9D%80%E9%BB%91%E8%A3%99%EF%BC%8C%E9%95%BF%E5%8F%91%E9%A3%98%E9%A3%98%E7%9A%84%E9%85%B7%E9%A3%92AI%E7%BE%8E%E5%A5%B3%E9%AB%98%E6%B8%85%E6%89%8B%E6%9C%BA%E5%A3%81%E7%BA%B8%E5%9B%BE%E7%89%87&amp;source=3G%E5%A3%81%E7%BA%B8%E7%AB%99_%E6%89%8B%E6%9C%BA%E5%A3%81%E7%BA%B8&amp;desc=%E8%92%99%E7%9D%80%E7%9C%BC%E7%BA%B1%EF%BC%8C%E8%BA%AB%E7%9D%80%E9%BB%91%E8%A3%99%EF%BC%8C%E9%95%BF%E5%8F%91%E9%A3%98%E9%A3%98%E7%9A%84%E9%85%B7%E9%A3%92AI%E7%BE%8E%E5%A5%B3%E9%AB%98%E6%B8%85%E6%89%8B%E6%9C%BA%E5%A3%81%E7%BA%B8%E5%9B%BE%E7%89%87&amp;pics=https://pic.3gbizhi.com/uploadmark/20231130/f9c724ae0505f46830a2057bb47d318d.jpg" style="opacity: 0.65;"><i class="fa fa-brands fa-qq"></i></a>
      <a data-shareid="qzone" target="_blank" title="分享到QQ空间" href="http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=https://www.3gbizhi.com/wallDM/5227.html&amp;title=%E8%92%99%E7%9D%80%E7%9C%BC%E7%BA%B1%EF%BC%8C%E8%BA%AB%E7%9D%80%E9%BB%91%E8%A3%99%EF%BC%8C%E9%95%BF%E5%8F%91%E9%A3%98%E9%A3%98%E7%9A%84%E9%85%B7%E9%A3%92AI%E7%BE%8E%E5%A5%B3%E9%AB%98%E6%B8%85%E6%89%8B%E6%9C%BA%E5%A3%81%E7%BA%B8%E5%9B%BE%E7%89%87&amp;desc=%E8%92%99%E7%9D%80%E7%9C%BC%E7%BA%B1%EF%BC%8C%E8%BA%AB%E7%9D%80%E9%BB%91%E8%A3%99%EF%BC%8C%E9%95%BF%E5%8F%91%E9%A3%98%E9%A3%98%E7%9A%84%E9%85%B7%E9%A3%92AI%E7%BE%8E%E5%A5%B3%E9%AB%98%E6%B8%85%E6%89%8B%E6%9C%BA%E5%A3%81%E7%BA%B8%E5%9B%BE%E7%89%87&amp;summary=%E8%92%99%E7%9D%80%E7%9C%BC%E7%BA%B1%EF%BC%8C%E8%BA%AB%E7%9D%80%E9%BB%91%E8%A3%99%EF%BC%8C%E9%95%BF%E5%8F%91%E9%A3%98%E9%A3%98%E7%9A%84%E9%85%B7%E9%A3%92AI%E7%BE%8E%E5%A5%B3%E9%AB%98%E6%B8%85%E6%89%8B%E6%9C%BA%E5%A3%81%E7%BA%B8%E5%9B%BE%E7%89%87&amp;site=3G%E5%A3%81%E7%BA%B8%E7%AB%99_%E6%89%8B%E6%9C%BA%E5%A3%81%E7%BA%B8" style="opacity: 0.65;"><i class="fa fa-fw fa-myicon-qzone"></i></a>
      <a data-shareid="tencent" target="_blank" title="分享到腾讯微博" href="http://share.v.t.qq.com/index.php?c=share&amp;a=index&amp;title=%E8%92%99%E7%9D%80%E7%9C%BC%E7%BA%B1%EF%BC%8C%E8%BA%AB%E7%9D%80%E9%BB%91%E8%A3%99%EF%BC%8C%E9%95%BF%E5%8F%91%E9%A3%98%E9%A3%98%E7%9A%84%E9%85%B7%E9%A3%92AI%E7%BE%8E%E5%A5%B3%E9%AB%98%E6%B8%85%E6%89%8B%E6%9C%BA%E5%A3%81%E7%BA%B8%E5%9B%BE%E7%89%87&amp;url=https://www.3gbizhi.com/wallDM/5227.html&amp;pic=https://pic.3gbizhi.com/uploadmark/20231130/f9c724ae0505f46830a2057bb47d318d.jpg" style="opacity: 0.65;"><i class="fa fa-brands fa-tencent-weibo"></i></a>
      <a data-shareid="douban" target="_blank" title="分享到豆瓣" href="http://shuo.douban.com/!service/share?href=https://www.3gbizhi.com/wallDM/5227.html&amp;name=%E8%92%99%E7%9D%80%E7%9C%BC%E7%BA%B1%EF%BC%8C%E8%BA%AB%E7%9D%80%E9%BB%91%E8%A3%99%EF%BC%8C%E9%95%BF%E5%8F%91%E9%A3%98%E9%A3%98%E7%9A%84%E9%85%B7%E9%A3%92AI%E7%BE%8E%E5%A5%B3%E9%AB%98%E6%B8%85%E6%89%8B%E6%9C%BA%E5%A3%81%E7%BA%B8%E5%9B%BE%E7%89%87&amp;text=%E8%92%99%E7%9D%80%E7%9C%BC%E7%BA%B1%EF%BC%8C%E8%BA%AB%E7%9D%80%E9%BB%91%E8%A3%99%EF%BC%8C%E9%95%BF%E5%8F%91%E9%A3%98%E9%A3%98%E7%9A%84%E9%85%B7%E9%A3%92AI%E7%BE%8E%E5%A5%B3%E9%AB%98%E6%B8%85%E6%89%8B%E6%9C%BA%E5%A3%81%E7%BA%B8%E5%9B%BE%E7%89%87&amp;image=https://pic.3gbizhi.com/uploadmark/20231130/f9c724ae0505f46830a2057bb47d318d.jpg&amp;starid=0&amp;aid=0&amp;style=11" style="opacity: 0.65;"><i class="fa fa-fw fa-myicon-douban"></i></a>
    </div>

    <el-dialog title="分享直链" :visible.sync="qrCodeVisible">
      <vue-qr :text="currentWindowUrl" :margin="0"></vue-qr>
      <span class="tip">地址已复制到粘贴板</span>
    </el-dialog>
  </div>
</template>

<script>
// "vue-qr": "2.5.0" 不要安装其他版本
import VueQr from 'vue-qr';
import {clipboardData} from '@/utils/copy2Clipboard';

export default {
  name: "ShareComponent",
  components: {
    VueQr,
  },
  data() {
    return {
      qrCodeVisible: false,
      currentWindowUrl: window.location.href,
    }
  },
  methods: {
    shareQrCode() {
      this.qrCodeVisible = true;
      clipboardData(this.currentWindowUrl);
    }
  },
}
</script>

<style scoped>
/* 所有按钮的共性 */
.button {
    background-color: #222222;
    color: #cccccc;
    border: 0
}

.button:hover {
    background-color: #d30000;
}

.tip {
  display: inline-block;
  margin-left: 140px;
  margin-top: 60px;
  vertical-align: top;
  font-size: 16px;
  color: green;
}
/* 二维码右移 */
img {
  margin-left: 30px;
}
</style>
