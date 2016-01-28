(function ($) {
  // for better performance, define regexes once, before the code
  var pxRegex = /px/, percentRegex = /%/, urlRegex = /url\(['"]*(.*?)['"]*\)/g;
  $.fn.getBackgroundSize = function (callback) {
    var img = new Image(), width, height, backgroundSize = this.css('background-size').split(' ');

    if (pxRegex.test(backgroundSize[0])) width = parseInt(backgroundSize[0]);
    if (percentRegex.test(backgroundSize[0])) width = this.width() * (parseInt(backgroundSize[0]) / 100);
    if (pxRegex.test(backgroundSize[1])) height = parseInt(backgroundSize[1]);
    if (percentRegex.test(backgroundSize[1])) height = this.height() * (parseInt(backgroundSize[1]) / 100);

    // additional performance boost, if width and height was set just call the callback and return
    if ((typeof width != 'undefined') && (typeof height != 'undefined')) {
      callback({ width: width, height: height });
      return this;
    }
    img.onload = function () {
      if (typeof width == 'undefined') {
        if (typeof height != 'undefined') {
          width = size_optimization(this.naturalHeight, height, this.naturalWidth);
        }else{
          width = this.width;
        }
      }
      if (typeof height == 'undefined') {
        if (typeof width != 'undefined') {
          height = size_optimization(this.naturalWidth, width, this.naturalHeight);
        }else {
          height = this.height;
        }
      }

      callback({ width: width, height: height });
    };

    /* Call img.onload to refer natural size. */
    img.src = this.css('background-image').replace(urlRegex, '$1');
    return this;
    function size_optimization(origin, current, target){
      return target * (current/origin);
    }
  }
})(jQuery);

