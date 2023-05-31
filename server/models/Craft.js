const mongoose = require('mongoose');

const craftSchema = new mongoose.Schema({
  name: {
    type: String,
    required: 'This field is required.'
  },
  description: {
    type: String,
    required: 'This field is required.'
  },
  email: {
    type: String,
    required: 'This field is required.'
  },
  instructions: {
    type: Array,
    required: 'This field is required.'
  },
  category: {
    type: String,
    enum: ['Paper Crafts', 'Handmade Gifts','Artistic Endeavors','DIY for Kids','Sewing and Textiles','Upcycling and Repurposing','Others'],
    required: 'This field is required.'
  },
  image: {
    type: String,
    required: 'This field is required.'
  },
});

// craftSchema.index({ name: 'text', description: 'text' });
// WildCard Indexing
//recipeSchema.index({ "$**" : 'text' });

module.exports = mongoose.model('Craft', craftSchema);