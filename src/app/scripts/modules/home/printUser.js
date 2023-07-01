const printUser = (user, container, photo) => {
  container.innerHTML = `

    <header class="header">
        <aside class="headerMobile">
            <figure class="photoProfile">
                <img src="${photo.avatar}" alt="avatarPpal" class="avatarPpal">
            </figure>
        </aside>
        <aside class="headerDesktop">
            <figure class="photoProfileHeader">
                <img src=".${photo.photo}" alt="avatarContacto" class="avatarContacto">
            </figure>
            <div class="divContact">
                <span class="nomContact">${user.name}</span>
                <span class="activo">En línea</span>
            </div>
            <img src="../images/buscarIcon.png" alt="searchChatContact" class="searchChatContact">
        </aside>
    </header>
    `;
};

export default printUser;
