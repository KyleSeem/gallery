
myApp.controller('PhotosController', ['$scope', 'photoFactory', '$cookies', '$location', '$routeParams', '$uibModal', '$route', function($scope, photoFactory, $cookies, $location, $routeParams, $uibModal, $route){
    $scope.sessionPhotos = $cookies.getObject('photoArray');
    $scope.animationsEnabled = true;
    $scope.photos = [];
    $scope.selectedTag;
    console.log('scope', $scope);

// gets the data from the current route and updates nav bar with "active" class for associated route
    render = function() {
        $cookies.getAll();
        var renderAction = $route.current.action;
        var isHome = (renderAction == 'home');
        var isUpdate = (renderAction == 'update');
        var isAbout = (renderAction == 'about');

        $scope.renderAction = renderAction;
        if (isHome) {
            $scope.isHome = 'active';
        }
        else if (isUpdate) {
            $scope.isUpdate = 'active';
        }
        else if (isAbout) {
            $scope.isAbout = 'active';
        }
    }

// used to determine route on page change - this was done so I didn't have to include the full nav on every partial
    $scope.$on(
        "$routeChangeSuccess",
        function($currentRoute, $previousRoute) {
            // console.log($currentRoute);
            $scope.isHome = 'nope';
            $scope.isUpdate = 'nope';
            $scope.isAbout = 'nope';

            render();
            // console.log($scope.renderAction);
        }
    )

// get all photos
    $scope.index = function() {
        $scope.sessionPhotos = $cookies.getObject('photoArray');
        photoFactory.index(function(response) {
            $scope.photos = response;
        });
    }

    $scope.getSession = function() {
        $scope.sessionPhotos = $scope.sessionPhotos;

    }
// clear photos -- initiated on load of dash -- makes masonry recreate wall so all columns appear correctly
    // w/o this, page refresh often results in single column
    $scope.clearWall = function() {
        $scope.photos = [];
    }

// clear search results manually
    $scope.clearFilter = function() {
        $scope.search = undefined;
        $scope.photos = [];
        $scope.sessionPhotos = $cookies.getObject('photoArray');
        $scope.index();
    }

// MODAL - window size adjusted for vertical photos
    $scope.viewPhoto = function() {
        var $ctrl = this;
        console.log('s', $scope.selectedTag);
        // console.log($ctrl.photo);

        if ($ctrl.photo.orientation === 'vertical') {
            var modalInstance = $uibModal.open({
                templateUrl: 'modals/view_image_modal.html',
                controller: 'ModalInstanceCtrl',
                windowClass: 'vertical',
                resolve: {
                    photo: function() {
                        return $ctrl.photo;
                    },
                },
            });
        }
        else if ($ctrl.photo.orientation === 'horizontal') {
            var modalInstance = $uibModal.open({
                templateUrl: 'modals/view_image_modal.html',
                controller: 'ModalInstanceCtrl',
                resolve: {
                    photo: function() {
                        return $ctrl.photo;
                    }
                },
            });
        }

    // search database for photos with selected tag
        modalInstance.result.then(function(selectedTag) {
            // assign to parent scope so clear filter will reset properly
            console.log(selectedTag);
            $scope.$parent.search = { tags: selectedTag };
            $scope.search = { tags: selectedTag };
        });
    }

}]); // close PhotosController
