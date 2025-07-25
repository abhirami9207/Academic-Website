function username() {
    let u = document.querySelector("#un").value;
    const regu = /^[a-zA-Z\-]+$/;
    if (!regu.test(u)) {
        document.querySelector("#sun").innerHTML = "Your first name is not valid. Only characters A-Z, a-z and '-' are  acceptable.";
        document.querySelector("#sun").style.color = "red";
        document.querySelector("#un").style.borderColor = "red";

    }
    else {

        document.querySelector("#sun").innerHTML = " ";
        document.querySelector("#un").style.borderColor = "green";
    }
}

function password() {
    let x = document.querySelector("#pw").value;
    const regx = /^[a-zA-Z0-9!@#$.]{6,16}$/;
    if (!regx.test(x)) {
        document.querySelector("#spw").innerHTML = "incorrect password or incorrect username ";
        document.querySelector("#spw").style.color = "red";
        document.querySelector("#pw").style.borderColor = "red"
    } else {
        document.querySelector("#spw").innerHTML = " ";
        document.querySelector("#pw").style.borderColor = "green";
    }
}
function signin() {
    let u = document.querySelector("#un").value;
    const regu = /^[a-zA-Z\-]+$/;
    let x = document.querySelector("#pw").value;
    const regx = /^[a-zA-Z0-9!@#$.]{6,16}$/;

    if (regu.test(u) && regx.test(x)) {
        alert("Welcome..!!")
    }
}