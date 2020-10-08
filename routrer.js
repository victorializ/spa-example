let currentPage;

function route(pageName) {
    currentPage && document.getElementById(currentPage).setAttribute("style", "display: none");
    pageName && document.getElementById(pageName).setAttribute("style", "display: visible");
    currentPage = pageName;
}

function onLoad() {
    route('home');
}

window.onload = onLoad();