import "../styles/home.scss";
import printChatuser from "./modules/home/printChatUser";
import printUser from "./modules/home/printUser";
import { getMessageByuser } from "./services/messages";
import { getUserById } from "./services/users";

const appBody = document.getElementById("app");

document.addEventListener("DOMContentLoaded", async () => {
  // Obtener el valor del parámetro de consulta
  const urlParams = new URLSearchParams(window.location.search);
  const parametro = urlParams.get("user");

  if (!parametro) {
    window.location.href = "index.html";
  }
  // Decodificar el valor del parámetro
  const objetoJSONDecodificado = decodeURIComponent(parametro);
  // Convertir la cadena de texto JSON en un objeto
  const user = JSON.parse(objetoJSONDecodificado);
  if ("id" in user) {
    const verify = await getUserById(user.id);
    if (!verify) {
      window.location.href = "index.html";
      return;
    }
    printUser(user, appBody);
    const messages = await getMessageByuser(user.id);
    console.log(messages);
    // printChatuser(appBody);
  }
});
