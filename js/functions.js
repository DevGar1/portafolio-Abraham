'use strict'


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
