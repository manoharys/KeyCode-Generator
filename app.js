//variable initilisation

init();
let upperUI = document.getElementById('UI');

//IFFI to display the info text
(function () {
    document.getElementById('text').style.display = 'block';
})();

//setting the info text to hidden when users presses a key
document.addEventListener('keypress', function (event) {
    event.preventDefault();
    document.getElementById('text').style.display = 'none';
});

//calling an eventListener as soon as info text disappers

eventListeners();


function eventListeners() {
    let eventListners = document.addEventListener('keypress', function (event) {
        event.preventDefault();
        key.innerHTML = event.key;
        keyCode.innerHTML = event.keyCode;
        keyLocation.innerHTML = event.location;
        upperUI.innerHTML = event.keyCode;
    });
}

//Initialising function
function init() {
    let key = document.getElementById('key');
    let keyCode = document.getElementById('keyCode');
    let keyLocation = document.getElementById('keyLocation');
}
