'use strict'
import {
   getInfoFromGitHub
} from './git.js';
const url = "https://api.github.com/users/DevGar1/repos";

const addImg = (projects) => {
   console.log('f')
   let carousel = document.getElementsByClassName('carousel-inner');
   carousel = carousel[0];
   projects.forEach(project => {
      const {
         name,
         description,
         principalImg,
         urlPage
      } = project;
      const img = document.createElement('img');
      img.className = "d-block w-100";
      img.src = principalImg;
      img.alt = description;
      img.setAttribute('data-bs-toggle', 'popover');
      img.setAttribute('title', `${name}`);
      if (urlPage) {
         img.setAttribute('data-bs-content', `'${description}' Puedes ver la página en ${urlPage}`);
      } else {
         img.setAttribute('data-bs-content', `'${description}'`);
      }
      img.setAttribute('data-bs-placement', `top`);
      img.setAttribute('data-bs-trigger', "hover focus");
      const div = document.createElement('div');
      if (project['name'] == "Cineteca") {
         div.className = "carousel-item active"
      } else {
         div.className = "carousel-item";
      }
      const h2 = document.createElement('h3');
      h2.innerText = name;
      div.append(img);
      carousel.append(div);
   })
}

const initPage = async () => {
   try {
      const projects = await getInfoFromGitHub(url);
      addImg(projects);

   } catch (err) {
      console.log(err);
   } finally {
      console.log('asd');
      var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
      var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
         return new bootstrap.Popover(popoverTriggerEl)
      })

   }
}


initPage();