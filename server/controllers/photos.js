const mongoose = require('mongoose');
const Photos = mongoose.model('Photos');

module.exports = {
// get all photos
    index: (request, response) => {
        Photos.find({})
        .then(function(photos){
            response.json(photos);
        })
        .catch(function(error){
            response.send(error);
        })
    },

// add new photo to database
    create: (request, response) => {
        Photos.create(request.body)
        .then(function(photos) {
            response.json(photos);
        })
        .catch(function(error) {
            response.send(error);
        })
    },

// show specified photo
    show: (request, response) => {
        Photos.findById(request.params.id)
        .then(function(photo) {
            response.json(photo);
        })
        .catch(function(error) {
            response.send(error);
        })
    },

// update existing photo in database
    update: (request, response) => {
        var img = request.body;

        Photos.findById(request.body._id)
        .then(function(photo) {
            photo.update({ $set: { name:img.name, description: img.description, tags: img.tags } })
            .then(function(updated) {
                updated.name = img.name;
                response.json(updated);
            })
            .catch(function(error) {
                response.send(error);
            })
        })
        .catch(function(error) {
            response.send(error);
        })
    },

// delete photo from database
    delete: (request, response) => {
        Photos.findByIdAndRemove(request.params.id)
        .then(function(photo){
            response.json(photo);
        })
        .catch(function(error){
            response.send(error);
        })
    },

}; // close controller
