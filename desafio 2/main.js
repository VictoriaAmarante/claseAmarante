let nombreIngresado = prompt("Ingresar nombre");
let apellidoIngresado = prompt("Ingresar apellido");
let password = prompt("ingresar password");

if (
  nombreIngresado === "Victoria" &&
  apellidoIngresado === "Amarante" &&
  password === "creandoVic"
) {
  console.log(
    "Nombre: " + nombreIngresado + "\nApellido: " + apellidoIngresado
  );
} else {
  console.log("Error al: Ingresar nombre, apellido o password");
}