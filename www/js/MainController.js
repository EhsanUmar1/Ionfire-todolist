/**
 * Created by hp Elite Book 8530p on 9/12/2015.
 */
angular.module('toDoApp')

  .controller('MainController' , function($scope , $state ){

    $scope.next = function(path){

      $state.go(path);
    }



  })
