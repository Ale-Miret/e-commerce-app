const router = require('express').Router();
const { Category, Product } = require('../../models');

// find all categories with associated Products
router.get('/', async (req, res) => {
  try {
    const dbCategories = await Category.findAll({ include: [{ model: Product }] });
    res.json(dbCategories);
  } catch (err) {
    res.status(500).json(err);
  }
});

// find one category by its `id` value with associated Products
router.get('/:id', async (req, res) => {
  try {
    const dbCategory = await Category.findByPk(req.params.id, { include: [{ model: Product }] });
    if (!dbCategory) {
      res.status(404).json({ message: 'Category ID not found' });
    }
    res.json(dbCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

// create a new category
router.post('/', (req, res) => {
  // create a new category
  Category.create(req.body)
  .then(dbCategory => res.json(dbCategory))
  .catch(err => res.status(400).json(err));
});

// update a category by its `id` value
router.put('/:id', async (req, res) => {
  try {
    const dbCategory = await Category.update(req.body, { where: { id: req.params.id } });
    if (!dbCategory[0]) {
      res.status(404).json({ message: 'Category ID not found' });
    }
    res.json(dbCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

// delete a category by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const dbCategory = await Category.destroy({ where: { id: req.params.id } });
    if (!dbCategory) {
      res.status(404).json({ message: 'Category ID not found' });
    }
    res.json(dbCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
