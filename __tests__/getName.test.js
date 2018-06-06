import getName from '../src/getName';

describe('throwError test', () => {
  test('should return string with given name', () => {
    const actual = getName('Martin Garrix');
    const expected = /Ramu/;
    expect(actual).toThrow(expected);
  });

  test('should throw error if argument is not a string', () => {
    const expected = 'there was an error';
    expect(() => getName(123)).toThrow(expected);
  });
});
