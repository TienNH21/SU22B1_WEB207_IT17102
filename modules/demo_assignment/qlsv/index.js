function qlsvController($scope, $http) {
	$scope.list = [];
	$scope.form_data = {
		ho_ten: '',
		ma_sv: '',
		chuyen_nganh: 'udpm',
		ngay_nhap_hoc: '',
		email: '',
		gioi_tinh: 1,
	};

	const url = "https://620b061fbeee430017f38481.mockapi.io/students";
	$http.get(url)
		.then(function (response) {
			console.log(response)
			$scope.list = response.data;
		})

	$scope.onBtnCreateClick = function (event) {
		console.log($scope.form_data);
	}
}
