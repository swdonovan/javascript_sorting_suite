module.exports = bubbleSort


function bubbleSort(array) {
  var length = array.length;
  for (var i = (length - 1); i >= 0; i--) {
    for (var k = (length - i); k > 0; k--) {
      if (array[k] < array[k - 1]) {

        // var small_element = array[k];
        // array[k] = array[k-1];
        // array[k-1] = small_element;
        array.move(k - 1, k, k);
      };
    };
  };
  return array
};

Array.prototype.move = function(from, to) {
    this.splice(to, 0, this.splice(from, 1)[0]);
};
