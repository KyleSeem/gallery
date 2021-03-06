
myApp.controller('PhotosController', ['$scope', 'photoFactory', '$cookies', '$location', '$routeParams', '$uibModal', '$route', '$window', function($scope, photoFactory, $cookies, $location, $routeParams, $uibModal, $route, $window){
    $scope.sessionPhotos = $cookies.getObject('photoArray');
    $scope.animationsEnabled = true;
    $scope.photos = [];
    $scope.selectedTag;
    $scope.harpuff = "Harry Potter";
    $scope.cats = [];

    // $scope.search = { tags: 'cats' };

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
        $scope.search = {};
        $scope.photos = [];
        $scope.sessionPhotos = $cookies.getObject('photoArray');
        $scope.index();
    }

// open new tab for github repo link (about site page)
    $scope.newTab = function(link) {
        $window.open(link);
    }

// collapse animation gets wonky in full screen mode -
//this seems to resolve the issue rather than having 'ng-click="isNavCollapsed = !isNavCollapsed"'
    $scope.checkCollapse = function() {
        if ($scope.isNavCollapsed === true) {
            $scope.isNavCollapsed = false;
        }
    }

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
            $scope.background = null;
            $scope.footClass = 'home';
        }
        else if (isUpdate) {
            $scope.isUpdate = 'active';
            $scope.background = null;
            $scope.footClass = 'update';
        }
        else if (isAbout) {
            $scope.isAbout = 'active';
            $scope.background = 'painting';
            $scope.footClass = 'about';
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

////////////////////
// MODAL - window size adjusted for vertical photos
    $scope.viewPhoto = function() {
        var $ctrl = this;
        // console.log($ctrl.photo);

        var modalInstance = $uibModal.open({
            templateUrl: 'modals/view_image_modal.html',
            controller: 'ModalInstanceCtrl',
            resolve: {
                photo: function() {
                    return $ctrl.photo;
                }
            },
        });


    // search database for photos with selected tag
        modalInstance.result
        .then(function(selectedTag) {
            // console.log(selectedTag);
            // only execute if tag is selected; if close button clicked DO NOT reset masonry grid
            if (selectedTag != undefined) {
                // essentially resetting masonry - this helps with formatting bug (??)
                $scope.photos = [];
                $scope.sessionPhotos = $cookies.getObject('photoArray');
                $scope.index();

                // assign to parent scope so clear filter will reset properly
                $scope.$parent.search = { tags: selectedTag };
                $scope.search = { tags: selectedTag };
                $window.scrollTo(0,0);
            }
        })
        .catch(function(res) {
            if (!(res === 'cancel' || res === 'escape key press' || res === 'backdrop click')) {
                throw res;
            }
        });
    }

//////////////////
// EASTER EGG
    // gets all easter egg images - index method
    $scope.easter = function() {
        photoFactory.easter(function(response) {
            $scope.cats = response;
        });
    }

    // modal function - slightly altered for easter egg only
    $scope.viewCats = function() {
        var $ctrl = this;
        // console.log($ctrl.photo);

        var modalInstance = $uibModal.open({
            templateUrl: 'modals/cats_modal.html',
            controller: 'ModalInstanceCtrl',
            resolve: {
                photo: function() {
                    return $ctrl.cat;
                }
            },
        });

        modalInstance.result
        .catch(function(res) {
            if (!(res === 'cancel' || res === 'escape key press' || res === 'backdrop click')) {
                throw res;
            }
        });
    }


}]); // close PhotosController
