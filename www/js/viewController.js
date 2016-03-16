/**
 * Created by hp Elite Book 8530p on 9/7/2015.
 */
angular.module('toDoApp')

.controller('ViewController' , function($scope , $state , SaveData){

    $scope.back = function(path){

      $state.go(path);
    }
    $scope.selectedItems = SaveData.returnSelectedData();


  })
