'use strict'
import {getInfoFromGitHub} from './git.js';
const url = "https://api.github.com/users/DevGar1/repos";

function fun() {
   const img = document.getElementById('Iam');
   img.style.transition = 'all 1s';
   img.style.transform = "rotateY(360deg)";
}

function bar() {
   const menu = document.getElementById('menu');
   if (menu.style.display === 'none'){
      menu.style.display = 'flex';
      menu.style.justifyContent = 'space-between';
      menu.style.transition = 'all 1s';
   } else {
      menu.style.transition = 'all 1s';
      menu.style.display = 'none';
   }

}

const initPage = async() => {
   try {
      const data =  await getInfoFromGitHub(url);
      console.log(data);
   } catch(err) {
      console.log(err);
   }
}


initPage();
