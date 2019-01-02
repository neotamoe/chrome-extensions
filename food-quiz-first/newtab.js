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


// TODO: need to make an api for xmlhttprequest or http request

// var xhr = new XMLHttpRequest();
// xhr.open("GET", "http://sci123.herokuapp.com/#/quiz/extension", false);
// xhr.send();

// var result = xhr;
// console.log(result);
// alert('Received!', result);
    
// ...OR...

// $.get( "http://sci123.herokuapp.com/#/quiz/extension")
//   .done(function( data ) {
//       console.log(data);
//     alert('Received!');
// });