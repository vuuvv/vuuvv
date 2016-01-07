'use strict';

const hello = require('../src/hello');

describe('Hello', () => {
  it('says hello', () => {
    expect(hello()).toBe('Hello, world!');
  });
});
