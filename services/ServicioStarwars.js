export async function traerVehiculos() {
    const URL = 'https://swapi.dev/api/vehicles'
    const pedir = {
        method: "GET"
    }
    let respuesta = await fetch(URL, pedir)
    let respuestaTOKEN = await respuesta.json()
    return (respuestaTOKEN);
}

export async function traerEspecies() {
    const URL = 'https://swapi.dev/api/species'
    const pedir = {
        method: "GET"
    }
    let respuesta = await fetch(URL, pedir)
    let respuestaTOKEN = await respuesta.json()
    return (respuestaTOKEN);

}