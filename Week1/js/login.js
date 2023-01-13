function check() {
    var user = document.getElementById('user').value
    var password = document.getElementById('pass').value
    console.log(user, password);
    var user_inp = document.getElementById('user_inp').value;
    var pass = document.querySelector('.pass').value
    console.log(localStorage.getItem(user_inp));
    if (user == localStorage.getItem('user.name') && password == localStorage.getItem('user.pass')) {
        alert('Đăng nhập thành công')
        window.location.href ="card.html"
    } else {
        alert('Sai tài khoản hoặc mật khẩu')
    }
}

//xoa tai khoan
function clean() {
    alert('Bạn đã xóa toàn bộ mật khẩu');
    localStorage.clear();
}