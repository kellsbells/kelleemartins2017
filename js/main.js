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
    .when("/", {templateUrl: "partials/home.html", controller: "CatController"})
    .when("/todo", {templateUrl: "partials/todo.html", controller: "TodoCtrl"})
}]);


app.controller('CatController', ['$scope', function($scope) {
	$scope.cats = [
		{
			name: 'Fluffy',
			image: 'http://cdn2-www.webecoist.momtastic.com/assets/uploads/2010/02/sphynx_cats_8x.jpg'
		},
		{
			name: 'Sir Nakey',
			image: 'https://qph.ec.quoracdn.net/main-qimg-4df06f1cfecbaed943e664531d52494f-c'
		},
		{
			name: 'Pantless',
			image: 'https://featuredcreature.com/wp-content/uploads/2011/12/DSC_0156.jpg'
		},
		{
			name: 'Selena Gomez',
			image: 'https://pbs.twimg.com/profile_images/586008601258405888/XggTWhbR.jpg'
		},
		{
			name: 'Stimpy',
			image: 'http://hairlesscatblog.com/wp-content/uploads/2013/03/canadian-hairless-cat-for-sale.jpg'
		},
		{
			name: 'Fabio',
			image: 'https://s-media-cache-ak0.pinimg.com/736x/80/df/37/80df374b87514c44651ff78330537dca.jpg'
		},
		{
			name: 'Fluffy',
			image: 'http://cdn2-www.webecoist.momtastic.com/assets/uploads/2010/02/sphynx_cats_8x.jpg'
		},
		{
			name: 'Sir Nakey',
			image: 'https://qph.ec.quoracdn.net/main-qimg-4df06f1cfecbaed943e664531d52494f-c'
		},
		{
			name: 'Pantless',
			image: 'https://featuredcreature.com/wp-content/uploads/2011/12/DSC_0156.jpg'
		},
	];
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