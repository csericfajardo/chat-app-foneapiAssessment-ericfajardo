const express = require('express');
const router = express.Router();
const Message = require('../models/Message');

// Get all messages
router.get('/', async (req, res) => {
  try {
    const messages = await Message.find();
    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a single message by id
router.get('/:id', getMessage, (req, res) => {
  res.json(res.message);
});

// Create a new message
router.post('/', async (req, res) => {
  const message = new Message({
    username: req.body.username,
    message: req.body.message,
  });

  try {
    const newMessage = await message.save();
    res.status(201).json(newMessage);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update a message by id
router.patch('/:id', getMessage, async (req, res) => {
  if (req.body.username != null) {
    res.message.username = req.body.username;
  }

  if (req.body.message != null) {
    res.message.message = req.body.message;
  }

  try {
    const updatedMessage = await res.message.save();
    res.json(updatedMessage);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete a message by id
router.delete('/:id', getMessage, async (req, res) => {
  try {
    await res.message.remove();
    res.json({ message: 'Message deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Middleware function to get a message by id
async function getMessage(req, res, next) {
  try {
    const message = await Message.findById(req.params.id);

    if (message == null) {
      return res.status(404).json({ message: 'Message not found' });
    }

    res.message = message;
    next();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = router;