import "../styles/index.scss";
import showMsgWelcome from "./modules/showMsgWelcome";
import Swal from "sweetalert2";
import {
  getUserByPhone,
  getUserByPhonePassword,
} from "../scripts/services/users.js";

const form = document.getElementById("loginIn");
const numberInput = document.getElementById("numberInput");
const passwordInput = document.getElementById("passwordInput");

document.addEventListener("DOMContentLoaded", async () => {
  // Agregar un evento de escucha al formulario cuando se envíe
  form.addEventListener("submit", async (e) => {
    e.preventDefault(); // Evitar que el formulario se envíe

    // Obtener los valores ingresados por el usuario
    const phoneNumber = numberInput.value;
    const password = passwordInput.value;

    if (phoneNumber.trim() === "") {
      Swal.fire({
        icon: "warning",
        text: "Ingrese el número de teléfono",
      });
      return;
    }

    if (password.trim() === "") {
      Swal.fire({
        icon: "warning",
        text: "Por favor, ingrese su contraseña.",
      });
      return;
    }

    let user = await getUserByPhone(phoneNumber);

    if (!user) {
      Swal.fire({
        icon: "error",
        text: `El número ${phoneNumber} no existe`,
      });
      return;
    }

    user = await getUserByPhonePassword(phoneNumber, password);
    if (!user) {
      Swal.fire({
        icon: "error",
        text: "Usuario y contraseña no coinciden",
      });
      return;
    }
    //   Escucha los eventos de cambio de URL
    //   Navega a la ruta inicial al cargar la página
    showMsgWelcome(user.name);
    setTimeout(function () {
      window.location.href = `./home.html?user=${encodeURIComponent(
        JSON.stringify(user)
      )}`;
    }, 3000);
  });
});
