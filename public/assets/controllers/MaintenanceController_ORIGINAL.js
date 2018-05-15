// this controller contains original CRUD functions for actually updating the database - not used for deployment to portfolio site
myApp.controller('MaintenanceController_ORIGINAL', ['$scope', 'photoFactory', '$uibModal', '$location', "$routeParams", '$route', function($scope, photoFactory, $uibModal, $location, $routeParams, $route){
    $scope.photos = [];
    $scope.newPhoto = {};
    $scope.editPhoto = {};
    $scope.tempTags = [];
    $scope.img_toggle = 0;
    $scope.alerts = [];

    console.log($scope.photos);

    // get all images from database
    $scope.index = function() {
        photoFactory.index(function(response) {
            $scope.photos = response;
        });
    }

    // create new image and save to databse
    $scope.create = function() {
        $scope.alerts = [];
        $scope.newPhoto.tags = $scope.tempTags;

        photoFactory.create($scope.newPhoto, function(response) {
            if (response.alerts) {
                $scope.alert_class = 'danger';
                $scope.alerts = response.alerts;
            }
            else {
                $scope.photos = response;
                $scope.newPhoto = {};
                $scope.tempTags = [];
                $scope.alert_class = 'success';
                $scope.alerts.push('Photo successfully added');
            }
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

    // identify photo to edit/update and route to that photo's dedicated page
    $scope.edit = function(id) {
        $location.url('/photography/maintain/' + id);
    }

    // retrieve and display info for selected photo
    $scope.show = function() {
        photoFactory.show($routeParams.id, function(response) {
            $scope.tempTags = response.tags;
            $scope.editPhoto = response;
            if ($scope.tempTags === null) {
                $scope.tempTags = [];
            }
        })
    }

    // UPDATE changes to database
    $scope.update = function() {
        $scope.alerts = [];

        $scope.editPhoto.tags = $scope.tempTags;
        if ($scope.editPhoto.name.length < 1) {
            $scope.alerts.push('image title required');
            $scope.alert_class = 'danger';
        }
        else {
            photoFactory.update($scope.editPhoto, function(response) {
                $location.url('/photography/maintain/update_db');
            })
            $scope.editPhoto = {};
        }
    }

    // DELETE photo from database
    $scope.delete = function(id) {
        $scope.alerts = [];

        photoFactory.delete(id, function(response) {
            $scope.alert_class = 'success';
            $scope.alerts.push('The photo titled "' + response.name + '" has been successfully deleted from the databse');
            $scope.index();
        })
    }

// MODAL RELATED
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
