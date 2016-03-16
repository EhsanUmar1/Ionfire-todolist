/**
 * Created by hp Elite Book 8530p on 9/7/2015.
 */
angular.module('toDoApp')
.controller('HomeController' , function ($scope , SaveData ,$state ) {

    $scope.obj = {
      item : '',
      isSelected : false
    };

    $scope.save = function(){

      SaveData.saveData( $scope.obj);
      /*$state.go(path);*/
      console.log( $scope.obj);
      $scope.obj.item = "";
      $scope.obj.isSelected = false;

    }
    $scope.data = SaveData.returnData();
    $scope.delete = function(index){
      SaveData.removeData(index);

    }
    $scope.back = function(path){

        $state.go(path);

    }

    $scope.selected = function(condition , item , index , id){
     this.gets = SaveData.toDoLists[index];
      console.log(id);


      if(condition){
        console.log(item);
        this.gets.item = item;
        this.gets.isSelected = true;

        console.log(SaveData.toDoLists[index].isSelected);
        SaveData.toDoLists[index].isSelected = true;
        SaveData.toDoLists[index].item = item;

        SaveData.toDoLists.$save(this.gets).then(function() {
          alert('Changes Saved!');
        });
       SaveData.selectItems(item);
        console.log("This is Length "  + SaveData.toDoLists.length);


      }

      else{

        console.log(item);
        for(var i=0; i<SaveData.selectedData.length; i++){
            if(SaveData.selectedData[i].$value === item){
              console.log(SaveData.removeSelectedData(i));
              this.gets.isSelected = false;
              console.log(SaveData.toDoLists[index].isSelected);
              SaveData.toDoLists[index].isSelected = false;
              SaveData.toDoLists[index].item = item;
              SaveData.toDoLists.$save(this.gets).then(function() {
                alert('Changes Saved!');
              });
                return;
            }

        }


        /*console.log(SaveData.selectedData[i].$value + " " + SaveData.selectedData.length );*/

        /*SaveData.removeSelectedData(item);
        SaveData.selectedData.$remove(item);
        this.gets.isSelected = false;
        console.log(SaveData.toDoLists[index].isSelected);
        SaveData.toDoLists[index].isSelected = false;
        SaveData.toDoLists[index].item = item;
        SaveData.toDoLists.$save(this.gets).then(function() {
          alert('Changes Saved!');
        });*/
        console.log(index);
      }

    }
   var selectItems = SaveData.returnSelectedData();

    $scope.view = function(path){

      for(var i=0; i< SaveData.selectedData.length; i++){

         for(var j=0; j<SaveData.toDoLists.length; j++){

           if(SaveData.selectedData[i].$value === SaveData.toDoLists[j].item) {
              /* console.log($scope.data[j].item);
               console.log($scope.data.splice(j , 1));*/
             SaveData.toDoLists.$remove(j);

           }


         }


      }


      $state.go(path);
     /* console.log($scope.data.length);
      console.log(selectItems.length);*/

    }

  })
