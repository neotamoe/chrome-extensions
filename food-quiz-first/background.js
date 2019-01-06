window.getQuestion = function() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://floating-cove-50492.herokuapp.com/api/questions", false);
    xhr.send();
    
    var result = JSON.parse(xhr.responseText);
    result = result.data[0];
    return result;
};