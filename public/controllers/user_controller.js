
app.factory( 'users',[function() {
  var data = [];
  var users=[
	{"name":"KRispan Chathuranga","username":"krispan","email":"krispan092181@gmail.com"},
	{"name":"KRispan Chathuranga","username":"krispan","email":"krispan092181@gmail.com"},
	{"name":"KRispan Chathuranga","username":"krispan","email":"krispan092181@gmail.com"},
	{"name":"KRispan Chathuranga","username":"krispan","email":"krispan092181@gmail.com"},
	{"name":"KRispan Chathuranga","username":"krispan","email":"krispan092181@gmail.com"},
	{"name":"KRispan Chathuranga","username":"krispan","email":"krispan092181@gmail.com"},
	{"name":"KRispan Chathuranga","username":"krispan","email":"krispan092181@gmail.com"},
	{"name":"KRispan Chathuranga","username":"krispan","email":"krispan092181@gmail.com"},
	{"name":"KRispan Chathuranga","username":"krispan","email":"krispan092181@gmail.com"},
	{"name":"KRispan Chathuranga","username":"krispan","email":"krispan092181@gmail.com"},
	{"name":"KRispan Chathuranga","username":"krispan","email":"krispan092181@gmail.com"},
	{"name":"KRispan Chathuranga","username":"krispan","email":"krispan092181@gmail.com"},
	{"name":"KRispan Chathuranga","username":"krispan","email":"krispan092181@gmail.com"}
	];
  // push some dummy data

  return {
    get: function(offset, limit) {
      return users.slice( offset, offset+limit );
    },
    count: function() {
      return users.length;
    }
  };
}]);

app.factory('dataFactory',['$http',function($http) {

    var urlBase = 'http://localhost:8000/api/users';
    


    return {
    getCustomers: function(offset, limit) {
      return $http.get(urlBase);
    }
  };
    

}]);


app.controller('UserController',['$scope','users','dataFactory',function ($scope,users,dataFactory){


getCustomers();
function getCustomers() {
        dataFactory.getCustomers()
            .success(function (custs) {
                $scope.customers = custs;
            })
            .error(function (error) {
                $scope.status = 'Unable to load customer data: ' + error.message;
            });
    }




$scope.numPerPage = 5;
  $scope.noOfPages = Math.ceil(users.count() / $scope.numPerPage);
  $scope.currentPage = 1;

  $scope.setPage = function () {
    $scope.users = users.get( ($scope.currentPage - 1) * $scope.numPerPage, $scope.numPerPage );
  };
  
  $scope.$watch( 'currentPage', $scope.setPage );




	$scope.selected=[];


	$scope.departments=['dept1','dept2','dept3','dept4','dept5'];
	/*$scope.users=[
	{"name":"KRispan Chathuranga","username":"krispan","email":"krispan092181@gmail.com"},
	{"name":"KRispan Chathuranga","username":"krispan","email":"krispan092181@gmail.com"},
	{"name":"KRispan Chathuranga","username":"krispan","email":"krispan092181@gmail.com"},
	{"name":"KRispan Chathuranga","username":"krispan","email":"krispan092181@gmail.com"},
	{"name":"KRispan Chathuranga","username":"krispan","email":"krispan092181@gmail.com"}
	];*/


	$('#userModal').on('show.bs.modal', function (event) {
		console.log("test");
	});

	$scope.editUser=function(){
		$scope.selected=this.user;
		console.log($scope.selected);
		$('#userModal').modal("show");



	}

	$scope.reset=function(){
		$scope.selected=[];
	}

}]);

