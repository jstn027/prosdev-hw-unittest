const { gradeClassifier } = require('./index');

describe('Scenario', () => {
  it('When Grade is between 0 to 74.99, then the letter grade should be D (Did not Meet Expectation).', () => {
    var grade = 74.99
    var result = gradeClassifier(grade)
    expect(result).toBe('D')
  });

  it('When Grade is between 75.00 to 79.99, then the letter grade should be N (Needs Improvement).', () => {
    var grade = 79.99
    var result = gradeClassifier(grade)
    expect(result).toBe('N')
  });

  it('When Grade is between 80.00 to 84.99, then the letter grade should be S (Satisfactory).', () => {
    var grade = 84.99
    var result = gradeClassifier(grade)
    expect(result).toBe('S')
  });

  it('When Grade is between 85.00 to 89.99, then the letter grade should be G (Good).', () => {
    var grade = 89.99
    var result = gradeClassifier(grade)
    expect(result).toBe('G')
  });

  it('When Grade is between 90.00 to 94.99, then the letter grade should be V (Very Good).', () => {
    var grade = 94.99
    var result = gradeClassifier(grade)
    expect(result).toBe('V')
  });

  it('When Grade is between 95.00 to 100, then the letter grade should be O (Outstanding).', () => {
    var grade = 100
    var result = gradeClassifier(grade)
    expect(result).toBe('O')
  });

  it('When Grade is Less than 0, then the result should be "Invalid".', () => {
    var grade = -1
    var result = gradeClassifier(grade)
    expect(result).toBe('Invalid')
  });

  it('When Grade is Greater than 100, then the result should be "Invalid".', () => {
    var grade = 101
    var result = gradeClassifier(grade)
    expect(result).toBe('Invalid')
  });

  it('When Grade is "NaN" or "Not a Number", then the result should be "Invalid".', () => {
    var grade = 'Word Not Number'
    var result = gradeClassifier(grade)
    expect(result).toBe('Invalid')
  });
});