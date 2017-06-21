/*****
*
*   Contains all Angular JS service, factory and controller logic.
*
*   Authors: Emanuel Martinez, Illary Lopez
*
*****/

var myPhotoboothApp = angular.module('myPhotoboothApp', []);



myPhotoboothApp.controller('myPhotoboothController', function($scope, $window, $location) {

    $scope.users = [{userId:'emanuel.martinez4@upr.edu', password:'example'}, {userId:'illary.lopez@upr.edu', password:'example'} ];
        $scope.events = [];

    //function for checking users
    $scope.checkUser = function(userId, password){
            
       for(var i=0; i < $scope.users.length; i++) {
           if ($scope.users[i].userId == userId && $scope.users[i].password == password){
               console.log("Entre aqui");
               $window.location = 'dashboard.html'
               return; 
           }
           
        }
        
    alert("Username or password is incorrect");
        
            }
});