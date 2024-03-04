import taskBlock from './1-block-scoped.js';

test('test block-scoped', () => {
  expect(console.log(taskBlock(true))).toContain([ false, true ]);
  expect(console.log(taskBlock(false))).toBe([ false, true ]);
});
