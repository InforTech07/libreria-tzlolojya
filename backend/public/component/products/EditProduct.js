import UiProducts from "../../UI/products.ui.js";
export function EditProductModal(p){
    const $editproduct = document.createElement('div');
    $editproduct.classList.add("new-product")
    $editproduct.innerHTML=`
        <form class="card card-body" id="f-editproduct">
            <h2>Editar producto</h2>
            <span id="id-p" hidden>${p._id}</span>
            <div class="form-group">
                <label for="f-name" class="form-label mt-4">Producto:</label>
                <input type="text" class="form-control" id="f-name" aria-describedby="Nombre producto" placeholder="producto" value="${p.name}">
            </div>
            <div class="form-group">
                <label for="f-description" class="form-label mt-4">Descripcion:</label>
                <input type="text" class="form-control" id="f-description" placeholder="Descripción" value="${p.description}">
            </div>
            <div class="form-group">
                <label for="f-imgurl" class="form-label mt-4">Url imagen:</label>
                <input type="text" class="form-control" id="f-imgurl" placeholder="http://imagen" value="${p.imgUrl}">
            </div>
            <div class="form-group">
                <label for="f-amount" class="form-label mt-4">Cantidad:</label>
                <input type="number" class="form-control" id="f-amount" placeholder="Cantidad" value="${p.amount}">
            </div>
            <div class="form-group">
                <label for="f-price" class="form-label mt-4">Precio:</label>
                <input type="number" class="form-control" id="f-price" placeholder="precio" value="${p.price}">
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
                <button type="Submit"  class="btn btn-primary">Actualizar</button>
        </form>
    `;

    function initEditProduct() {
        const uiproduct = new UiProducts();
        const formEditProduct = document.getElementById('f-editproduct');
        formEditProduct.addEventListener('submit',()=>{
            const idp=document.getElementById("id-p").innerHTML;
            const name = document.getElementById("f-name").value;
            const des = document.getElementById("f-description").value;
            const urlimg = document.getElementById("f-imgurl").value;
            const amount = document.getElementById("f-amount").value;
            const price = document.getElementById("f-price").value;
            const category = document.getElementById("f-category").value;

            if(name === ' '||des === ' '||urlimg === ' '||amount === ' '||price === ' ' || idp ===' '){
                uiproduct.toastNotification("error","complete todos los campos");
            }else{
                let productData ={
                    "name":name,
                    "description":des,
                    "imgUrl":urlimg,
                    "amount":amount,
                    "price":price,
                    "category":category
                }
                uiproduct.updateProduct(idp,productData)
            }
        })
        
    }
    setTimeout(()=>initEditProduct(),100)
    return $editproduct;
}