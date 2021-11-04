import UiProducts from "../../UI/products.ui.js";
export function NewProduct(){
    const $newproduct = document.createElement('div');
    $newproduct.classList.add("new-product")
    $newproduct.innerHTML=`
        <form class="card card-body" id="f-newproduct">
            <div class="form-group">
                <label for="f-name" class="form-label mt-4">Producto:</label>
                <input type="text" class="form-control" id="f-name" aria-describedby="Nombre producto" placeholder="producto">
            </div>
            <div class="form-group">
                <label for="f-description" class="form-label mt-4">Descripcion:</label>
                <input type="text" class="form-control" id="f-description" placeholder="Descripción">
            </div>
            <div class="form-group">
                <label for="f-imgurl" class="form-label mt-4">Url imagen:</label>
                <input type="text" class="form-control" id="f-imgurl" placeholder="http://imagen">
            </div>
            <div class="form-group">
                <label for="f-amount" class="form-label mt-4">Cantidad:</label>
                <input type="number" class="form-control" id="f-amount" placeholder="Cantidad">
            </div>
            <div class="form-group">
                <label for="f-price" class="form-label mt-4">Precio:</label>
                <input type="number" class="form-control" id="f-price" placeholder="precio">
            </div>
            <div class="form-group">
                <label for="f-category" class="form-label mt-4">Categoria</label>
                <select class="form-select" id="f-category">
                    <option>Cuadernos</option>
                    <option>Boligrafos</option>
                    <option>Carpetas</option>
                    <option>Calculadoras</option>
                    <option>Dibujo Técnico</option>
                </select>
            </div>
                <button type="Submit"  class="btn btn-primary">Guardar</button>
        </form>
    `;

    function initNewProduct() {
        const uiproduct = new UiProducts();
        const formNewProduct = document.getElementById('f-newproduct');
        formNewProduct.addEventListener('submit',()=>{
            const name = document.getElementById("f-name").value;
            const des = document.getElementById("f-description").value;
            const urlimg = document.getElementById("f-imgurl").value;
            const amount = document.getElementById("f-amount").value;
            const price = document.getElementById("f-price").value;
            const category = document.getElementById("f-category").value;

            if(name === ' '||des === ' '||urlimg === ' '||amount === ' '||price === ' '){
                uiproduct.toastNotification("error","complete todos los campos");
            }else{
                let newProduct ={
                    "name":name,
                    "description":des,
                    "imgUrl":urlimg,
                    "amount":amount,
                    "price":price,
                    "category":category
                }
                uiproduct.saveNewProduct(newProduct)
            }
        })
        
    }
    setTimeout(()=>initNewProduct(),100)
    return $newproduct;
}