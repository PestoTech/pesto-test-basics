import sumArray from '../src/arraySum';

describe('arraySum test', () => {
  test('should sum the array of numbers', () => {
    const fixture = [1, 2, 3, 4];
    const sum = sumArray(...fixture);

    expect(sum).toEqual(10);
  });
});
