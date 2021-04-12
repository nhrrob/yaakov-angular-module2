(
    function () {
        'use strict';
        angular.module('LunchCheck', [])
            .controller('LunchCheckController', LunchCheckController);

            LunchCheckController.$inject = ['$scope'];

        function LunchCheckController($scope, $filter){
            $scope.lunchItems = '';
            $scope.lunchMessage = '';

            $scope.calculateLunchItems = function(){
                let totalItemsArr = $scope.lunchItems.split(',');
                var filtered = totalItemsArr.filter(function (el) {
                    return el != '';
                  });
                  console.log(filtered);
                let totalItems = 0;

                if($scope.lunchItems != ''){
                    totalItems = filtered.length;
                }
                console.log(totalItems);
                let message = '';
                if(totalItems > 0 && totalItems <= 3){
                    message = 'Enjoy!';
                }else if (totalItems > 3){
                    message = 'Too much!';
                }else if (totalItems == 0){
                    message = 'Please enter data first';
                }
                $scope.lunchMessage = message;
            }
        }
    }

)();