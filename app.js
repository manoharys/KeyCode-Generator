//variable initilisation

init();
let upperUI = document.getElementById('UI');

//Adding the eventListners
let eventListners = document.addEventListener('keypress', function (event) {
    key.innerHTML = event.key;
    keyCode.innerHTML = event.keyCode;
    keyLocation.innerHTML = event.location;
    upperUI.innerHTML = event.keyCode;
});

function init() {
    let key = document.getElementById('key');
    let keyCode = document.getElementById('keyCode');
    let keyLocation = document.getElementById('keyLocation');
}