// CREATED BY HYPERZ, JORDAN, FAXES, AND JEKELTOR (PHP)
// CREATED BY HYPERZ, JORDAN, FAXES, AND JEKELTOR (PHP)
// CREATED BY HYPERZ, JORDAN, FAXES, AND JEKELTOR (PHP)

const fetch = require('node-fetch');

function copyText(e) {
    var textToCopy = document.querySelector(e);
    var textBox = document.querySelector(".clipboard");
    var changetext = document.getElementById("change");

    textBox.setAttribute('value', textToCopy.innerHTML);

    textBox.select();
    document.execCommand('copy');
    changetext.innerHTML = "IP copied";
    setTimeout(function() {
        changetext.innerHTML = "Click to copy IP";
    }, 3000);
}

function dropDown() {
    var dropdown = document.getElementById("dropdown");
    var dropdownbtn = document.getElementById("dropdownbtn");
    var navbar = document.getElementById("navbar");
    var navbarleft = document.getElementById("navbarleft");

    dropdown.classList.toggle("dropdownshow");
    navbar.classList.toggle("navbarhidden");
    navbarleft.classList.toggle("navbarlefthidden");

    if (dropdown.classList.contains("dropdownshow")) {
        dropdownbtn.innerHTML = "<i class='fas fa-times'></i>";
    } else {
        dropdownbtn.innerHTML = "<i class='fas fa-bars'></i>";
    }
}

// function checkStatus(ip, port, manual) {
//     const promiseCheck = new Promise((resolve, rejectlikehyperz) => {
//         if (manual === "0") {
//             fetch(`http://${ip}:${port}`, {}).then(response => {
//                 if (response.ok) {
//                     console.log('sussy baka')
//                     resolve('<div class="right indicator online">Operational <i class="fas fa-battery-full"></i></div>');
//                 } else {
//                     console.log(`FUCK MEN`)
//                     resolve('<div class="right indicator offline">Offline <i class="fas fa-battery-empty"></i></div>');
//                 }
//             }).catch(e => {
//                 if (e) {
//                     resolve('<div class="right indicator offline">Offline <i class="fas fa-battery-empty"></i></div>');
//                 }
//             });
//         } else if (manual === "1" || "2" || "3") {
//             if (manual === "1") {
//                 resolve('<div class="right indicator online">Operational <i class="fas fa-battery-full"></i></div>');
//             } else if (manual === "2") {
//                 resolve('<div class="right indicator issues">Issues <i class="fas fa-battery-half"></i></div>');
//             } else if (manual === "3") {
//                 resolve('<div class="right indicator offline">Offline <i class="fas fa-battery-empty"></i></div>');
//             }
//         } else {
//             resolve(console.log('You fucking retard read the docs and actually set the status for the servers correctly this time'));
//         }
//     });
//     promiseCheck.then((msg) => {
//         console.log(`[] ${msg}`)
//         return msg;
//     });
// }


module.exports = {
    copyText: copyText,
    dropDown: dropDown
}

// CREATED BY HYPERZ, JORDAN, FAXES, AND JEKELTOR (PHP)
// CREATED BY HYPERZ, JORDAN, FAXES, AND JEKELTOR (PHP)
// CREATED BY HYPERZ, JORDAN, FAXES, AND JEKELTOR (PHP)

// lol jordan here lol
// im going to fucking kms if this doesn't work lol
// i hate myself and logan lol