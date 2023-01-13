function sign() {
    document.getElementById('sign_form').style.display = "block"
}

function sign_btn() {
    var user_inp = document.getElementById('user_inp').value;
    var email_inp = document.querySelector('.email_inp').value
    var pass = document.querySelector('.pass').value
    var cfpass = document.querySelector('.cfpass').value
    if (user_inp == '' || email_inp == '' || pass == '' || cfpass == '') {
        alert('Bạn đã điền thiếu thông tin')
    }
    else {
        if (pass == cfpass) {
            localStorage.setItem('user.name', user_inp);
            localStorage.setItem('user.pass', pass)
            alert('Đăng kí thành công')
            document.getElementById('sign_form').style.display = "none"
        } else {
            alert('Bạn đã điền sai')
        }
    }

}