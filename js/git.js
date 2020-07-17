

const url = "https://api.github.com/users/DevGar1/repos";

function git() {
    const git = document.getElementById('projects');
    const prueba = document.createElement('div');
    console.log(git);
    prueba.innerText = 'dksalfjs';
    git.appendChild(prueba);
    // let names = [];
    // fetch(url)
    //     .then(res => res.json()
    //         .then(data => {
    //             names = data;
    //             const fragment = document.createDocumentFragment();
    //
    //             for (const name of names) {
    //                 const div = document.createElement('div');
    //                 div.textContent = name.name;
    //                 git.appendChild(div);
    //             }
    //
    //
    //         })
    //     );

}
