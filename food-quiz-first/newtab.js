var xhr = new XMLHttpRequest();
xhr.open("GET", "https://floating-cove-50492.herokuapp.com/api/questions", false);
xhr.send();

var result = JSON.parse(xhr.responseText);
result = result.data[0];
console.log(result);
console.log(result.question)

document.getElementById("question").innerHTML = result.question;
document.getElementById("A").innerHTML = result.a;
document.getElementById("B").innerHTML = result.b;
document.getElementById("C").innerHTML = result.c;
document.getElementById("D").innerHTML = result.d;
document.getElementById("wrong").innerHTML = "Incorrect.  The right answer is: " + result.answer;

function checkA() {
    console.log('you clicked: A');
}

function checkB() {
    console.log('you clicked: B');
}

function checkC() {
    console.log('you clicked: C');
}

function checkD() {
    console.log('you clicked: D');
}

function submit() {
    console.log('you clicked: submit');
}

document.getElementById("A").addEventListener("click", checkA);
document.getElementById("B").addEventListener("click", checkB);
document.getElementById("C").addEventListener("click", checkC);
document.getElementById("D").addEventListener("click", checkD);
document.getElementById("submit").addEventListener("click", submit);


document.getElementById("D").innerHTML = result.d;

function checkA() {
    console.log('you clicked: A');
}

function checkB() {
    console.log('you clicked: B');
}

function checkC() {
    console.log('you clicked: C');
}

function checkD() {
    console.log('you clicked: D');
}

function submit() {
    console.log('you clicked: submit');
}

document.getElementById("btnA").addEventListener("click", checkA);
document.getElementById("btnB").addEventListener("click", checkB);
document.getElementById("btnC").addEventListener("click", checkC);
document.getElementById("btnD").addEventListener("click", checkD);
document.getElementById("submit").addEventListener("click", submit);


