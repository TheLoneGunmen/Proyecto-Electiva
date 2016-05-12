$("#header").load('component/header.html');
$("#footer").load("component/footer.html");
//$("#contenedor").load("module/home.html");

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

var pag = getParameterByName('pag');
$("#contenedor").load("module/"+pag+".html");
