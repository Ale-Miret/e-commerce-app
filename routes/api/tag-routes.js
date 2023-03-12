// const router = require('express').Router();
// const { Tag, Product, ProductTag } = require('../../models');



// // GET all tags
// router.get('/', (req, res) => {
//   Tag.findAll({
//     include: [
//       {
//         model: Product,
//         through: ProductTag,
//       },
//     ],
//   })
//     .then((tags) => res.json(tags))
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });



// // GET a tag by id
// router.get('/:id', (req, res) => {
//   Tag.findOne({
//     where: {
//       id: req.params.id,
//     },
//     include: [
//       {
//         model: Product,
//         through: ProductTag,
//       },
//     ],
//   })
//     .then((tag) => {
//       if (!tag) {
//         res.status(404).json({ message: 'Tag not found' });
//         return;
//       }
//       res.json(tag);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });



// // POST a new tag
// router.post('/', (req, res) => {
//   Tag.create({
//     tag_name: req.body.tag_name,
//   })
//     .then((tag) => res.status(201).json(tag))
//     .catch((err) => {
//       console.log(err);
//       res.status(400).json(err);
//     });
// });



// // PUT (update) a tag by id
// router.put('/:id', (req, res) => {
//   Tag.update(
//     {
//       tag_name: req.body.tag_name,
//     },
//     {
//       where: {
//         id: req.params.id,
//       },
//     }
//   )
//     .then((tag) => {
//       if (!tag[0]) {
//         res.status(404).json({ message: 'Tag not found' });
//         return;
//       }
//       res.json(tag);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(400).json(err);
//     });
// });



// // DELETE a tag by id
// router.delete('/:id', async (req, res) => {
//   try {
//     const rowsDeleted = await Tag.destroy({
//       where: { id: req.params.id },
//     });
//     if (!rowsDeleted) {
//       res.status(404).json({ message: 'Tag not found' });
//     } else {
//       res.status(200).json({ message: 'Tag deleted' });
//     }
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// module.exports = router;

const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// GET all tags
router.get('/', async (req, res) => {
  try {
    const tags = await Tag.findAll({
      include: [{ model: Product, through: ProductTag }],
    });
    res.status(200).json(tags);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET a tag by id
router.get('/:id', async (req, res) => {
  try {
    const tag = await Tag.findByPk(req.params.id, {
      include: [{ model: Product, through: ProductTag }],
    });
    if (!tag) {
      res.status(404).json({ message: 'Tag not found' });
    } else {
      res.status(200).json(tag);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// POST a new tag
router.post('/', async (req, res) => {
  try {
    const tag = await Tag.create(req.body);
    res.status(201).json(tag);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// PUT (update) a tag by id
router.put('/:id', async (req, res) => {
  try {
    const [rowsUpdated] = await Tag.update(req.body, {
      where: { id: req.params.id },
    });
    if (!rowsUpdated) {
      res.status(404).json({ message: 'Tag not found' });
    } else {
      const updatedTag = await Tag.findByPk(req.params.id);
      res.status(200).json(updatedTag);
    }
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

// DELETE a tag by id
router.delete('/:id', async (req, res) => {
  try {
    const rowsDeleted = await Tag.destroy({
      where: { id: req.params.id },
    });
    if (!rowsDeleted) {
      res.status(404).json({ message: 'Tag not found' });
    } else {
      res.status(200).json({ message: 'Tag deleted' });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
