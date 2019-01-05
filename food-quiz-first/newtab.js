var xhr = new XMLHttpRequest();
xhr.open("GET", "https://floating-cove-50492.herokuapp.com/api/questions", false);
xhr.send();

var result = JSON.parse(xhr.responseText);
result = result.data[0];

document.getElementById("question").innerHTML = result.question;
document.getElementById("A").innerHTML = result.a;
document.getElementById("B").innerHTML = result.b;
document.getElementById("C").innerHTML = result.c;
document.getElementById("D").innerHTML = result.d;
document.getElementById("wrong").innerHTML = "Incorrect.  The right answer is: " + result.answer;
document.getElementById("A").addEventListener("click", checkA);
document.getElementById("B").addEventListener("click", checkB);
document.getElementById("C").addEventListener("click", checkC);
document.getElementById("D").addEventListener("click", checkD);
document.getElementById("btnA").addEventListener("click", checkA);
document.getElementById("btnB").addEventListener("click", checkB);
document.getElementById("btnC").addEventListener("click", checkC);
document.getElementById("btnD").addEventListener("click", checkD);

function checkA() {
    if(result.answer == "A"){
        document.getElementById("wrong").setAttribute("class", "hidden");
        document.getElementById("correct").removeAttribute("class");
    } else {
        document.getElementById("correct").setAttribute("class","hidden");
        document.getElementById("wrong").removeAttribute("class")
    }
}

function checkB() {
    if(result.answer == "B"){
        document.getElementById("wrong").setAttribute("class", "hidden");
        document.getElementById("correct").removeAttribute("class");
    } else {
        document.getElementById("correct").setAttribute("class", "hidden");
        document.getElementById("wrong").removeAttribute("class")
    }
}

function checkC() {
    if(result.answer == "C"){
        document.getElementById("wrong").setAttribute("class", "hidden");
        document.getElementById("correct").removeAttribute('hidden');
    } else {
        document.getElementById("correct").setAttribute("class", "hidden");
        document.getElementById("wrong").removeAttribute("class")
    }
}

function checkD() {
    if(result.answer == "D"){
        document.getElementById("wrong").setAttribute("class", "hidden");
        document.getElementById("correct").removeAttribute("class");
    } else {
        document.getElementById("correct").setAttribute("class", "hidden");
        document.getElementById("wrong").removeAttribute("class")
    }
}