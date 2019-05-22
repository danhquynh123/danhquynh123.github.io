let day = '<option>Ngày</option>';
		let month = '<option>Tháng</option>';
		let year = '<option>Năm</option>';

		for (let i = 1; i <= 31; i++) {
			day += `<option>${i}</option>`;
		}
		for (let i = 1; i <= 12; i++) {
			month += `<option>Tháng ${i}</option>`;
		}
		for (let i = 2019; i >= 1905; i--) {
			year += `<option>Năm ${i}</option>`;
		}

		document.getElementById('day').innerHTML = day;
		document.getElementById('month').innerHTML = month;
		document.getElementById('year').innerHTML = year;

$('#register').on('submit', function () {
    let isValid = true;
    if ($('#lastname').val().match(/^([ \u00c0-\u01ffa-zA-Z'])+$/) == null || $('#lastname').val().length <= 2) {
        $('#lastname').next('span').text("Tên để trống hoặc sai định dạng");
        isValid = false;
    } else {
        $('#lastname').next('span').text("");
    }
    if ($('#firstname').val().match(/^([ \u00c0-\u01ffa-zA-Z'])+$/) == null || $('#firstname').val().length <= 2) {
        $('#firstname').next('span').text("Tên để trống hoặc sai định dạng");
        isValid = false;
    } else {
        $('#firstname').next('span').text("");
    }
    if ($('#email').val().match(/^((([!#$%&'*+\-/=?^_`{|}~\w])|([!#$%&'*+\-/=?^_`{|}~\w][!#$%&'*+\-/=?^_`{|}~\.\w]{0,}[!#$%&'*+\-/=?^_`{|}~\w]))[@]\w+([-.]\w+)*\.\w+([-.]\w+)*)$/) == null) {
        $('#email').next('span').text("Email để trống hoặc sai định dạng");
        isValid = false;
    } else {
        $('#email').next('span').text("");
    }
    if ($('#password').val().match(/^(?=.*\d).{4,8}$/) == null) {
        $('#password').next('span').text("Mật khẩu từ 4-8 kí tự và phải có kí tự số");
        isValid = false;
    } else {
        $('#password').next('span').text("");
    }
    if (
        $('#phone').val().match(/[0-9]{10,10}/g) == null || $('#phone').val()[0] !== "0") {
        $('#phone').next('span').text("Sđt phải có 10 số và bắt đầu từ số 0");
        isValid = false;
    } else {
        $('#phone').next('span').text("");
    }
    if ($('#address').val().trim() == "") {
        $('#address').next('span').text("Địa chỉ để trống hoặc sai định dạng");
        isValid = false;
    } else {
        $('#address').next('span').text("");
    }
    
    return isValid;
})