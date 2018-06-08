const mongoose = require('mongoose');
const Cats = mongoose.model('Cats');

module.exports = {
// get all cats
    index: (request, response) => {
        Cats.find({})
        .then(function(cats){
            response.json(cats);
        })
        .catch(function(error){
            response.send(error);
        })
    },

}; // close controller
