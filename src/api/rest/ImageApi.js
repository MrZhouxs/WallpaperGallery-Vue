import request from "../request";

// 获取缩略图列表
export function getImageListApi(params) {
  return request.get('/wallpaper/list', params);
}

// 获取缩略图详细信息
export function getThumbnailDetailApi(thumbnailId) {
  return request.get(`/wallpaper/thumbnail/${thumbnailId}`)
}

// 下载原图时原图下载量加一
export function addWallpaperDownloadApi(wallpaperId) {
  return request.get(`/wallpaper/add/download/${wallpaperId}`)
}
