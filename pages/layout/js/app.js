/*****
*
*   Contains all Angular JS service, factory and controller logic.
*
*   Authors: Emanuel Martinez, Illary Lopez
*
*****/

var myPhotoboothApp = angular.module('myPhotoboothApp', []);



myPhotoboothApp.controller('myPhotoboothController', function($scope, $window, $location) {

  
    $scope.users = [{userId:'alexander.pierce@example.com', password:'example'}, {userId:'illary.lopes@upr.edu', password:'example'} ];
 $scope.events =[];

  
    


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
        $window.location = 'dashboard.html';
            }
    
    //function for checking users
    $scope.addEvent = function(event){
        
       $scope.events.push(event);
    
        $window.location = 'dashboard.html';
           
    }
    
      $scope.hide = false;
      $scope.checked = false;
    $scope.checkboxClick = function() {
      if (checked = true)
      {$scope.hide = !$scope.hide;}
      else
      $scope.hide = !$scope.hide;
    };
   
});