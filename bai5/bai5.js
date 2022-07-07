// -----------------BAI 3----------
// ------------Mô Hình 3 Khối-----------
// Đầu Vào:
// - Nhập vào 1 số có 2 chữ số: so
// Xử Lý:
//  - lấy số hàng chục : so_hang_chuc = so /10
//  - Lấy số hàng đơn vị: so_hang_dv = so %10
//  - Gọi biến và Tính Tổng của 2 ký số:
//  tong = so_hang_chuc + so_hang_dv
// Đầu Ra:
//  - In ra kết quả tổng của 2 ký số  bằng Console.Log
// ---------------------------------------

var so=27;
console.log("số có 2 chữ số: " + so);

var so_hang_chuc = Math.floor(so /10) ;
console.log("số hàng chục: " + so_hang_chuc);

var so_hang_dv = so % 10;
console.log("Số Đơn vị: " + so_hang_dv);

var tong = so_hang_chuc + so_hang_dv;
console.log("Tổng 2 ký số: " + tong);
