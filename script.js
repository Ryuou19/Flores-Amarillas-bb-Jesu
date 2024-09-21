// Obtener los elementos del DOM
const confirmScreen = document.getElementById('confirm-screen');
const acceptButton = document.getElementById('accept-button');
const declineButton = document.getElementById('decline-button');
const musica = document.getElementById('myAudio');



// Mostrar la pantalla de confirmación inicialmente
document.getElementById('confirm-screen').style.display = 'block';

// Ejecutar la animación después de que se presione el botón
document.getElementById('accept-button').addEventListener('click', () => {
  // Ocultar la pantalla de confirmación
  document.getElementById('confirm-screen').style.display = 'none';

  // Mostrar la animación
  document.body.classList.remove("container");
  
  //musica
  myAudio.currentTime = 14;
  musica.play();

});
//hola hola
document.getElementById('decline-button').addEventListener('mouseover', () => {
  const maxX = 1000;
  const maxY = 500;
  const newX = Math.floor(Math.random() * maxX/2);
  const newY = Math.floor(Math.random() * maxY/4);
  declineButton.style.transform = `translate(${newX}px, ${newY}px)`;
});



