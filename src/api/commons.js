// 系统通用的方法

// 字符串转数字
export function string2int(str) {
  return parseInt(str);
}

// 数字转字符串
export function int2string(int) {
  return int.toString();
}

// 模拟a标签点击时间下载文件
export function downloadFile(href, filename) {
  const aLabel = document.createElement("a");
  aLabel.href = href;
  if (filename !== undefined || true) {
    aLabel.download = filename;
  }
  aLabel.style.display = "none";
  aLabel.click();

}
