var app = angular.module("Forehead", ['ngAnimate']);
app.controller("guessController", ["$scope", "$http", "$timeout", "WordService", function($scope, $http, $timeout, wordService) {

  var TIME_PER_ROUND = 90;

  $scope.categoriesArray = [];
  for (var property in wordService.categories) {
    $scope.categoriesArray.push(property);
  }

  $scope.startGame = function() {
    $scope.currentCategory = '';
    $scope.currentWord = '';
    $scope.countdown = null;

    $scope.wordsDisplayed = [];
    $scope.wordsGuessed = [];
    $scope.wordsMissed = [];
    $scope.timeLeft = TIME_PER_ROUND;
  }

  $scope.correct = function($event) {
    if ($scope.currentCategory && $scope.countdown == null && $scope.timeLeft) {
      $scope.wordsGuessed.push($scope.currentWord);
      $scope.pickNewWord();
    }
  }

  $scope.skip = function($event) {
    if ($scope.currentCategory && $scope.countdown == null && $scope.timeLeft) {
      $scope.wordsMissed.push($scope.currentWord);
      $scope.pickNewWord();
    }
  }

  $scope.pickNewWord = function() {
    $scope.currentWord = null;
    while (!$scope.currentWord || $scope.wordsDisplayed.indexOf($scope.currentWord) > -1) {
      var idx = Math.floor( Math.random()  * wordService.categories[$scope.currentCategory].length );
      $scope.currentWord = wordService.categories[$scope.currentCategory][idx];
    }
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
    $scope.timeLeft = TIME_PER_ROUND;
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

  $scope.startGame();
}]);
