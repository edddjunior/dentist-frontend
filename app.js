// MENU ROUTER
window.onhashchange = function () {
    renderPageView();
}

function renderPageView() {
    srcDir = "./pages";
    path = window.location.hash.substr(1).replace(/\//ig, '/');
    if (path == "home") {
        fileDataSource = 'data="' + srcDir + '/' + path + '.html"';
    } else {
        fileDataSource = 'data="' + srcDir + '/' + path + '/index.html"';
    }
    document.querySelector('#pageContainer').innerHTML =
        '<object type="text/html" ' + fileDataSource + ' style="width:100%;height:90vh" ' + '></object>';
}



// CONSTANTS
// ## Menu
var menuLinks = [
    { path: "home", label: "Home" },
    { path: "patients", label: "Pacientes" },
    { path: "doctors", label: "Doutores" },
];

// ## Footer
var footerCopyright = "&copy;" + new Date().getFullYear() + " - Grupo masssa. Todos os direitos reservados";
var footerMessage = "É o bonde da juju é o bonde da juju porque água de bandido é whisky e redbull";



// LOADERS
function loadDynamicData() {
    loadMenuLinks();
    loadFooterData();
}

function loadMenuLinks() {
    var links = '';
    for (var i = 0; i < menuLinks.length; i++) {
        links += '<a class="menu-item" href="#' + menuLinks[i].path + '">' + menuLinks[i].label + '</a>';
    }
    m = document.querySelector("#menuContainer").innerHTML = links;
}

function loadFooterData() {
    document.querySelector("#footerCopyright").innerHTML = footerCopyright;
    document.querySelector("#footerMessage").innerHTML = footerMessage;
}