'use strict'

function experience() {
    const img = document.getElementById('image');
    img.style.display = 'none';
    const element = document.getElementById('im');
    element.style.background = 'rgba(44, 100, 200, 0.3)';
    element.innerHTML = "Tengo 6 meses de experiencia. Actualmente estoy trabajando en el area de TI de TAXSAT, que un despacho jurídico contable. Me dedico al desarrollo de aplicaciones móviles con obligaciones en el lado del frontend y backend. ";
    element.style.fontSize = '40px';
    element.style.fontFamily = '  font-family: \'Ubuntu\', sans-serif';
    element.style.textAlign = 'left';
    element.style.display = 'flex';
    element.style.flexDirection = 'column';
    element.style.padding = '10px';
    element.style.borderRadius = '15px';
    element.style.background = 'rgba(44, 100, 200, 0.3)';
    element.style.transitionn = 'all';
    element.style.transitionDuration = '1s';

}


function skills() {
    const img = document.getElementById('image');
    img.style.display = 'none';
    const element = document.getElementById('im');
    element.style.background = 'white';
    element.innerHTML = "<p>Tengo conocimientos en :</p>" +
        "<ul>" +
        "<li>Html</li>" +
        "<li>Css</li>" +
        "<li>Javascript</li>" +
        "<li>Typescript</li>" +
        "<li>Angular</li>" +
        "<li>NestJs</li>" +
        "<li>Manejo basico de linux</li>" +
        "</ul>";

    element.style.fontSize = '40px';
    element.style.fontFamily = '  font-family: \'Ubuntu\', sans-serif';
    element.style.textAlign = 'left';
    element.style.display = 'flex';
    element.style.flexDirection = 'column';
    element.style.padding = '10px';
    element.style.borderRadius = '15px';
    element.style.background = 'rgba(44, 100, 200, 0.3)';
}


function softskills() {
    const img = document.getElementById('image');
    img.style.display = 'none';
    const element = document.getElementById('im');
    element.style.background = 'white';
    element.innerHTML = "<p>Tengo :</p>" +
        "<ul>" +
        "<li>Autogestión</li>" +
        "<li>Trabajo en equipo</li>" +
        "<li>Curiosidad</li>" +
        "<li>Responsabilidad en lo que hago</li>" +
        "<li>Trabajo bajo presión</li>" +
        "</ul>";
    element.style.fontSize = '40px';
    element.style.fontFamily = '  font-family: \'Ubuntu\', sans-serif';
    element.style.textAlign = 'left';
    element.style.display = 'flex';
    element.style.flexDirection = 'column';
    element.style.padding = '10px';
    element.style.borderRadius = '15px';
    element.style.background = 'rgba(44, 100, 200, 0.3)';
}

function experienceOut() {
    const element = document.getElementById('im');
    element.style.background = 'none';
    element.innerHTML = "  <img id=\"image\" src=\"images/abraham.jpg\" alt=\"Una foto de abraham\">\n";
    element.style.borderRadius = '5px';
}
