/**
* Main AngularJS Web Application
*/

var app = angular.module('industryInnovators', ['ngRoute']);



/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "partials/home.html", controller: "PageCtrl"})
    .when("/todo", {templateUrl: "partials/todo.html", controller: "TodoCtrl"})
    .when("/contact", {templateUrl: "partials/contact.html", controller: "PageCtrl"})
    // else 404
    .otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
}]);


app.controller('KelleesController', ['$scope', function($scope) {
	$scope.product = 'hello sunshine';
}]);


app.controller('TodoCtrl', ['$scope', function($scope) {
	

	$scope.todos = [
		{ text: 'Learn AngularJs', done: false },
		{ text: 'Feed the dogs', done: false },
	];

	$scope.getTotalTodos = function() {
		return $scope.todos.length;
	}

	$scope.addTodo = function() {
		$scope.todos.push({text:$scope.formTodoText, done:false});
		$scope.formTodoText = '';
	}

	$scope.clearCompleted = function() {
		$scope.todos =_.filter($Scope.todos, function(todo) {
			return !todo.done;
		})
	}
}]);