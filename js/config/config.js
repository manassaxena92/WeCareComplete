wc
.config(function ($stateProvider, $urlRouterProvider, $locationProvider){
  $urlRouterProvider.otherwise("/home");



      $stateProvider


            .state('home', { 
              url: '/home',
              templateUrl: 'views/home.html',
              controller:'adminController'
            })


})



.run(function($rootScope,loginServiceDAL,$state) {
  $rootScope.$on('$stateChangeStart', function(e, to) {


});
});
