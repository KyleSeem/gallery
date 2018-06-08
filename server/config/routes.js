console.log('conneciton to server-side routes successful');

const path = require('path');

const photos = require('../controllers/photos.js');
const cats = require('../controllers/cats.js');


module.exports = function(app){

    app.get('/photos', photos.index);
    app.post('/add_new_photo', photos.create);
    app.get('/show_photo/:id', photos.show);
    app.post('/update_photo', photos.update);
    app.delete('/delete_photo/:id', photos.delete);

    app.get('/cats', cats.index);


    app.all("*", (request, response, next) => {
        response.sendFile(path.resolve("./public/index.html"))
    })
}
