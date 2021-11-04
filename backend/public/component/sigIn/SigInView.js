import UiSigIn from "../../UI/SigIn.ui.js";
export function SigInView(){
    const $sigIn= document.createElement('div');
    $sigIn.classList.add('home')
    $sigIn.innerHTML=`
    <div class="page-title animated fadeInDown">
        <h3>LIBRERIA TZ'OLOJYA'</h3>
    </div>
    <div class="home-sigin animated fadeInDown">
      <div>
        <form class="card card-body" id="f-login">
          <h3>Acceso al sistema</h3>
          <div class="form-group">
             <label for="username" class="form-label mt-4">Usuario</label>
             <input type="text" class="form-control" id="f-username" aria-describedby="username" placeholder="Usuario">
          </div>
          <div class="form-group">
            <label for="password" class="form-label mt-4">Contrasena</label>
            <input type="password" class="form-control" id="f-password" placeholder="Contraseña">
          </div>
          <button type="Submit"  class="btn btn-primary">Ingresar</button>
        </form>
      </div>
      <div>
        <img src="http://4.bp.blogspot.com/-QPVayCz0saw/Vg5DW9wusxI/AAAAAAAAAJk/WzfN3dRJeuU/s1600/Articulos%2Bvarios%2Bde%2Bpapeleria.png" class="img-fluid" alt="img">
      </div>
    <div>`;
    function initSigIn(){
      const sigIngUser = new UiSigIn();
      const $formSigIn = document.getElementById('f-login');
      $formSigIn.addEventListener('submit',(e)=>{
        e.preventDefault();
        const username=document.getElementById('f-username').value;
        const pass = document.getElementById('f-password').value;
        if(!username || !pass){
          sigIngUser.noticationToast("error","Llene todos los campos")
          console.log('inputos vacios')
        }else{
          let userData = {
            username:username,
            password:pass
          };
          sigIngUser.sigIn(userData)
        }
      })
    }
    setTimeout(()=>initSigIn(),100)
    return $sigIn;
}