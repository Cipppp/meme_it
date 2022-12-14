// // Create a meme schema 
// const mongoose = require('mongoose');
// const Joi = require('joi');

// const memeSchema = new mongoose.Schema({
//     description: { type: String, required: true },
// });

// const Meme = mongoose.model('meme', memeSchema);

// const validate = (data) => {
//     const schema = Joi.object({
//         description: Joi.string().required().label('description'),
//     });
//     return schema.validate(data);
// }

// module.exports = { Meme, validate };
