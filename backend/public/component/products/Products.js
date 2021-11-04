import UiProducts from "../../UI/products.ui.js";
export function Products() {
    const $product = document.createElement('div');
    $product.classList.add('container-products');
    $product.innerHTML=`
        <div class="page-title">
            <h3> CATALOGO DE PRODUCTOS</h3>
        </div>
        <div class="container-cards" id="products-cards"></div>
    `;
    function initProducts() {

        const uiProduct = new UiProducts();
        uiProduct.getProducts();

        const products=document.getElementById('products-cards');
        products.addEventListener('click',(e)=>{
            if (e.target.classList.contains("eliminar")) {
                let idProduct= e.target.getAttribute('_id')
                uiProduct.deleteProduct(idProduct)
            }else if(e.target.classList.contains('editar')){
                let idPro = e.target.getAttribute('_id');
                uiProduct.getProduct(idPro)
            }
        })

    }
    setTimeout(()=>initProducts());
    return $product;
}