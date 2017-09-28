module.exports = insertionSort

function insertionSort(array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] > array[i+1]){
      var tmp = array[i+1];
      array[i+1] = array[i];
      array[i] = tmp;
      insertionSort(array)
    };
  };
  return array;
};
