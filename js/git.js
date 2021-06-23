const filterProjects = (data) => {
    return data.filter(project => {
        return project['id'] != 280251029;
    });
};

const selectProperties = (data) => {
    return data.map(properties => {
        const {
            description,
            name,
            full_name,
            has_pages
        } = properties;
        const principalImg = `https://raw.githubusercontent.com/DevGar1/${name}/main/portada.png`;
        const result = {
            name,
            description,
            full_name,
            principalImg
        }
        if (has_pages) {
            const urlPage = `https://devgar1.github.io/${name}`;
            result['urlPage'] = urlPage;
        }
        return result;
    })
}

const fetchImg = (urlImage) => {
    return new Promise((res, rej) => {
        fetch(urlImage)
            .then(response => {
                const {ok, url} = response;
                if(ok)
                    return url;
                else 
                    throw new Error('https://media.istockphoto.com/photos/yellow-background-with-black-grunge-hazard-sign-picture-id1016242576');
            })
            .then(response => res(response))
            .catch(err => {
                return rej(err)
            });
    })

}
const checkImg = async (data) => {
    for (let i = 0; i < data.length; i++) {
        try {
            const url = await fetchImg(data[i].principalImg);
            data[i].principalImg = url;
        } catch(badUrl) {
            data[i].principalImg = badUrl.message;
        }
    }
    return new Promise(resolve => resolve(data));
}

const getInfoFromGitHub = (url) => {
    return new Promise((res, rej) => {
        fetch(url)
            .then(response => response.json())
            .then(filterProjects)
            .then(selectProperties)
            .then(checkImg)
            .then(data => res(data))
            .catch(err => rej(err));
    })

}


export {
    getInfoFromGitHub
}

// function git() {
//     const git = document.getElementById('projects');
//     let index = 0;


//     fetch(url)
//         .then(res => res.json()
//             .then(repos => {
//                 for (const repo of repos) {
//                     console.log(repo);
//                     if (repo.name !== 'portafolio-Abraham') {
//                         const div = document.createElement('div');
//                         div.style.padding = '3%';
//                         const h4 = document.createElement('h4');
//                         h4.innerText = repo.name;
//                         h4.style.marginTop = '13px';
//                         div.appendChild(h4);
//                         const p = document.createElement('p');
//                         p.textContent = repo.description;
//                         div.appendChild(p);
//                         const img = document.createElement('img');
//                         img.src = gif[index].path;
//                         img.alt = repo.description;
//                         div.appendChild(img);
//                         const a = document.createElement('a');
//                         a.href = repo.html_url;
//                         a.innerHTML = ' <i style="margin: 40px;" class="fab fa-github  fa-3x"></i>';
//                         a.style.color = 'rgba(44, 100, 200, 0.9)';
//                         div.appendChild(a);
//                         git.appendChild(div);
//                         index++;
//                     }
//                 }
//             })
//         );
// }