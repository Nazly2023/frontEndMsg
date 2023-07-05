const printUser = (user, container) => {
  const first_container = `
    <div class="conf__user" id="conf_user">
        <span class="material-symbols-outlined">
            arrow_back
        </span>
        <span class="headerAP-profile">Perfil</span>
        <span class="image">
            <div class="image__container-photo">
                <img  src="${user.urlProfileImage}" alt="">
            </div>
            <input type="url" placeholder="Ingrese URL" class="image__text hide">
        </span>
        
        <span class="name">
            <label for="name__edit" class="name__label">Tu nombre</label>
            <span class="edit-name">
                <input id="name__edit" type="text" class="name__input">
                
            </span>
            
        </span>
        <button type = "button" id="edit" class="editName">Actualizar</Button>
    </div>
    <header class="header">
        <div class = "navBar">
            <aside >
                <button type="button" id="profile__conf">
                    <figure class="photoProfile">
                        <img src="${user.urlProfileImage}" alt="avatarPpal" class="avatarPpal" >
                    </figure>
                </button>
            </aside>
            <aside >
                <div class="divContact">
                    <span class="nomContact">${user.name}</span>
                    <span class="activo">En línea</span>
                </div>
            </aside>
        </div>
    </header>
    `;
  container.innerHTML = first_container + container.innerHTML;
};

export default printUser;
