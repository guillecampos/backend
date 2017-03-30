/*==========================================================
    Author      : Ranjithprabhu K
    Date Created: 27 Dec 2015
    Description : This service is to communicate with server for CRUD Operaions
    
    Change Log
    s.no      date    author     description     
 ===========================================================*/

app.service('apiService', ['$http', '$q', 'appSettings', function ($http, $q, appSettings) {

    var apiService = {};
    var apiBase = appSettings.apiBase;

    //===========================GET RESOURCE==============================
    var get = function (module, parameter) {
        var deferred = $q.defer();
        var retorno;




    $http({
      method: 'GET',
      url: 'http://www.feriadelemprededor.com/api/UserAdmin/getUser?mail=jguillecampos@gmail.com&pass=jguillecampos@gmail.com'
    }).then(function successCallback(response) {
        // this callback will be called asynchronously
               console.log(response.statusText);

             deferred.resolve(response.statusText);

  
      }, function errorCallback(response) {
               console.log("hitting Service=============")

             deferred.reject(response.statusText);

        // or server returns response with an error status.
      });

/*
 $http.jsonp("http://www.feriadelemprededor.com/api/UserAdmin/getUser?mail=jguillecampos@gmail.com&pass=jguillecampos@gmail.com&callback=JSON_CALLBACK")
            .success(function (data) {
                
                console.log(data)
            });
         //$sce.trustAsResourceUrl('http://54.164.63.158/api/UserAdmin/getUser?mail=jguillecampos@gmail.com&pass=jguillecampos@gmail.com');
         $http.jsonp('http://www.feriadelemprededor.com/api/UserAdmin/getUser?mail=jguillecampos@gmail.com&pass=jguillecampos@gmail.com', {jsonpCallbackParam: '({"prop":value, "prop2":"value2"})'}).success(function (data) {
                retorno = data;
            });


        $http.jsonp(apiBase + module + '?' + parameter, { headers: { 'Content-Type': 'application/json' } }).success(function (response) {

              /// dataType: 'jsonp',


            deferred.resolve(response);
        }).catch(function (data, status, headers, config) { // <--- catch instead error
            deferred.reject(data.statusText);
        });

*/
        return deferred.promise;
    };

    //===========================CREATE RESOURCE==============================
    var create = function (module, parameter) {
        console.log("hitting Service=============");

        var deferred = $q.defer();

        $http.post(apiBase + module, parameter, { headers: { 'Content-Type': 'application/json' } }).success(function (response) {

            deferred.resolve(response);

        }).catch(function (data, status, headers, config) { // <--- catch instead error
            deferred.reject(data.statusText);
        });

        return deferred.promise;
    };



    //===========================UPDATE RESOURCE==============================
    var update = function (module, parameter) {
        console.log("hitting Service=============");

        var deferred = $q.defer();

        $http.post(apiBase + module + '/' + parameter.id, parameter, { headers: { 'Content-Type': 'application/json' } }).success(function (response) {

            deferred.resolve(response);

        }).catch(function (data, status, headers, config) { // <--- catch instead error
            deferred.reject(data.statusText);
        });

        return deferred.promise;
    };


    //===========================DELETE RESOURCE==============================
    var delet = function (module, parameter) {
        console.log("hitting Service=============");

        var deferred = $q.defer();

        $http.post(apiBase + module + '/' + parameter.id, parameter, { headers: { 'Content-Type': 'application/json' } }).success(function (response) {

            deferred.resolve(response);

        }).catch(function (data, status, headers, config) { // <--- catch instead error
            deferred.reject(data.statusText);
        });

        return deferred.promise;
    };




    apiService.get = get;

    apiService.create = create;
    apiService.update = update;
    apiService.delet = delet;

    return apiService;

}]);
