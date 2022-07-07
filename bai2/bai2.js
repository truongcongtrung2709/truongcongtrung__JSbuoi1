// -----------------BAI 2----------
// ------------Mô Hình 3 Khối-----------
// Đầu Vào:
// - Nhập vào 5 số thực: a,b,c,d,e.
// - gọi biến giá trị trung bình = 0: gttb=0;
// 
// Xử Lý:
// tính trung bình của 5 số là tổng 5 số chia cho 5 : gttb= (a+b+c+d+e)/5;
// 
// 
// Đầu Ra:
// - xuất kết quả ra Console.Log()
// ---------------------------------------

var a = 5.5;
var b = 4;
var c = 8.2;
var d = 6;
var e = 9;
var gttb = 0;

console.log("nam so thuc: " + a + " " + b + " " + c + " " + d + " " +e );
gttb = (a+b+c+d+e)/5;

console.log("Trung Binh cua 5 so la: "+ Math.floor(gttb*100)/100)
