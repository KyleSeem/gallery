// this controller contains altered CRUD functions designed to limit functionality in deployment to portfolio site

myApp.controller('MaintenanceController', ['$scope', 'photoFactory', '$uibModal', '$cookies', '$location', "$routeParams", '$route', function($scope, photoFactory, $uibModal, $cookies, $location, $routeParams, $route){
    $scope.sessionPhotos = $cookies.getObject('photoArray');
    $scope.sessionModal = $cookies.getObject('modalViewed');
    $scope.photos = [];
    $scope.newPhoto = {};
    $scope.editPhoto = {};
    $scope.tempTags = [];
    $scope.img_toggle = 0;
    $scope.alerts = [];


    // defines date object used for cookie expiration
    var n = new Date();
    var expDate = new Date(n.getFullYear(), n.getMonth(), n.getDate(), n.getHours()+4);
    // var expDate2 = new Date(n.getFullYear(), n.getMonth(), n.getDate(), n.getHours(), n.getMinutes()+1);
    // $cookies.remove('modalViewed');


    $scope.index = function() {
        photoFactory.index(function(response) {
            $scope.photos = response;
        });
    }

    // add tag to tempTags array
    $scope.pushTag = function(newTag) {
        $scope.tempTags.push(newTag);
        $scope.newTag = null;
    }

    // remove tag from tempTags array
    $scope.removeTag = function(tag) {
        var a = $scope.tempTags.indexOf(tag);
        $scope.tempTags.splice(a, 1);
        return $scope.tempTags;
    }

    // toggle thumbnail of photo in edit table
    $scope.toggleImage = function() {
        if (this.img_toggle === 0) {
            this.img_toggle = 1;
        }
        else if (this.img_toggle === 1) {
            this.img_toggle = 0;
        }
    }

///////////////////////////////////////////////////////
// DEPLOYMENT/LIMITED-FUNCTIONALITY-SPECIFIC OPERATIONS
    $scope.createTemp = function() {
        $scope.alerts = [];
        $scope.newPhoto.tags = $scope.tempTags;

        photoFactory.createTemp($scope.newPhoto, function(response) {
            if (response.alerts) {
                $scope.alert_class = 'danger';
                $scope.alerts = response.alerts;
            }
            else {
                if ($scope.sessionPhotos === undefined) {
                    let arr = [];
                    arr.push(response);
                    $cookies.putObject('photoArray', arr, { expires:expDate });
                }
                else {
                    let arr = $scope.sessionPhotos;
                    arr.push(response);
                    $cookies.putObject('photoArray', arr, {expires:expDate });
                }
                $scope.newPhoto = {};
                $scope.tempTags = [];
                $scope.alert_class = 'success';
                $scope.alerts.push('Photo successfully added');
                // console.log(expDate);
            }
            $scope.alerts = $scope.alerts;
        });
    }

    // identify photo to edit/update and route to that photo's dedicated page
    // this has been modified to use session index as id for limited functionality
    $scope.edit = function(photo) {
        var id = $scope.sessionPhotos.indexOf(photo);

        $location.url('/photography/maintain/' + id);
    }

    // retrieve and display info for selected photo
    // modified to retrieve photo from session instead of db for limited functionality
    $scope.show = function() {
        $scope.editPhoto = $scope.sessionPhotos[$routeParams.id];
        $scope.tempTags = $scope.editPhoto.tags;
        if  ($scope.tempTags === null) {
            $scope.tempTags = [];
        }
    }

    // UPDATE changes to sessionPhotos
    $scope.update = function() {
        $scope.alerts = [];

        $scope.editPhoto.tags = $scope.tempTags;
        if ($scope.editPhoto.name.length < 1) {
            $scope.alerts.push('image title required');
            $scope.alert_class = 'danger';
        }
        else {
            var photo = $scope.editPhoto; // the photo that has just been edited
            var sp = $scope.sessionPhotos.indexOf(photo); // the array index of this photo in the session array
            $scope.sessionPhotos[sp] = photo; // replace the original item with edited photo in returned array (in respective index position)
            var arr = $scope.sessionPhotos; // declare new array for session array which now includes edited photo
            $cookies.putObject('photoArray', arr, { expires:expDate }); // replace existing session array with new array in cookies to save changes

            $location.url('/photography/maintain/update_db');
        }
        $scope.editPhoto = {};
    }

    // DELETE photo from sessionPhotos
    $scope.delete = function(photo) {
        $scope.alerts = [];

        var id = $scope.sessionPhotos.indexOf(photo);
        var arr = $scope.sessionPhotos;

        arr.splice(id, 1);
        $cookies.putObject('photoArray', arr, { expires:expDate });
    }


// MODAL RELATED
    // this pops up the first time the user visits the "update" section in the existing session
    $scope.headsUp = function() {
        if ($scope.sessionModal === undefined) {
            var modalAlert = $uibModal.open({
                templateUrl: 'modals/heads_up_modal.html',
                controller: 'ModalInstanceCtrl',
                resolve: {
                    photo: function() {
                        return '$ctrl.photo';
                    }
                },
            });

            modalAlert.result.then(function(response) {
                $cookies.putObject('modalViewed', response, { expires:expDate });
            });
        }
    }

    // this prompts the modal that requires confirmation prior to deleting photo from database
    $scope.doubleCheck = function(photo) {
        var $ctrl = this;
        // console.log($ctrl.photo);

        var modalInstance = $uibModal.open({
            templateUrl: 'modals/delete_image_modal.html',
            controller: 'ModalInstanceCtrl',
            windowClass: 'warn-modal',
            resolve: {
                photo: function() {
                    return $ctrl.photo;
                }
            },
        });

    // if confirmation received for delete, return id of photo
        modalInstance.result.then(function(pID) {
            $scope.delete(pID);
        });

    }

}]); //
