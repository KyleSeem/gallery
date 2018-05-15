myApp.factory('photoFactory', ['$http', function($http){
    const factory = {};

    // this function performs simple validation when creating image in limited functionality mode
    factory.createTemp = function(photo, callback) {
        alerts = [];

        if (!photo.file_name) {
            alerts.push('please select a file to upload');
        }
        if (!photo.name) {
            alerts.push('image title required');
        }
        if (!photo.orientation) {
            alerts.push('preferred image orientation required');
        }

        if (alerts.length > 0) {
            callback({ alerts:alerts });
        }
        else {
            callback(photo);
        }
    }

    // get all photos
    factory.index = function(callback) {
        $http.get('/photos')
        .then(function(response) {
            callback(response.data);
        })
        .catch(function(error) {
            console.log(error);
        })
    }

    // create new photo
    factory.create = function(photo, callback) {
        alerts = [];

        $http.post('/add_new_photo', photo)
        .then(function(response) {
            if (response.data.errors) {
                var err = response.data.errors;
                for (var msg in err) {
                    var alert = (err[msg].message);
                    alerts.push(alert);
                }
                callback({ alerts:alerts });
            }
            else if (response.data.code === 11000) {
                alerts.push('file already exists in database');
                callback({ alerts:alerts });
            }
            else {
                callback(response.data);
            }
        })
        .catch(function(error) {
            console.log(error);
        })
    }

    // show specified photo
    factory.show = function(id, callback) {
        $http.get('show_photo/' + id)
        .then(function(response) {
            callback(response.data);
        })
        .catch(function(error) {
            console.log(error);
        })
    }


    // update existing photo in database
    factory.update = function(upd, callback) {
        alerts = [];

        $http.post('/update_photo', upd)
        .then(function(response) {
            if (response.data.errors) {
                var err = response.data.errors;
                for (var msg in err) {
                    var alert = (err[msg].message);
                    alerts.push(alert);
                }
                callback({ alerts:alerts });
            }
            else {
                callback(response);
            }
        })
        .catch(function(error) {
            console.log(error);
        })
    }


    // delete photo from database
    factory.delete = function(id, callback) {
        $http.delete('/delete_photo/' + id)
        .then(function(response) {
            callback(response.data);
        })
        .catch(function(error) {
            console.log(error);
        })
    }

    return factory;
}]); // close photoFactory
