'use strict'

const url = "https://api.github.com/users/DevGar1/repos";

function git() {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const a = document.getElementById('git');
            data.forEach(element => a.innerHTML = element.name);


        })
        .catch(err => console.log(err));
}
