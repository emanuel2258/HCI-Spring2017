/*****
*
*   Contains all Angular JS service, factory and controller logic.
*
*   Authors: Emanuel Martinez, Illary Lopez
*
*****/

var myPhotoboothApp = angular.module('myPhotoboothApp', ['ngRoute']);

myPhotoboothApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'addEvent.html',
				controller  : 'myPhotoboothController'
			})

			// route for the about page
			.when('/addEvent', {
				templateUrl : 'addEvent.html',
				controller  : 'myPhotoboothController'
			})

			// route for the contact page
			.when('/contact', {
				templateUrl : 'addEvent.html',
				controller  : 'myPhotoboothController'
			});
    	});

myPhotoboothApp.controller('myPhotoboothController', function($scope, $window, $location) {

  
    $scope.users = [{userId:'emanuel.martinez4@upr.edu', password:'example'}, {userId:'illary.lopes@upr.edu', password:'example'} ];

      $scope.events = [];
  
    
 
    //function for checking users
    $scope.checkUser = function(userId, password){
            
//       for(var i=0; i < $scope.users.length; i++) {
//           if ($scope.users[i].userId == userId && $scope.users[i].password == password){
//               console.log("Entre aqui");
//               $window.location = 'dashboard.html'
//               return; 
//           }
//           
//        }
//    alert("Username or password is incorrect");
        $window.location = 'dashboard.html';
            }
    
    //function for checking users
    $scope.addEvent = function(event){
        
       // cars.push(event);
        $scope.events.push(event);
        //console.log(event);
        //console.log($scope.events);
    
         $window.location = 'dashboard.html';
           
        }
   
});