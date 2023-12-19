/**
 * 复制数据到系统的粘贴板
 * @param copyData    待复制的数据
 */
export function clipboardData(copyData) {
  let save = function (e) {
    e.clipboardData.setData("text/plain", copyData);
    // 阻止默认行为
    e.preventDefault();
  };
  document.addEventListener('copy', save);
  document.execCommand('copy');
}
