'use strict';

var replaceDots = function(str) {
  str = 'one.two.three';
  var rep = str.replace(/\./g, '-');
  return rep;
};

replaceDots();