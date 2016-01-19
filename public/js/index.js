// var _ = require('lodash');

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

window.onload = function () {
    var newWinnerButton = document.getElementById("newWinner");
    var saveButton = document.getElementById("save");

    var nameInput = document.getElementById("name");
    var surnameInput = document.getElementById("surname");
    var emailInput = document.getElementById("email");
    var phoneInput = document.getElementById("phone");

    saveButton.onclick = function () {
        var saving = {
            name: nameInput.value,
            surname: surnameInput.value,
            email: emailInput.value,
            phone: phoneInput.value
        };
        alert('save' + saving.toString() + saving.name);
    };

    var table = document.getElementById("table_results");
    var getResults = getXmlHttp();

    function updateTable(n, s, e, p) {
        var row = table.insertRow(0);

        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);

        cell1.innerHTML = n;
        cell2.innerHTML = s;
        cell3.innerHTML = e;
        cell4.innerHTML = p;
    }

    var onGetResults = function () {
        if (getResults.readyState == 4) {
            if (getResults.status == 200) {
                console.log(getResults.responseText);
                var results = getResults.responseText;
                try {
                    results = JSON.parse(results);
                }
                catch (e) {
                    alert(e); // just to debug
                }
                results.forEach(function (player) {
                    updateTable(player.name, player.surname, player.email, player.phone);
                });
            }
        }
    };

    newWinnerButton.onclick = function () {
        getResults.open('GET', '/results', true);
        getResults.onreadystatechange = onGetResults;
        console.log('newWinner');
        getResults.send(null);
    };

    getResults.open('GET', '/results', true);
    getResults.onreadystatechange = onGetResults;
    getResults.send(null);


};
