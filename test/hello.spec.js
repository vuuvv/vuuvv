'use strict';

var hello = require('../src/hello');

describe('Hello', function() {
  it('says hello', function() {
    expect(hello()).toBe('Hello, world!');
  })
})
