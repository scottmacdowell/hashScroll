(function() {

  (function($, window, document, undefined_) {
    var Plugin, defaults, pluginName;
    pluginName = "hashScroll";
    defaults = {
      scrollSpeed: 300,
      scrollEndSpeed: 100
    };
    Plugin = function(element, options) {
      this.container = $(element);
      this.options = $.extend({}, defaults, options);
      return this.init();
    };
    Plugin.prototype = {
      init: function() {
        return this.bindClick();
      },
      bindClick: function() {
        var targetHash,
          _this = this;

        $children = _this.container.find('a[href^="' + '#"]');
        $children.on('click', function(){
          targetHash = $(this).attr('href');
          event.preventDefault();
          _this.scrollThere(targetHash);
        });
      },
      scrollThere: function(targetHash) {
        var scroll_speed = this.options.scrollSpeed,
        scroll_end_speed = this.options.scrollEndSpeed,
        timer = setTimeout(function() {
          $(window).scrollTo($(targetHash), scroll_speed);
        }, scroll_end_speed);
      }
    };
    return $.fn[pluginName] = function(options) {
      return this.each(function() {
        if (!$.data(this, "plugin_" + pluginName)) {
          return $.data(this, "plugin_" + pluginName, new Plugin(this, options));
        }
      });
    };
  })(jQuery, window, document);

}).call(this);
