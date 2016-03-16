/**
 * Created by hp Elite Book 8530p on 9/7/2015.
 */

angular.module('toDoApp')

.service('SaveData' , function($firebaseArray){

    var ref = new Firebase('https://fbauthenticat.firebaseio.com/').child('toDoLists');
    var secondRef = new Firebase('https://fbauthenticat.firebaseio.com/').child('selectedLists');

    this.toDoLists = [];
    this.toDoLists = $firebaseArray(ref);
    this.selectedData = [];
    this.selected = [];

    this.selectedData = $firebaseArray(secondRef);

  this.saveData = function(lists){

    this.toDoLists.$add(lists);
    console.log(this.toDoLists);

  }

  this.returnData = function(){

    return this.toDoLists;

  }
  this.removeData = function(userIndex){

    var remove =  this.toDoLists.$remove(userIndex);
    console.log(typeof(remove));
    console.log(remove);
    return remove;
  }


  this.selectItems = function(item){

    this.selectedData.$add(item);
    console.log(this.selectedData);
    console.log(this.selectedData.length);


  }
  this.removeSelectedData = function(sDIndex){
    console.log(sDIndex);
    this.selectedData.$remove((sDIndex));
    console.log(this.selectedData.length);
  }

  this.returnSelectedData = function(){
    return this.selectedData;
  }



})
