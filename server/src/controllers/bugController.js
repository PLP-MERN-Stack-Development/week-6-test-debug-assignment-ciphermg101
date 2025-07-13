const Bug = require('../models/Bug');
const validateBug = require('../utils/validateBug');

// Intentional bug: typo in 'description' field (for debugging demo)
exports.createBug = async (req, res, next) => {
  try {
    const { valid, error } = validateBug(req.body);
    if (!valid) return res.status(400).json({ error });

    const bug = new Bug({
      title: req.body.title,
      description: req.body.descriptin, // <-- typo: should be 'description'
      status: req.body.status || 'open'
    });
    await bug.save();
    res.status(201).json(bug);
  } catch (err) {
    next(err);
  }
};

exports.getBugs = async (req, res, next) => {
  try {
    const bugs = await Bug.find();
    res.json(bugs);
  } catch (err) {
    next(err);
  }
};

exports.updateBug = async (req, res, next) => {
  try {
    const { valid, error } = validateBug(req.body);
    if (!valid) return res.status(400).json({ error });

    const bug = await Bug.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!bug) return res.status(404).json({ error: 'Bug not found' });
    res.json(bug);
  } catch (err) {
    next(err);
  }
};

exports.deleteBug = async (req, res, next) => {
  try {
    const bug = await Bug.findByIdAndDelete(req.params.id);
    if (!bug) return res.status(404).json({ error: 'Bug not found' });
    res.json({ message: 'Bug deleted' });
  } catch (err) {
    next(err);
  }
}; 