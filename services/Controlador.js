import { traerVehiculos } from "./ServicioStarwars";
import { traerEspecies } from "./ServicioStarwars";

traerEspecies(); then(function (respuesta) {


    respuesta.results.forEach(function (Especies) {

        let columna = document.createElement("div")
        columna.classList.add("col")

        let tarjeta = document.createElement("div")
        tarjeta.classList.add("card", "h-100", "shadow", "align-center")

        let nombre = document.createElement("h4")
        nombre.classList.add("text-center", "fw-bold")
        nombre.textContent = Especies.name

        let altura = document.createElement("h4")
        altura.classList.add("text-center", "fw-bold")
        altura.textContent = Especies.height

        let peliculas = document.createElement("h4")
        peliculas.classList.add("text-center", "fw-bold")
        peliculas.textContent = Especies.films

        tarjeta.appendChild(nombre)
        tarjeta.appendChild(altura)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)


        console.log(Especies)

    })
})

traerVehiculos().then(function (respuesta) {

    console.log(respuesta)
    respuesta.results.forEach(function (vehiculos) {

        let columna = document.createElement("div")
        columna.classList.add("col")

        let tarjeta = document.createElement("div")
        tarjeta.classList.add("card", "h-100", "shadow", "align-center")

        let nombre = document.createElement("h4")
        nombre.classList.add("text-center", "fw-bold")
        nombre.textContent = vehiculos.name

        columna.appendChild(tarjeta)
        fila2.appendChild(columna)
    })
})
