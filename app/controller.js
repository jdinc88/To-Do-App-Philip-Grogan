
//* Author: Philip Grogan 
//* Assignment: WE4.1 To-do List Mobile Web Application, Digital Skills Academy   
//* Date: 2016/09/09 


var app = angular.module('myApp', []);
app.controller('todoCtrl', function($scope) {
    $scope.todoList = [
    
        {todoText:'Submit assessment', done:false}, 
        {todoText:'Do E-zine for this week', done:false}, 
        {todoText:'Give Codey a bath - he smells like wet carpet!', done:false},
        {todoText:'Go food shopping', done:false}
];

    $scope.getTotalTodos = function () {
    return $scope.todoList.length;
  };

    $scope.todoAdd = function() {
        $scope.todoList.push({todoText:$scope.todoInput, done:false});
        $scope.todoInput = "";
    };

    $scope.remove = function() {
        var oldList = $scope.todoList;
        $scope.todoList = [];
        angular.forEach(oldList, function(x) {
            if (!x.done) $scope.todoList.push(x);

        });
    };
});