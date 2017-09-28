const assert = require('chai').assert
const insertionSort = require('../lib/insertion-sort')

describe('can sort an array', function() {
  it('it can sort 2 numbers', function() {
    var array = [3, 2]
    var correctArr = [2, 3]
    assert.deepEqual(insertionSort(array), correctArr)
  });

  it('it can sort 3 numbers', function() {
    var array = [3, 2, 4]
    var correctArr = [2, 3, 4]
    assert.deepEqual(insertionSort(array), correctArr)
  });

  it('it can sort 3 adjusted numbers', function() {
    var array = [3, 4, 2]
    var correctArr = [2, 3, 4]
    assert.deepEqual(insertionSort(array), correctArr)
  });

  it('it can sort 4 numbers', function() {
    var array = [3, 2, 8, 4]
    var correctArr = [2, 3, 4, 8]
    assert.deepEqual(insertionSort(array), correctArr)
  });

  it('it can sort 5 different numbers', function() {
    var array = [12, 2, 200, 84]
    var correctArr = [2, 12, 84, 200]
    assert.deepEqual(insertionSort(array), correctArr)
  });

  it('it can sort 8 different numbers', function() {
    var array = [12, 2, 200, 84, 1000, 20, 2300, 1]
    var correctArr = [1, 2, 12, 20, 84, 200, 1000, 2300]
    assert.deepEqual(insertionSort(array), correctArr)
  });

  it('it can large set of  numbers', function() {
    var array = [12, 2, 200, 84, 1000, 20, 2300, 1, 3, 2,]
    var correctArr = [1, 2, 2, 3, 12, 20, 84, 200, 1000, 2300]
    assert.deepEqual(insertionSort(array), correctArr)
  });
});
