const loginform = document.getElementById("formulario")
loginform.addEventListener('submit', event => {
    event.preventDefault()
    let u = document.getElementById("name").value
    let e = document.getElementById("email").value
    let d = document.getElementById("direccion").value
    let c = document.getElementById("ciudad").value
    alert(`Usuario: ${u}, email: ${e}, direccion${d} y ciudad${c}`)
})


let fielset = (legend, primerParametro, segundoParametro) => {
    return `<fieldset>
    <legend>${legend}</legend>
    <label for="${primerParametro}">${primerParametro}:</label>
    <input type="text" id="${primerParametro}" name="${primerParametro}">
    <label for="${segundoParametro}">${segundoParametro}:</label>
    <input type="text" id="${segundoParametro}" name="${segundoParametro}">
</fieldset>`
}
const app = document.getElementById("contenedor")

app.innerHTML += fielset("Información personal", "Nombre", "email")
app.innerHTML += fielset("Informacion de Dirección", "direccion", "ciudad")
