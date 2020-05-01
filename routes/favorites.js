const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

const User = require('../models/User');
const Favorite = require('../models/Favorite');

// @route       GET api/favorites
// @desc        Get all user favorites
// @access      Private
router.get('/', auth, async (req, res) => {
  try {
    const favorites = await Favorite.find({ user: req.user.id }).sort({
      data: -1,
    });
    res.json(favorites);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route       POST api/favorites
// @desc        Add new favorite
// @access      Private
router.post(
  '/',
  [auth, [check('title', 'Title is required').not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { recipeID, title } = req.body;

    let favorite = await Favorite.findById(req.params.id);

    if (!favorite) return res.status(404).json({ msg: 'Favorite not found' });

    try {
      const newFavorite = new Favorite({
        recipeID,
        title,
        user: req.user.id,
      });

      const favorite = await newFavorite.save();

      res.json(favorite);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route       Update api/favorites/:id
// @desc        Update favorite
// @access      Private
router.put('/:id', auth, async (req, res) => {
  const { favoriteID } = req.body;

  // Build favorite object
  const favoriteFields = {};
  if (favoriteID) favoriteFields.favoriteID = favoriteID;
  // if (source) favoriteFields.source = source;
  // if (labels) favoriteFields.labels = labels;
  // if (image) favoriteFields.image = image;
  // if (calories) favoriteFields.calories = calories;
  // if (time) favoriteFields.time = time;

  try {
    let favorite = await Favorite.findById(req.params.id);

    if (!favorite) return res.status(404).json({ msg: 'Favorite not found' });
    //Make sure user owns Favorites
    if (favorite.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not autorized' });
    }

    favorite = await Favorite.findByIdAndUpdate(
      req.params.id,
      { $set: favoriteFields },
      { new: true }
    );

    res.json(favorite);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route       DELETE api/favorites/:id
// @desc        Delete favorite
// @access      Private
router.delete('/:id', auth, async (req, res) => {
  try {
    let favorite = await Favorite.findById(req.params.id);

    if (!favorite) return res.status(404).json({ msg: 'Favorite not found' });
    //Make sure user owns Favorites
    if (favorite.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not autorized' });
    }

    await Favorite.findByIdAndRemove(req.params.id);

    res.json({ msg: 'Favorite removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
