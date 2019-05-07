// Bài 1: Cho 1 mảng có độ dài lớn hơn 2, chứa các số khác nhau. Hãy viết hàm tìm ra số lớn thứ nhì trong mảng.
function bai1(x) {
  let dapan = [];
  dapan = x.sort(function(a, b) {return b - a;});
  return dapan[1];
}
bai1([2, 4, 5]);

// Bài 2: Cho 1 mảng các chuỗi bất kỳ. Hãy viết hàm tìm ra chuỗi có độ dài lớn nhất trong mảng.
function bai2(x) {
  return x.sort(function(a, b) {return b.length - a.length;})[0];
}
bai2(["abc", "abcd", "abcdef"]);

// Bài 3: Viết hàm có 2 tham số là 2 chuỗi str và target, dùng để kiểm tra chuỗi str có kết thúc bởi chuỗi target hay không. Kết quả trả về là true hoặc false.
function bai3(str, target) {
  if (str.substr(-target.length) === target) {
    return true;
  } else {
    return false;
  }
}
bai3("Quynh", "h");

// Bài 4: Cho 1 mảng bất kỳ. Hãy kiểm tra xem trong mảng đó có phần tử nào bị lặp lại hay không. Kết quả trả về true hoặc false.
function bai4(x){
	for(var i = 0; i < x.length - 1; i = i + 1){
		for(var j = i + 1; j < x.length; j = j + 1){
			if(x[i] == x[j]) return true;
		}
	}
	return false;
}
bai4([2, 4, 7, 8, 2, 5]);

// Bài 5: Viết hàm truyền vào 1 chuỗi là tên thẻ HTML, kiểm tra xem trong file HTML có bao nhiêu thẻ đó. Kết quả trả về là số lượng thẻ (không bao gồm thẻ đóng), nếu không có trả về 0.
function countElementWithTagName(tagName) {
  return document.getElementsByTagName(tagName).length;
}
