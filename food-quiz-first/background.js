chrome.runtime.onInstalled.addListener(function() {
    // add an action here
    chrome.tabs.onCreated.addListener(function (tab){
        // console.log('new tab created!');
        // var xhr = new XMLHttpRequest();
        // xhr.open("GET", "https://floating-cove-50492.herokuapp.com/api/questions", false);
        // xhr.send();

        // var result = JSON.parse(xhr.responseText);
        // result = result.data[0];
        // console.log(result);
        // console.log(result.question)
    });
    
    // chrome.runtime.sendMessage({}, function(response) { document.body.style.backgroundcolor="red"; });
});