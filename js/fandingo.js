var app = angular.module('fandingoApp', []); // have a matching <body ng:app="movieApp"> in your html!


app.factory('fandingoModel', function() {
	return {
		movies: function() {
				return [	{	name:"A good day to Die Hard",
								image:"img/diehard5-131f.jpg", 
								description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc." }, 
							{	name:"Safe Haven", 
								image:"img/safehaven1025.jpg", 
								description:"Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. " },
							{	name:"Beautiful Creatures",
								image:"img/beautifulcreatures.jpg",
								description: "Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in justo eu magna luctus suscipit." },
							{	name:"Escape from planet Earth",
								image:"img/escapefromearth1218f.jpg",
								description: "Sed lectus. Integer euismod lacus luctus magna. Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia molestie dui. Praesent blandit dolor. Sed non quam. In vel mi sit amet augue congue elementum. Morbi in ipsum sit amet pede facilisis laoreet. Donec lacus nunc, viverra nec, blandit vel, egestas et, augue. Vestibulum tincidunt malesuada tellus. Ut ultrices ultrices enim. Curabitur sit amet mauris. Morbi in dui quis est pulvinar ullamcorper. " },
							{	name:"Identity Theft",
								image:"img/identitythief-ps-26.jpg", 
								description: "Integer euismod lacus luctus magna. Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia molestie dui. Praesent blandit dolor. Sed non quam. In vel mi sit amet augue congue elementum. Morbi in ipsum sit amet pede facilisis laoreet. Donec lacus nunc, viverra nec, blandit vel, egestas et, augue. Vestibulum tincidunt malesuada tellus. Ut ultrices ultrices enim. Curabitur sit amet mauris. Morbi in dui quis est pulvinar ullamcorper." },
							{	name:"The bitter Buddha",
								image:"img/thebitterbuddha-ps-7.jpg",
								description: "Nulla facilisi. Integer lacinia sollicitudin massa. Cras metus. Sed aliquet risus a tortor. Integer id quam. Morbi mi. Quisque nisl felis, venenatis tristique, dignissim in, ultrices sit amet, augue. Proin sodales libero eget ante. Nulla quam. Aenean laoreet. Vestibulum nisi lectus, commodo ac, facilisis ac, ultricies eu, pede. Ut orci risus, accumsan porttitor, cursus quis, aliquet eget, justo. Sed pretium blandit orci. Ut eu diam at pede suscipit sodales. " },
							{	name:"Like Someone in Love",
								image:"img/likesomeoneinlove115.jpg",
								description: "Aenean lectus elit, fermentum non, convallis id, sagittis at, neque. Nullam mauris orci, aliquet et, iaculis et, viverra vitae, ligula. Nulla ut felis in purus aliquam imperdiet. Maecenas aliquet mollis lectus. Vivamus consectetuer risus et tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris." },
							{	name:"Murder 3",
								image:"img/murder3-ps-12.jpg",
								description: "Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis." },
							{	name:"No",
								image:"img/no-poster-500.jpg",
								description: "Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti." },
							{	name:"The power of Few",
								image:"img/tpof.jpg",
								description: "Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna. Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia molestie dui. Praesent blandit dolor. Sed non quam. In vel mi sit amet augue congue elementum." },	
							{	name:"Saving Lincoln",
								image:"img/saving_lincoln_117.jpg",
								description: "Morbi in ipsum sit amet pede facilisis laoreet. Donec lacus nunc, viverra nec, blandit vel, egestas et, augue. Vestibulum tincidunt malesuada tellus. Ut ultrices ultrices enim. Curabitur sit amet mauris. Morbi in dui quis est pulvinar ullamcorper. Nulla facilisi. Integer lacinia sollicitudin massa. Cras metus. Sed aliquet risus a tortor. Integer id quam. Morbi mi." }
					]; 
				},
		currentMovie: null
	}
});


function appCtrl($scope, fandingoModel) {
	$scope.fandingoModel = fandingoModel; // save the service to be able to watch it.
	$scope.movies = fandingoModel.movies();
	$scope.selectedMovie = null;

	$scope.$watch('fandingoModel.currentMovie', function (newVal, oldVal) {
		$scope.selectedMovie = fandingoModel.currentMovie;
	});

	$scope.unselectAllMovies = function() {
		_.each($scope.movies, 
			function(movie) {
				movie.isSelected = false;
			});
		$scope.selectedMovie = null;
	};
	$scope.selectMovie = function(movie) {
		$scope.unselectAllMovies();
		$scope.selectedMovie = movie;
		movie.isSelected = true;
	}
}


function movieCtrl($scope, fandingoModel) {

	$scope.fandingoModel = fandingoModel;
	$scope.isSelected = false;

	$scope.$watch('movie.isSelected', function() {
		$scope.isSelected = $scope.movie.isSelected;
	});

	$scope.selectMovie = function() {
		var prevSelection = $scope.isSelected;
		
		if ($scope.movie.isSelected) {
			$scope.$parent.unselectAllMovies();
		} else {
			$scope.$parent.unselectAllMovies();
			$scope.$parent.selectMovie($scope.movie);
		}
	}
}