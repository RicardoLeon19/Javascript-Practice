const producto = 'Monitor 20 Pulgadas';

// .repetear te va a permitir repetir una cadena de texto...

const texto = ' en Promocion'.repeat(3);

console.log(texto);
console.log(`${producto} ${texto} !!!`);

// Split, dividir un string

const actividad = 'Estoy aprendiendo Javascript moderno';
console.log(actividad.split(''));

const hobbies ='Leer, caminar, escuchar musica, escribir, aprender a programar';
console.log(hobbies.split(','))

const tweet = 'Aprendiendo Javascript moderno #JSModernoconJuan';
console.log(tweet.split('#'));