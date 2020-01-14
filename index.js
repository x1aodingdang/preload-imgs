(function() {
  /**
   * @param {Number} delay 如果出错 延迟的请求时间
   * @param {*} [imgList=[]] 用来请求的图片数据
   * @returns Promise 返回一个promise .then 使用回调
   */
  var preloadImgs = function(imgList, delay) {
    imgList = imgList || [];
    delay = delay || 100;
    return Promise.all(
      imgList.map(item => {
        return new Promise((res, rej) => {
          var img = new Image();
          img.onload = e => {
            res(e);
          };
          img.onerror = () => {
            setTimeout(() => {
              img.src = item;
            }, delay);
            // rej(e);
          };
          img.src = item;
        });
      })
    );
  };

  typeof exports === "object" && typeof module !== "undefined"
    ? (module.exports = preloadImgs)
    : typeof define === "function" && define.amd
    ? define(preloadImgs)
    : ((global = global || self), (global.preloadImgs = preloadImgs));
})();
