cc
//=================================================
// Home
//=================================================

.controller('homeController', ['md5','loginServiceDAL','$timeout', '$state', '$scope', '$rootScope','$location', 
	function(md5, service,timeout, state, scope, rootScope,location){


  
  scope.logOut = function(){
      var out = service.logout();
      out.success(function(data,status,header,config){
        
        rootScope.loggedIn = false;
        location.path("/public/landing");

      });
      out.error(function(data,status,header,config){

      });
    }








}])