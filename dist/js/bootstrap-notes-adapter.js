/*! markdown-notepad v0.1.0 2016-05-24 */
!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?a(require("jquery")):window.jQuery&&a(window.jQuery)}(function(a){var b=function(a,b){var c=this;c._el=a,c._opt=b};b.prototype={constructor:b,data:function(a){var b=this,c=b._opt;return a?void c.data(a):c.data()}},a.fn.ntadapter=function(c){var d=arguments;return this.each(function(){var e=a(this),f=e.data("ntadapter"),g="object"==typeof c?c:{};f||"string"==typeof c?"string"==typeof c&&f[c].apply(f,Array.prototype.slice.call(d,1)):e.data("ntadapter",new b(this,g))})}});