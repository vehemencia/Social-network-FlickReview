// Este es el punto de entrada de tu aplicacion

import { myFunction,exampleForHome, exampleForProfile } from './lib/index.js';

myFunction();

const routes = {
    "/home" : exampleForHome,
    "/profile" : exampleForProfile
}

const rootInDom = document.querySelector("#root");
rootInDom.innerHTML = routes[window.location.pathname]

function changePages(pathnameParameter) {
    window.history.pushState(
        {},
        pathnameParameter,
        window.location.origin + pathnameParameter
    )
rootInDom.innerHTML = routes[pathnameParameter]
}

document.querySelector("#profileselection").addEventListener("click", changePages("/profile"));
document.querySelector("#homeselection").addEventListener("click", function testForBtnValidation(){
    console.log("Testing");
});