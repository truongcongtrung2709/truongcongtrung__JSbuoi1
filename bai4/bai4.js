// -----------------BAI 3----------
// ------------Mô Hình 3 Khối-----------
// Đầu Vào:
// - nhập chiều dài và chiều rộng của hình chữ nhật
// + chieuDai
// + chieuRong
// Xử Lý:
//  - Gọi biến Chu vi và Diện Tích: chuVi, dienTich
//  - Tính chu vi và diện tích của HCN:
//  + chuVi = (chieuDai + chieuRong)*2
//  + dienTich = chieuDai * chieuRong
// Đầu Ra:
//  - In ra kết quả chu vi và diện tích hình chữ nhật bằng Console.Log
// ---------------------------------------

var chieuDai = 8;
var chieuRong = 6;
var chuVi;
var dienTich;

console.log("Chieu dai cua HCN: " + chieuDai);
console.log("Chieu rong cua HCN: " + chieuRong);

chuVi = (chieuDai + chieuRong)*2;
dienTich = chieuDai * chieuRong;

console.log("Chu vi Hinh chu nhat = " + chuVi);
console.log("Dien tich Hinh chu nhat = " + dienTich);

