



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

var xmlhttp = getXmlHttp();
xmlhttp.open('GET', '/results', true);
xmlhttp.onreadystatechange = function() {
  if (xmlhttp.readyState == 4) {
     if(xmlhttp.status == 200) {
       alert(xmlhttp.responseText);
         }
  }
};
xmlhttp.send(null);
