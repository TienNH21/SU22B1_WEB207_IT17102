// API Quiz: https://620b061fbeee430017f38481.mockapi.io/quizzes
/*
 * Hướng dẫn xử lý chức năng đăng nhập:
 * B1: Gọi api lấy danh sách toàn bộ các sinh viên
 * B2: dùng for duyệt qua danh sách, so sánh email & password.
    Nếu email & password khớp -> đăng nhập thành công
    Nếu email & password ko khớp với bất kỳ bản ghi nào trong danh sách
        -> báo lỗi email/password
 * Với câu điểm 9-10, mọi người lên mockapi tạo api riêng của mình để xử lý nhé
 * https://mockapi.io/
 */
function qlsvController($scope, $http) {
    $scope.viTriCapNhat = -1;
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
            // console.log(response)
            $scope.list = response.data;
        })

    $scope.onBtnCreateClick = function (event) {
        // console.log($scope.form_data);
        // TODO: Validate form

        const api = 'https://620b061fbeee430017f38481.mockapi.io/students';
        $http.post(api, $scope.form_data)
            .then(function (response) {
                if (response.status == 201) {
                    // Thêm mới thành công
                    $scope.list.push(response.data); // Thêm vào table
                    alert("Thêm mới thành công"); // Thông báo
                }
            })
    }

    $scope.onBtnDeleteClick = function (event, viTri) {
        const sv = $scope.list[viTri];
        const api = 'https://620b061fbeee430017f38481.mockapi.io/students/' + sv.id;

        $http.delete(api)
            .then(function (response) {
                // Xóa tại vị trí chỉ định, xóa 1 phần tử
                $scope.list.splice(viTri, 1);
                alert("Xóa thành công");
            })
    };

    $scope.onBtnCapNhatClick = function (event, viTri) {
        // Bug: gioi_tinh & ngay_nhap_hoc
        const sv = $scope.list[viTri];
        $scope.form_data.ho_ten = sv.ho_ten;
        $scope.form_data.ma_sv = sv.ma_sv;
        $scope.form_data.chuyen_nganh = sv.chuyen_nganh;
        $scope.form_data.ngay_nhap_hoc = sv.ngay_nhap_hoc;
        $scope.form_data.email = sv.email;
        $scope.form_data.gioi_tinh = sv.gioi_tinh;

        $scope.viTriCapNhat = viTri;
    }

    $scope.onBtnUpdateClick = function (event) {
        if ($scope.viTriCapNhat == -1) {
            // Thông báo lỗi
        }

        const sv = $scope.list[$scope.viTriCapNhat];
        const api = 'https://620b061fbeee430017f38481.mockapi.io/students/' + sv.id;
        $http.put(api, $scope.form_data)
            .then(function (response) {
                console.log(response);
                $scope.list[$scope.viTriCapNhat] = response.data;
            })
    }
}
