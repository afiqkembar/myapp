angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('logMasuk', {
    url: '/page2',
    templateUrl: 'templates/logMasuk.html',
    controller: 'logMasukCtrl'
  })

  .state('semakanPelajar', {
    url: '/page3',
    templateUrl: 'templates/semakanPelajar.html',
    controller: 'semakanPelajarCtrl'
  })

  .state('lamanUtama', {
    url: '/page1',
    templateUrl: 'templates/lamanUtama.html',
    controller: 'lamanUtamaCtrl'
  })

  .state('kemaskiniMataDemeritPelajar', {
    url: '/page4',
    templateUrl: 'templates/kemaskiniMataDemeritPelajar.html',
    controller: 'kemaskiniMataDemeritPelajarCtrl'
  })

  .state('semakanMataDemerit', {
    url: '/page5',
    templateUrl: 'templates/semakanMataDemerit.html',
    controller: 'semakanMataDemeritCtrl'
  })

$urlRouterProvider.otherwise('/page2')


});