const printUser = (user, container) => {
  const first_container = `

    <header class="header">
        <aside class="headerMobile">
            <figure class="photoProfile">
                <img src="../images/${user.id}/myAvatar${user.id}.svg" alt="avatarPpal" class="avatarPpal">
            </figure>
        </aside>
        <aside class="headerDesktop">
            <figure class="photoProfileHeader">
                <img src="../images/${user.id}/photoProfile${user.id}.png" alt="avatarContacto" class="avatarContacto">
            </figure>
            <div class="divContact">
                <span class="nomContact">${user.name}</span>
                <span class="activo">En línea</span>
            </div>
            <img src="../images/buscarIcon.png" alt="searchChatContact" class="searchChatContact">
        </aside>
    </header>
    `;
  container.innerHTML = first_container + container.innerHTML;
};

export default printUser;
