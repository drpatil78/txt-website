'use strict';

/**
 * @ngdoc function
 * @name txtWebsiteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the txtWebsiteApp
 */
angular.module('txtWebsiteApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
   		'Text Messenger',
   		'Chat Marks and Messege Threads',
   		'Group Chat & Voice Calling',
   		'Designed to work with your IT',
   		'Fully Customizable',
   		'Distributed Architecture',
   		'Completely Open Source',
    ];
  });
