var app = angular.module("Forehead", ['ngAnimate']);
app.controller("guessController", ["$scope", "$http", "$timeout", function($scope, $http, $timeout) {

  $scope.currentCategory = '';
  $scope.currentWord = '';
  $scope.countdown = null;

  $scope.wordsDisplayed = [];
  $scope.wordsGuessed = [];
  $scope.wordsMissed = [];
  $scope.timeLeft = 30;

  $scope.categories = {
    'animals': [
      'pig', 'horse', 'goat', 'cow', 'chicken', 'duck',
      'cat', 'mouse', 'dog', 'donkey', 'rat', 'ferret',
      'alligator', 'zebra', 'crocodile', 'elephant', 'ostrich',
      'giraffe', 'hippopotamus', 'cheetah', 'lion', 'tiger', 'bear',
      'snake', 'lizard', 'wolf', 'deer', 'mountain lion', 'parakeet',
      'parrot', 'whale', 'octopus', 'trout', 'crayfish', 'lobster',
      'crab', 'eel', 'shark', 'spider', 'praying mantis', 'squirrel',
      'chipmunk', 'owl', 'eagle', 'rabbit', 'kangaroo', 'koala bear',
      'sloth', 'monkey', 'hawk', 'falcon', 'goose', 'caterpillar', 'butterfly',
      'moth', 'worm', 'beetle', 'cricket', 'clown fish', 'swordfish', 'squid',
      'panther', 'coyote', 'fox', 'moose', 'elk', 'antelope', 'polar bear',
      'penguin', 'rhinoceros', 'mongoose', 'turtle'
    ],
    'around the house': [
      'computer', 'lamp','phone','window','door','table','piano','closet'
    ],
    'miscellaneous': [
      'car', 'truck', 'train', 'airplane'
    ]
  };
  $scope.categoriesArray = [];
  for (var property in $scope.categories) {
    $scope.categoriesArray.push(property);
  }

  $scope.handleClick = function($event) {
    if ($scope.currentCategory && $scope.countdown == null && !$scope.timeLeft) {

    }
    if ($scope.currentCategory && $scope.countdown == null && $scope.timeLeft) {
      $scope.wordsGuessed.push($scope.currentWord);
      $scope.pickNewWord();
    }
  }

  $scope.pickNewWord = function() {
    var idx = Math.floor( Math.random()  * $scope.categories[$scope.currentCategory].length );
    $scope.currentWord = $scope.categories[$scope.currentCategory][idx];
    $scope.wordsDisplayed.push($scope.currentWord);
  }

  $scope.chooseCategory = function($event, category) {
    $scope.currentCategory = category;
    $scope.countdown = 3;
    $timeout($scope.countDown, 1000);
    $event.stopPropagation();
  }

  $scope.countDown = function() {
    $scope.countdown--;
    if ($scope.countdown == -1) {
      $scope.startRound();
    }
    else {
      $timeout($scope.countDown, 1000);
    }
  }

  $scope.startRound = function() {
    $scope.countdown = null;
    $scope.wordsDisplayed = [];
    $scope.wordsGuessed = [];
    $scope.wordsMissed = [];
    $scope.timeLeft = 5;
    $scope.pickNewWord();

    $timeout($scope.tickTock, 1000);
  }

  $scope.tickTock = function() {
    $scope.timeLeft--;
    if ($scope.timeLeft == 0) {
      $scope.endRound();
    }
    else {
      $timeout($scope.tickTock, 1000);
    }
  }

  $scope.endRound = function() {
    $scope.wordsMissed.push($scope.currentWord);
    $scope.currentWord = null;
  }

}]);
