function fname() {
    let f = document.querySelector("#fn").value;
    const regf = /^[A-Z a-z]+$/

    if (!regf.test(f)) {
        document.querySelector("#sfn").innerHTML = "Only alphabets allowed...!";
        document.querySelector("#sfn").style.color = "red";
        document.querySelector("#fn").style.borderColor = "red";
    } else {
        document.querySelector("#sfn").innerHTML = " ";
        document.querySelector("#fn").style.borderColor = "green";
    }
}
function phone() {
    let p = document.querySelector("#ph").value;
    const regp = /^[0-9]+$/;
    if (!regp.test(p)) {
        document.querySelector("#sph").innerHTML = "Only numbers allowed...!";
        document.querySelector("#sph").style.color = "red";
        document.querySelector("#ph").style.borderColor = "red";

    } else {
        document.querySelector("#sph").innerHTML = " ";
        document.querySelector("#ph").style.borderColor = "green";
    }
}
function email() {
    let m = document.querySelector("#em").value;
    const regm = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
    if (!regm.test(m)) {
        document.querySelector("#sem").innerHTML = "invalid email or incorrect format..!"
        document.querySelector("#sem").style.color = "red";
        document.querySelector("#em").style.borderColor = "red";
    }
    else {

        document.querySelector("#sem").innerHTML = " ";
        document.querySelector("#em").style.borderColor = "green";
    }
}
function age() {
    let a = document.querySelector("#ag").value;
    const rega = /^[0-9]+$/;
    if (!rega.test(a)) {
        document.querySelector("#sag").innerHTML = "Enter using digits..!"
        document.querySelector("#sag").style.color = "red";
        document.querySelector("#ag").style.borderColor = "red";
    } else {
        document.querySelector("#sag").innerHTML = " ";
        document.querySelector("#ag").style.borderColor = "green";
    }
}
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
    if (!regx.test(p)) {
        document.querySelector("#spw").innerHTML = "must contain alphabet,should contain symbols,should contain number,min six characters ";
        document.querySelector("#spw").style.color = "red";
        document.querySelector("#pw").style.borderColor = "red"
    } else {
        document.querySelector("#spw").innerHTML = " ";
        document.querySelector("#pw").style.borderColor = "green";
    }
}
function con_passwd() {
    let x = document.querySelector("#pw").value;
    let cp = document.querySelector("#cp").value;
    if (y != cp) {
        document.querySelector("#scp").innerHTML = "password not matching ";
        document.querySelector("#scp").style.color = "red";
        document.querySelector("#cp").style.borderColor = "red"
    } else {
        document.querySelector("#scp").innerHTML = " ";
        document.querySelector("#cp").style.borderColor = "green";
    }
}
function done() {
    let f = document.querySelector("#fn").value;
    const regf = /^[A-Z a-z]+$/;
    let p = document.querySelector("#ph").value;
    const regp = /^[0-9]+$/;
    let m = document.querySelector("#em").value;
    const regm = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
    let a = document.querySelector("#ag").value;
    const rega = /^[0-9]+$/;
    let u = document.querySelector("#un").value;
    const regu = /^[a-zA-Z\-]+$/;
    let x = document.querySelector("#pw").value;
    const regx = /^[a-zA-Z0-9!@#$.]{6,16}$/;
    let cp = document.querySelector("#cp").value;



    if (regf.test(f) && regp.test(p) && p.length == 10 && regm.test(m) && regu.test(u) && regx.test(x) && x == cp) {
        alert("Registered Successfullyy...")
    }
}
