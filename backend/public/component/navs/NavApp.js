import UiProducts from "../../UI/products.ui.js";
export function NavApp(){
    const $navapp = document.createElement('nav');
    $navapp.className="navbar navbar-expand-lg navbar-dark bg-primary";
    $navapp.innerHTML=`
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Librería Tz'olojya'</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <a class="nav-link" href="#/products">Productos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link nproduct" id="n-product">Nuevo Producto</a>
          </li>
          <li class="nav-item">
            <a class="nav-link nproduct" id="n-user">Usuarios</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="#/">Salir</a>
          </li>
        </ul>
      </div>
    </div>`;
    function initProduct() {
       const newProduct = document.getElementById("n-product");
        newProduct.addEventListener('click',(e)=>{
        e.preventDefault();
          const newproduct = new UiProducts();
          newproduct.newProduct();
      }) 

      const goUser=document.getElementById('n-user');
      goUser.addEventListener('click',(e)=>{
        e.preventDefault();
        location.href="#/user"
      })
    }
    setTimeout(()=>initProduct(),100)
    return $navapp;
}
