console.log('test');

let myApp = angular.module('myApp', []);

myApp.controller('myController', function(){
  console.log('myController');
  this.sashimi = 'We ate Sashimi of Pikachu on Japanese restaurant';
});

myApp.controller('nextController', function(){
  console.log('nextController');
  this.title = 'We paid B300,000- on Pokemon stop';
});

myApp.controller('divController',[
  '$scope',
  function($scope){
    console.log('--divController--');
    $scope.myName = 'Pokemon Taro';
    $scope.myFavoriteLanguage = 'LUA';
    $scope.myFavoriteJSLibrary = 'script.aculo.us';
    $scope.now = Date.now();
    $scope.update = function(){
       console.log('clicked');
       console.log($scope.pokemon);
       $scope.pokemon = $scope.pokemon || {};
       $scope.myName = $scope.pokemon.name;
       $scope.myFavoriteLanguage = $scope.pokemon.language;
       $scope.myName = $scope.pokemon.library;
       $scope.pokemon = {};
    }
  }
]);
