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
    { idx: 1, file_name: 'marley_1.jpg', tags: ['cats'], orientation: 'horizontal'},
    { idx: 2, file_name: 'marley_2.jpg', tags: ['cats'], orientation: 'horizontal'},
    { idx: 3, file_name: 'marley_3.jpg', tags: ['cats'], orientation: 'horizontal'},
    { idx: 4, file_name: 'marley_4.jpg', tags: ['cats'], orientation: 'horizontal'},
    { idx: 5, file_name: 'marley_5.jpg', tags: ['cats'], orientation: 'vertical'},
    { idx: 6, file_name: 'marley_6.jpg', tags: ['cats'], orientation: 'horizontal'},
    { idx: 7, file_name: 'marley_7.jpg', tags: ['cats'], orientation: 'horizontal'},
    { idx: 8, file_name: 'marley_8.jpg', tags: ['cats'], orientation: 'horizontal'},
    { idx: 9, file_name: 'marley_9.jpg', tags: ['cats'], orientation: 'horizontal'},
    { idx: 10, file_name: 'marley_10.jpg', tags: ['cats'], orientation: 'vertical'},
    { idx: 11, file_name: 'marley_11.jpg', tags: ['cats'], orientation: 'horizontal'},

    { idx: 12, file_name: 'marley_12.jpg', tags: ['cats'], orientation: 'vertical'},
    { idx: 13, file_name: 'marley_13.jpg', tags: ['cats'], orientation: 'horizontal'},
    { idx: 14, file_name: 'marley_14.jpg', tags: ['cats'], orientation: 'vertical'},
    { idx: 15, file_name: 'marley_15.jpg', tags: ['cats'], orientation: 'horizontal'},
    { idx: 16, file_name: 'marley_16.jpg', tags: ['cats'], orientation: 'vertical'},
    { idx: 17, file_name: 'marley_17.jpg', tags: ['cats'], orientation: 'horizontal'},
    { idx: 18, file_name: 'marley_18.jpg', tags: ['cats'], orientation: 'horizontal'},
    { idx: 19, file_name: 'marley_19.jpg', tags: ['cats'], orientation: 'vertical'},
    { idx: 20, file_name: 'marley_20.jpg', tags: ['cats'], orientation: 'horizontal'},
    { idx: 21, file_name: 'marley_21.jpg', tags: ['cats'], orientation: 'vertical'},

    { idx: 22, file_name: 'marley_22.jpg', tags: ['cats'], orientation: 'horizontal'},
    { idx: 23, file_name: 'marley_23.jpg', tags: ['cats'], orientation: 'vertical'},
    { idx: 24, file_name: 'marley_24.jpg', tags: ['cats'], orientation: 'vertical'},
    { idx: 25, file_name: 'marley_25.jpg', tags: ['cats'], orientation: 'horizontal'},
    { idx: 26, file_name: 'marley_26.jpg', tags: ['cats'], orientation: 'horizontal'},
    { idx: 27, file_name: 'marley_27.jpg', tags: ['cats'], orientation: 'horizontal'},
    { idx: 28, file_name: 'marley_28.jpg', tags: ['cats'], orientation: 'horizontal'},
    { idx: 29, file_name: 'marley_29.jpg', tags: ['cats'], orientation: 'horizontal'},
    { idx: 30, file_name: 'marley_30.jpg', tags: ['cats'], orientation: 'horizontal'},
    { idx: 31, file_name: 'marley_31.jpg', tags: ['cats'], orientation: 'horizontal'},
    { idx: 32, file_name: 'marley_32.jpg', tags: ['cats'], orientation: 'vertical'},
    { idx: 33, file_name: 'marley_33.jpg', tags: ['cats'], orientation: 'horizontal'},
];




const cats = mongoose.model('Cats', CatSchema);


cats.insertMany(arr, function(error, docs) {});


module.exports = mongoose.model('Cats', CatSchema);
