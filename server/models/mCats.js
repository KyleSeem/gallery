// this schema is for an easter egg - all objects will be defined here

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CatSchema = new mongoose.Schema({
    idx: Number,
    file_name: {
        type: String,
        unique: true,
    },
    tags: [String],
    orientation: String
});


var arr = [
    { idx: 0, file_name: 'marley_0.jpg', tags: ['cats'], orientation: 'horizontal'},
    { idx: 0, file_name: 'marley_1.jpg', tags: ['cats'], orientation: 'vertical'},
    { idx: 0, file_name: 'marley_2.jpg', tags: ['cats'], orientation: 'horizontal'},
    { idx: 0, file_name: 'marley_3.jpg', tags: ['cats'], orientation: 'vertical'},
    { idx: 0, file_name: 'marley_4.jpg', tags: ['cats'], orientation: 'horizontal'},
    { idx: 0, file_name: 'marley_5.jpg', tags: ['cats'], orientation: 'horizontal'},
    { idx: 0, file_name: 'marley_6.jpg', tags: ['cats'], orientation: 'horizontal'},
    { idx: 0, file_name: 'marley_7.jpg', tags: ['cats'], orientation: 'horizontal'},
    { idx: 0, file_name: 'marley_8.jpg', tags: ['cats'], orientation: 'horizontal'},
    { idx: 0, file_name: 'marley_9.jpg', tags: ['cats'], orientation: 'vertical'},
    { idx: 0, file_name: 'marley_10.jpg', tags: ['cats'], orientation: 'vertical'},
    { idx: 0, file_name: 'marley_11.jpg', tags: ['cats'], orientation: 'horizontal'},
    { idx: 0, file_name: 'marley_12.jpg', tags: ['cats'], orientation: 'vertical'},
    { idx: 0, file_name: 'marley_13.jpg', tags: ['cats'], orientation: 'vertical'},
    { idx: 0, file_name: 'marley_14.jpg', tags: ['cats'], orientation: 'vertical'},
    { idx: 0, file_name: 'marley_15.jpg', tags: ['cats'], orientation: 'horizontal'},
    { idx: 0, file_name: 'marley_16.jpg', tags: ['cats'], orientation: 'horizontal'},
    { idx: 0, file_name: 'marley_17.jpg', tags: ['cats'], orientation: 'vertical'},
    { idx: 0, file_name: 'marley_18.jpg', tags: ['cats'], orientation: 'vertical'},
    { idx: 0, file_name: 'marley_19.jpg', tags: ['cats'], orientation: 'horizontal'},
    { idx: 0, file_name: 'marley_20.jpg', tags: ['cats'], orientation: 'horizontal'},
    { idx: 0, file_name: 'marley_21.jpg', tags: ['cats'], orientation: 'vertical'},
    { idx: 0, file_name: 'marley_22.jpg', tags: ['cats'], orientation: 'vertical'},
    { idx: 0, file_name: 'marley_23.jpg', tags: ['cats'], orientation: 'horizontal'},
    { idx: 0, file_name: 'marley_24.jpg', tags: ['cats'], orientation: 'horizontal'},
    { idx: 0, file_name: 'marley_25.jpg', tags: ['cats'], orientation: 'horizontal'},
];




const cats = mongoose.model('Cats', CatSchema);


cats.insertMany(arr, function(error, docs) {});


module.exports = mongoose.model('Cats', CatSchema);
