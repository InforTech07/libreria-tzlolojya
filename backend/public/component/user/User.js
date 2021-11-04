export function User() {
    const $userContainer=document.createElement('div');
    $userContainer.classList.add("home-user")
    $userContainer.innerHTML=`
    <div class="page-title animated fadeInDown">
        <h3>Usuarios</h3>
    </div>
    <div class="home-sigin animated fadeInDown">
    <div>
        <form class="card card-body" id="n-user">
        <h3>Nuevo Usuario</h3>
        <div class="form-group">
         <label for="username" class="form-label mt-4">Usuario:</label>
         <input type="text" class="form-control" id="f-username" aria-describedby="username" placeholder="Usuario">
        </div>
        <div class="form-group">
        <label for="password" class="form-label mt-4">Contrasena</label>
        <input type="password" class="form-control" id="f-password" placeholder="Contraseña">
        </div>
        <button type="Submit"  class="btn btn-primary">Guardar</button>
        </form>
        </div>
        <div id="list-user"></div>
    <div>`;
    return $userContainer;
}