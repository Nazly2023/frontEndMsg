import "../styles/home.css";
import printUser from "./modules/home/printUser";

const appBody = document.getElementById("app");

document.addEventListener("DOMContentLoaded", () => {
  // Obtener el valor del parámetro de consulta
  const urlParams = new URLSearchParams(window.location.search);
  const parametro = urlParams.get("user");
  // Decodificar el valor del parámetro
  const objetoJSONDecodificado = decodeURIComponent(parametro);
  // Convertir la cadena de texto JSON en un objeto
  const user = JSON.parse(objetoJSONDecodificado);

  const avatar = require(`./src/app/images/${user.id}/myAvatar.svg`);
  const photo = require(`./app/images/${user.id}/photoProfile.png`);
  printUser(user, appBody, { avatar, photo });
});
