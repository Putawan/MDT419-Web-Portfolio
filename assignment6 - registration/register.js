window.onload = pageLoad;
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const UsernameCon = urlParams.get("username");
console.log(UsernameCon);
const passwordCon = urlParams.get("password");
console.log(passwordCon);

function pageLoad() {
  var form = document.getElementById("myForm");
  form.onsubmit = checkPassword;
}

// function checkLogin() {
//     let lusername = document.getElementById("username").value
//     let lpassword = document.getElementById("password").value
//     var username = document.forms["myLogin"]["username"];
//     var password = document.forms["myLogin"]["password"];
//     if (username.value != UsernameCon || password.value != passwordCon) {
//         alert(" Incorrect Username or Password ");
//     } else {
//         alert("Correct");
//     }
// }

function checkPassword() {
  let dataFormInput = document.forms["myForm"];
  if (dataFormInput.password.value != dataFormInput.re_password.value) {
    alert("Password does not match");
    return false;
  } else if (dataFormInput.password.value == dataFormInput.re_password.value) {
    alert("completed");
    return true;
  }
}

// let lusername = document.getElementById("username").value
// let lpassword = document.getElementById("password").value
