/**
 * @file
 * Restores jQuery helpers removed in jQuery 4, which Drupal 11.4 ships.
 * Needed by Owl Carousel 2 (js/slider.js) and older theme scripts.
 * Remove when the slider is replaced with a maintained carousel.
 */
(function ($) {
  'use strict';
  if (!$.camelCase) {
    $.camelCase = function (s) {
      return String(s).replace(/^-ms-/, 'ms-').replace(/-([a-z])/g, function (m, c) {
        return c.toUpperCase();
      });
    };
  }
  if (!$.type) {
    var class2type = {};
    'Boolean Number String Function Array Date RegExp Object Error Symbol'.split(' ').forEach(function (n) {
      class2type['[object ' + n + ']'] = n.toLowerCase();
    });
    $.type = function (o) {
      if (o == null) {
        return o + '';
      }
      return (typeof o === 'object' || typeof o === 'function')
        ? class2type[Object.prototype.toString.call(o)] || 'object'
        : typeof o;
    };
  }
  if (!$.isFunction) { $.isFunction = function (o) { return typeof o === 'function'; }; }
  if (!$.isArray) { $.isArray = Array.isArray; }
  if (!$.trim) { $.trim = function (s) { return s == null ? '' : String(s).trim(); }; }
  if (!$.isNumeric) {
    $.isNumeric = function (o) {
      var t = typeof o;
      return (t === 'number' || t === 'string') && !isNaN(o - parseFloat(o));
    };
  }
  if (!$.isWindow) { $.isWindow = function (o) { return o != null && o === o.window; }; }
  if (!$.now) { $.now = Date.now; }
})(jQuery);
