var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.myFunc = function(my) {
        $scope.x = my.clientX;
        $scope.y = my.clientY;
    }
});
