// this is the controller for the modalInstance
myApp.controller('ModalInstanceCtrl', function($scope, $uibModalInstance, photo){
    $scope.photo = photo;

    $scope.close = function() {
        $uibModalInstance.close();
    }

    $scope.searchTag = function() {
        var selectedTag = this.tag;
        $uibModalInstance.close(selectedTag);
    }

    $scope.yesDelete = function() {
        var pID = this.photo._id;
        $uibModalInstance.close(pID);
    }

    // updated delete confirmation for limited functionality
    $scope.yesDeleteSess = function() {
        $uibModalInstance.close(this.photo);
    }

    // returns data indicating modal has been viewed
    $scope.alertViewed = function() {
        var yes = { viewed:true };
        $uibModalInstance.close(yes);
    }
}); // close ModalInstanceCtrl
