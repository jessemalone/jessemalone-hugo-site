//let React = require("react"),
//    ReactPlayer = require("react-player");
import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import ReactDOM from 'react-dom'
import Audio from 'react-audioplayer'; 

class Player extends React.Component {
  render () {
          var media_urls=[
            "/assets/media/Rejex.mp3" ,
            "/assets/media/False_Impression.mp3",
            "/assets/media/Encapsulation.mp3" ,
          ]
    return (
    	<div className='player-wrapper'> 
        <ReactPlayer 
          url={ media_urls }
          className='react-player' 
          playing='false'
          controls='true'
          width='100%' 
          height='30px' 
        /> 
      </div>
    )
  }
}


import  'angular';
import 'angular-route';

// Declare app level module which depends on filters, and services
angular.module('app', [
  'ngRoute'
]).
    config(['$routeProvider', '$interpolateProvider', function($routeProvider, $interpolateProvider) {
    $routeProvider.when('/home', {templateUrl: '/angular_templates/home', controller: 'pageController'});
    $routeProvider.when('/projects', {templateUrl: '/angular_templates/projects ', controller: 'pageController'});
    $routeProvider.when('/events', {templateUrl: '/angular_templates/events', controller: 'pageController'});
    $routeProvider.otherwise({templateUrl: '/angular_templates/home'});


    $interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');
    }])

    .controller('pageController', ['$scope', '$routeParams', function($scope, $routeParams) {
  
    }]);


angular.bootstrap(document, ['app']);

ReactDOM.render(
  <Player />,
  document.getElementById('player-container')
);
