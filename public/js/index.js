// helper to send HTTP requests
function getXmlHttp() {
    var xmlhttp;
    try {
        xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
    }
    catch (e) {
        try {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        catch (E) {
            xmlhttp = false;
        }
    }
    if (!xmlhttp && typeof XMLHttpRequest != 'undefined') {
        xmlhttp = new XMLHttpRequest();
    }
    return xmlhttp;
}

window.onload = function(){
    var newWinnerButton = document.getElementById("newWinner");
    var saveButton = document.getElementById("save");
    // console.log(newWinner); //debug

    var nameInput = document.getElementById("name");
    var surnameInput = document.getElementById("surname");
    var emailInput = document.getElementById("email");
    var phoneInput = document.getElementById("phone");

    newWinnerButton.onclick = function () {
        alert('newWinner');
    };

    saveButton.onclick = function () {
        var saving = {
            name: nameInput.value
        };
        alert('save' + saving.toString() + saving.name);
    };

    var table = document.getElementById("table_results");

    var getResults = getXmlHttp();
    getResults.open('GET', '/results', true);
    getResults.onreadystatechange = function () {
        if (getResults.readyState == 4) {
            if (getResults.status == 200) {
                console.log(getResults.responseText);
            }
        }
    };
    getResults.send(null);
};
