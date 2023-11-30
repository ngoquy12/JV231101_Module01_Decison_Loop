// Vòng lặp for
// Cú pháp: for (initialzation; condition; increase/decrease){
//   // Khối lệnh
// }

// In ra màn hình console.log các số từ 1 đến 100
// Điểm bắt đầu: 1 , Điểm kết thúc: 100
for (let i = 1; i <= 100; i++) {
  // Khối lệnh
  // console.log("Giá trị: ", i);
}

// Trong lần đầu tiên khi vòng lặp chạy, nó sẽ lấy giá trị khởi tại để nó so sánh
// với điều kiện (1 <= 100). Nếu như điều kiện trả về là true(tức là thỏa mãn)
// thì nó sẽ chạy vào trong khối lệnh để thực thi
// Sau khi thực thi khối lệnh xong thì nó sẽ quay lại for để tăng giá trị lên
// 1 đơn vị (i = 2), sau đó nó sẽ đem giá trị vừa lên đi so sánh với điều kiện
// (2 <= 100 => true). Nếu như true thì lại chạy vào trong khối lệnh để thực thi, nếu
// false thì sẽ thoát ra khỏi vòng lặp
// Lưu ý: i = 1 chỉ được chạy duy nhất trong lần đầu tiên vòng lặp được chạy

// Viết chương trình in ra số từ 1 đến n (n lấy từ bàn phím)
// Viết chương trình tính tổng các số từ 1 đến n (Dùng for và khai báo một biến để lưu trữ dữ liệu mỗi lần lặp)

let n = 10;
// Biến lưu trữ
let total = 0;

for (let i = 1; i <= n; i++) {
  // Cứ mỗi lần lặp thì sẽ tiến hành lưu trữ dữ liệu vào trong bến total
  total = total + i;
  // Lần 1: total = 0 + 1 => total = 1
  // Lần 2: total = 1 + 2 => total = 3
  // Lần 3: total = 3 + 3 => total = 6
}

// Kết luận: Vòng lặp for được sử dụng trong trường hợp chúng ta biết trước được số lần lặp

// Vòng lặp while
// while (condition) {
//  Logic code
// }

let i = 0;
while (i < 8) {
  console.log(i);
  i++;
}

// Kết luận: Vòng lặp while được sử dụng trong trường hợp chúng ta không biêts trước được số lần lặp

// Vòng lặp do-while
// do {
//    Logic code
// } while(condition)

let y = 0;

do {
  y++;
  console.log(y);
} while (y > 10);

// Vòng lặp do-while được sử dụng trong trường hợp muốn chạy logic code trước khi kiểm tra điều kiện

// Áp dụng kiến thức đã học về cấu trúc điều khiển, vòng lặp do-while hãy viết chương trình:
// Lấy lựa chọn nhập từ phía người dùng
// Nếu là 1 thì in ra dòng console.log là Nhập sản phẩm
// Nếu là 2 thì in ra dòng console.log là Đặt sản phẩm
// Nếu là 3 thì in ra dòng console.log là Thanh toán
// Nếu là 4 thì thoát khỏi chương trình
// Nếu là các trường hợp còn lại thì sẽ in ra console.log là Mời nhập lại lựa chọn

let choose;

do {
  choose = +prompt("Mời bạn nhập lựa chọn: ");

  switch (choose) {
    case 1:
      console.log("Nhập sản phẩm");
      break;
    case 2:
      console.log("Đặt sản phẩm");
      break;
    case 3:
      console.log("Thanh toán");
      break;
    case 4:
      console.log("Dừng chương trình");
      break;
    default:
      console.log("Mời bạn nhập lại lựa chọn");
      break;
  }
} while (choose != 4); // Vòng lặp này sẽ dừng khi choose = 4
