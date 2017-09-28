const assert = require('chai').assert
const bubbleSort = require('../lib/bubble_sort')

describe('can sort an array', function() {
  it('it can sort 2 numbers', function() {
    var array = [3, 2]
    var correctArr = [2, 3]
    assert.deepEqual(bubbleSort(array), correctArr)
  });

  it('it can sort 3 numbers', function() {
    var array = [3, 2, 4]
    var correctArr = [2, 3, 4]
    assert.deepEqual(bubbleSort(array), correctArr)
  });

  it('it can sort 3 adjusted numbers', function() {
    var array = [3, 4, 2]
    var correctArr = [2, 3, 4]
    assert.deepEqual(bubbleSort(array), correctArr)
  });

  it('it can sort 4 numbers', function() {
    var array = [3, 2, 8, 4]
    var correctArr = [2, 3, 4, 8]
    assert.deepEqual(bubbleSort(array), correctArr)
  });

  it('it can sort 5 different numbers', function() {
    var array = [12, 2, 200, 84]
    var correctArr = [2, 12, 84, 200]
    assert.deepEqual(bubbleSort(array), correctArr)
  });
});
