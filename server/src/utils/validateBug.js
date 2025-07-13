function validateBug(data) {
  if (!data.title || typeof data.title !== 'string' || data.title.trim() === '') {
    return { valid: false, error: 'Title is required.' };
  }
  if (data.status && !['open', 'in-progress', 'resolved'].includes(data.status)) {
    return { valid: false, error: 'Invalid status.' };
  }
  return { valid: true };
}

module.exports = validateBug; 