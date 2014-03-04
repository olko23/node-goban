var is_array = function(obj) {
  return Object.prototype.toString.call(obj) === '[object Array]';
}

exports.is_array = is_array;
