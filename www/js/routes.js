angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.home', {
    url: '/home',
    views: {
      'wearDress': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('menu.addDress', {
    url: '/adddress',
    views: {
      'wearDress': {
        templateUrl: 'templates/addDress.html',
        controller: 'addDressCtrl'
      }
    }
  })

  .state('menu.selectDress', {
    url: '/selectdress',
    views: {
      'wearDress': {
        templateUrl: 'templates/selectDress.html',
        controller: 'selectDressCtrl'
      }
    }
  })

  .state('menu', {
    url: '/wearDress',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('menu.profile', {
    url: '/profile',
    views: {
      'wearDress': {
        templateUrl: 'templates/profile.html',
        controller: 'profileCtrl'
      }
    }
  })

  .state('signup', {
    url: '/signup',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

$urlRouterProvider.otherwise('/login')

  

});