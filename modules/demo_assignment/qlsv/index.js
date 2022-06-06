function qlsvController($scope) {
	$scope.list = [];
	$scope.form_data = {
		ho_ten: '',
		ma_sv: '',
		chuyen_nganh: 'udpm',
		ngay_nhap_hoc: '',
		gioi_tinh: 1,
	};

	$scope.onBtnCreateClick = function (event) {
		console.log($scope.form_data);
	}
}
