wc.service('loginServiceDAL', ['$http', '$cookies', '$cookieStore','$rootScope', function (http, cookie, cookieStore,rootScope) {

        this.headers = {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'Access-Control-Allow-Origin': '*'
        };
        this.base = '../../base';
        rootScope.serverBase='../../base';



        this.transform = function (data) {
            return $.param(data);
        };



        this.save = function (details) {
            return http({
                method: 'put',
                data: details,
                url: ''


            });
        }; 



        this.loginNew = function (varusername, varpassword) {
            return http({
                method: 'post',
                headers: this.headers,
                //headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                transformRequest: function (obj) {
                    var str = [];
                    for (var p in obj)
                        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                    return str.join("&");
                },
                data: {
                    'username': varusername,
                    'password': varpassword
                },
                url: this.base + '/login/login'



            });

        };



 

    }])