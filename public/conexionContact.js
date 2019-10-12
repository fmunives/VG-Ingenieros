&lt;script&gt;
import Form from '../src/Components/Organisms/Form'
const form = document.getElementById('contactForm'); // Obtenemos la referencia al formulario

if(form){ // Si existe nuestro elemento en memoria este se quedara escuchando al evento submit del formulario
  form.addEventListener('submit', contactForm); // Al momento de enviar el formulario, ejecuta la función "contactform"
}

function contactForm(event) {
  event.preventDefault(); // Prevenimos el comportamiento por defecto de un formulario (Enviar por URL los parametros)
  const nombre = document.getElementById('nombre'); // Obtenemos la referencia a cada uno de nuestros elementos del formulario
  const apellidos = document.getElementById('apellidos'); // Obtenemos la referencia a cada uno de nuestros elementos del formulario
  const email = document.getElementById('email');
  const celular = document.getElementById('celular');
  const mensaje = document.getElementById("mensaje");
  const data = {
    'name': nombre.value,
    'apellidos': apellidos.value,
    'email': email.value,
    'celular': celular.value,
    'mensaje': mensaje.value
  }; // Creamos un objecto con todos los elementos de nuestro formulario.
  saveContactForm(data); // Enviamos la información obtenida por el usuario a la función que se encargara de guardar la información en Firebase
  form.reset(); // borramos todos los campos. 
}

function saveContactForm(data) {
firebase.database().ref('contact').push(data) // Hacemos referencia al método database de el SDK y hacemos referencia el nombre del objeto que contendrá nuestros registros y empujamos los nuevos envios de datos
  .then(function(){
    alert('mensaje guardado'); // Si la petición es correcta y almaceno los datos mostramos un mensaje al usuario.
  })
  .catch(function(){
    alert('mensaje No guardado'); // En caso de ocurrir un error le mostramos al usuario que ocurrió un error.
  });
};
&lt;script&gt;