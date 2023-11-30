// Toán tử logic và toán tử so sánh

// Toán tử logic: Và và (&&), hoặc hoặc (||), not (!)
// Toán tử &&: Toán tử này yêu cầu tất cả các điều kiện phải thỏa mãn
// Ví dụ: Hồi cấp 3, để có thể đạt được danh hiệu học sinh giỏi thì điểm trung bình > 8.0 và hạnh kiểm phải tốt
// Toán tử || : Toán tử này chi yêu cầu thỏa mãn một hoặc nhiều điều kiện đúng
// Ví dụ: Để có thể thi được bằng lái xe máy thì chỉ cần đủ 18 tuổi
// Toán tử phù định (!): Toán tử này chỉ áp dụng đối với kiểu dữ liệu boolean
// Ví dụ: !true = false, !false = true

// Toán tử so sánh: >, < , ==, ===, >=, <=
// Sự khác nhau giữa toán tử: == và ===
// Toán tử "==": Nó chỉ so sánh về mặt giá trị chứ không so sánh về kiểu dữ liệu
// Toán tử "===": Nó sẽ so sánh cả giá trị và kiểu dữ liệu

// Cấu trúc điều khiển: if
// Cú pháp: if (dieu_kien) {//logic code}

// Nguyễn lý hoạt động của cấu trúc điều khiển
// Giá trị mà khối if nhận được mặc định sẽ có kiểu dữ liệu là boolean (true, false)

let email = "quy@gmail.com";
let password = "123456";

// if - else => Được sử dụng trong trường hợp chương trình có 2 điều kiện
if (email == "quy@gmail.com" && password == "123456") {
  // Được thực thi khi điều kiện đúng
  console.log("Đăng nhập thành công");
} else {
  // Được thực thi khi điều kiện sai
  console.log("Đăng nhập thất bại");
}

// if - else if - else => Được sử dụng khi chương trình có từ 3 điều kiện trả lên
// Xếp loại học lực:
// + Nếu điểm < 4.9 là học lực yếu
// + Nếu điểm > 5 và bé hơn 6.4 là học lực trung bình
// + Nếu điểm > 6.5 và bé hơn 7.9 là học lực Khá
// + Nếu điểm > 8.0 và bé hơn 8.9 là học lực Giỏi
// Trường hợp còn lại xuất sắc

let score = 8;

if (score < 4.9) {
  console.log("Học lực yếu.");
} else if (score >= 5 && score <= 6.4) {
  console.log("Học lực trung bình");
} else if (score >= 6.5 && score <= 7.9) {
  console.log("Học lực khá");
} else if (score >= 8 && score <= 8.9) {
  console.log("Học lực giỏi");
} else {
  console.log("Học sinh xuất sắc");
}

// switch-case => Được sử dụng khi mà điều kiện là một giá trị cụ thể
// switch (condision) {
//   case value:
//   case value:
//   case value:
// }

// => Khi ứng dụng được thực thi, thì điều kiện được cho vào switch sẽ được đem để kiểm tra với value
// của từng case, và phép so sánh ở đây là so sánh tuyệt đối (===)

let choose = 1;

switch (choose) {
  case 1:
    console.log("Vào khối 1");
    break;
  case 2:
    console.log("Vào khối 2");
    break;
  case 3:
    console.log("Vào khối 3");
    break;

  default:
    console.log("Thoát khỏi khối lệnh");
    break;
}

// Khai báo hai biến a = 10 và b = 20
// Nhập lựa chọn từ phia trình duyệt vào 4 giá trị: +, -, *, /

// Nếu + thì in ra kết quả của a + b
// Nếu - thì in ra kết quả của a - b
// Nếu * thì in ra kết quả của a * b
// Nếu / thì in ra kết quả của a / b
// Trường hợp còn lại thì thoát chương trình

let a = 10;
let b = 20;

let menu = prompt("Mời bạn nhập lựa chọn: ");

switch (menu) {
  case "+":
    // console.log("Tổng của hai số " + a + " và " + b + " = ", a + b);
    console.log(`Tổng của hai số ${a} và ${b} = ${a + b}`);
    break;
  case "-":
    console.log(`Hiệu của hai số ${a} và ${b} = ${a - b}`);
    break;
  case "*":
    console.log(`Tích của hai số ${a} và ${b} = ${a * b}`);
    break;
  case "/":
    console.log(`Thương của hai số ${a} và ${b} = ${a / b}`);
    break;

  default:
    console.log("Thoát khỏi chương trình!");
    break;
}
