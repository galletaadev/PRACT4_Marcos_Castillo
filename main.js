import { Person, FullNamePerson } from './Person.js';
import { fetchRandomUser, fetchCurrentTime } from './apiHandler.js';

function obtenerDatosDeRandom() {
    Promise.all([fetchRandomUser(), fetchCurrentTime()])
        .then(([userData, timeData]) => {
            const apiPerson = userData.results[0];
            const horaActual = `${timeData.hour}:${timeData.minute}:${timeData.second}`;
            mostrarDatosEnHTML(apiPerson, true, horaActual);
        })
        .catch(error => console.error('Error al obtener datos:', error));
}

function mostrarDatosEnHTML(apiPerson, datosReales = false, horaActual = '') {
    const personFullName = datosReales ? new FullNamePerson(
        apiPerson.email,
        apiPerson.phone,
        apiPerson.location.street.name,
        apiPerson.picture.thumbnail,
        apiPerson.name.first,
        apiPerson.name.last,
        horaActual
    ) : new FullNamePerson('email', 'teléfono', 'city', './user_nt_found.jpg', 'nombre', 'apellido', 'tiempo');

    mostrarInformacion(personFullName);
}

function mostrarInformacion(person) {
    const container = document.querySelector('.container');
    container.innerHTML = `
        <div class="card">
            <img src="${person.foto}" alt="Foto de ${person.fullName}">
            <span><strong>Nombre Completo:</strong> ${person.fullName}</span>
            <span><strong>Email:</strong> ${person.email}</span>
            <span><strong>Teléfono:</strong> ${person.phone}</span>
            <span><strong>Localización:</strong> ${person.streetName}</span>
            <span><strong>Hora Actual:</strong> ${person.horaActual}</span>
        </div>
    `;
}

const botonGenerar = document.createElement('button');
botonGenerar.textContent = 'Generate User';
botonGenerar.addEventListener('click', obtenerDatosDeRandom);

const botonContainer = document.createElement('div');
botonContainer.classList.add('boton-container');
botonContainer.appendChild(botonGenerar);

document.body.appendChild(botonContainer);

mostrarDatosEnHTML({}, false);
