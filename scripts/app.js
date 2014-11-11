var app = angular.module('app', ['ngRoute']);
	
app.config(function ($routeProvider){
	$routeProvider
	.when('/signIn',
	{
		controller: 'SignInController',
		templateUrl: 'SignIn.html'
	})
	.when('/feed',
	{
		controller: 'FeedController',
		templateUrl: 'Feed.html'
	})
	.when('/profile',
	{
		controller: 'ProfileController',
		templateUrl: 'Profile.html'
	})
	.otherwise({redirectTo: '/signIn'});
});