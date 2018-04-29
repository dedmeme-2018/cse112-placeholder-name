/* sample test using jest*/

/* syntax for including the file that you want to test */
const sum = require('./sum');

/* give your test a description to be printed when you run it */
test('adds 1 + 2 to equal 3', () => {
    
  /* syntax for assertion */
  expect(sum(1, 2)).toBe(3);
});
