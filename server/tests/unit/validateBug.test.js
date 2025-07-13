const validateBug = require('../../src/utils/validateBug');

describe('validateBug', () => {
  it('should validate a correct bug', () => {
    expect(validateBug({ title: 'Bug 1' })).toEqual({ valid: true });
  });
  it('should fail if title is missing', () => {
    expect(validateBug({})).toEqual({ valid: false, error: 'Title is required.' });
  });
  it('should fail if status is invalid', () => {
    expect(validateBug({ title: 'Bug', status: 'bad' })).toEqual({ valid: false, error: 'Invalid status.' });
  });
}); 