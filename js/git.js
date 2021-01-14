

const url = "https://api.github.com/users/DevGar1/repos";
const gif = [
    {
        "path": "im/dulceria.jpg",
        "description": "Proyecto creado para dar una explicación sencilla sobre flex-box"
    },{
        "path": "im/compu.jpeg",
        "description": "Proyecto creado para dar una explicación sencilla sobre flex-box"
    },{
        "path": "im/dul.jpg",
        "description": "Proyecto creado para dar una explicación sencilla sobre flex-box"
    },{
        "path": "im/ferreteria .jpg",
        "description": "Proyecto creado para dar una explicación sencilla sobre flex-box"
    },{
        "path": "im/aling-end.gif",
        "description": "Proyecto creado para dar una explicación sencilla sobre flex-box"
    },{
        "path": "im/nest-1.png",
        "description": "Proyecto creado para dar una explicación sencilla sobre flex-box"
    },{
        "path": "im/aling-end.gif",
        "description": "Proyecto creado para dar una explicación sencilla sobre flex-box"
    },{
        "path": "im/aling-end.gif",
        "description": "Proyecto creado para dar una explicación sencilla sobre flex-box"
    },{
        "path": "im/aling-end.gif",
        "description": "Proyecto creado para dar una explicación sencilla sobre flex-box"
    }
]
function git() {
    const git = document.getElementById('projects');
    let index = 0;


    fetch(url)
        .then(res => res.json()
            .then(repos => {
                for (const repo of repos) {
                    console.log(repo);
                    if (repo.name !== 'portafolio-Abraham') {
                        const div = document.createElement('div');
                        div.style.padding = '3%';
                        const h4 = document.createElement('h4');
                        h4.innerText = repo.name;
                        h4.style.marginTop = '13px';
                        div.appendChild(h4);
                        const p = document.createElement('p');
                        p.textContent = repo.description;
                        div.appendChild(p);
                        const img = document.createElement('img');
                        img.src = gif[index].path;
                        img.alt = repo.description;
                        div.appendChild(img);
                        const a = document.createElement('a');
                        a.href = repo.html_url;
                        a.innerHTML =   ' <i style="margin: 40px;" class="fab fa-github  fa-3x"></i>';
                        a.style.color = 'rgba(44, 100, 200, 0.9)';
                        div.appendChild(a);
                        git.appendChild(div);
                        index++;
                    }
                }
            })
        );
}

