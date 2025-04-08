export default {
  async loginYGuardar() {
    const respuesta = await finalMonkey.run; // ejecutás tu API
    await storeValue("token", respuesta.token); // guardás el token
    await storeValue("usuarioLogueado", respuesta); // guardás todo el usuario
    navigateTo("Home"); // redirigís a la página principal
  }
}