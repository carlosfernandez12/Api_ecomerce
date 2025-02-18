/* fetch("https://www.swapi.tech/api/people/83")
  .then((response) => response.json())
  .then((data) => {
    console.log("Nombre:", data.result.properties.name);
    console.log("Altura:", data.result.properties.height);
    console.log("Peso:", data.result.properties.mass);
  })
  .catch((error) => console.error("Error:", error));
 */

async function obtenerTodosLosPersonajes() {
  let personajes = [];
  let page = 1;
  let totalPages = 1;

  while (page <= totalPages) {
    const response = await fetch(
      `https://www.swapi.tech/api/people?page=${page}`
    );
    const data = await response.json();
    if (page === 1) {
      totalPages = Math.ceil(data.total_records / 10);
      console.log(`Total de personajes: ${data.total_records}`);
    }

    personajes = personajes.concat(data.results);
    page++;
  }

  console.log("Lista de todos los personajes con altura y peso:");

  for (const personaje of personajes) {
    const response = await fetch(personaje.url); // Hacer petición a la URL individual
    const data = await response.json();
    console.log(`Nombre: ${data.result.properties.name}`);
    console.log(`Altura: ${data.result.properties.height}`);
    console.log(`Peso: ${data.result.properties.mass}`);
    console.log(`color de cabello: ${data.result.properties.hair_color}`);
    console.log(`color de ropa: ${data.result.properties.skin_color}`);
    console.log(`color de ojos: ${data.result.properties.eye_color}`);
    console.log(`año: ${data.result.properties.birth_year}`);
    console.log(`nose que es: ${data.result.properties.gender}`);
    console.log("----------------------");
  }
}

obtenerTodosLosPersonajes();
