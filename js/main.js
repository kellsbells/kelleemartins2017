/**
* Main AngularJS Web Application
*/

var app = angular.module('kelleeMartins', []);


app.controller('SocialController', ['$scope', function($scope) {
	$scope.socials = [
		{
			name: 'kellee', 
		},
		{
			name: 'dawn', 
		},
	]
}]);


app.controller('ProjectController', ['$scope', function($scope) {

	$scope.projects = [
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
