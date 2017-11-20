// Name and Password from the register-form
var uname = document.getElementById('uname');
var pw = document.getElementById('psw');

// storing input from register-form
function store() {
    localStorage.setItem('uname', uname.value);
    localStorage.setItem('',);
    localStorage.setItem('',);
    localStorage.setItem('psw', pw.value);
    
}

// check if stored data from register-form is equal to entered data in the   login-form
function check() {

    // stored data from the register-form
    var storedName = localStorage.getItem('uname');
    var storedPw = localStorage.getItem('psw');

    // entered data from the login-form
    var userName = document.getElementById('userName');
    var userPw = document.getElementById('userPsw');

    if(userName.value == storedName && userPw.value == storedPw) {
        alert('You are loged in.');
    }else {
        alert('ERROR.');
    }
}