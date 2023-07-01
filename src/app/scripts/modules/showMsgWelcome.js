import Swal from "sweetalert2";

function showMsgWelcome(name = "Usuario") {
  Swal.fire({
    title: `¡Bienvenido ${name}!`,
    timer: 3000,
  });
}

export default showMsgWelcome;
