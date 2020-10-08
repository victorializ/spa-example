const pages = new Map();
const root = document.getElementById('root');

function loadPage(pathName) {
    console.log('fetch')
    return fetch(`./components/${pathName}/index.html`)
        .then(response => response.text())
        .then(html => {
            pages.set(pathName, html);
            return html;
        });
}

function updateRoot(html) {
    root.innerHTML = html;
    return html;
}

function updateUrl(pathName) {
    window.history.pushState({}, pathName,
        `${window.location.origin}/${pathName}`
    );
}

function route(pathName) {
    updateUrl(pathName);
    updateRoot(pages.get(pathName)) 
        || loadPage(pathName).then(updateRoot);
}

function onLoad() {
    const homePathName = 'home';
    const pathName = window.location.pathname.replace('/', '') || homePathName;
    route(pathName);
}

window.onload = onLoad();