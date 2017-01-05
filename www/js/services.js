angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('BlankService', ['$http', '$q', function($http, $q){
	this.login = function(email, password){
		var defer = $q.defer();
		var req = {
			method: 'POST',
            url: 'http://testappdress.herokuapp.com/login',
            headers: {
                'Content-Type': "application/json"
            },
            data: {email:email, password:password}
        };

		$http(req).success(function (successResponse) {
            defer.resolve(successResponse);
        })
        .error(function (errorResponse) {
            defer.reject(errorResponse);
        });
        return defer.promise;
	};
}]);
