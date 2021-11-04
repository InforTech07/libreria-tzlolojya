import AppServices from "../services/AppServices.js";
import {Modal} from "../component/modal/Modal.js";
import {EditProductModal} from "../component/products/EditProduct.js";
import {NewProduct} from "../component/products/NewProduct.js";
const appService = new AppServices();
class UiProducts{
    getProducts(){
        appService.makeRequest('product',{},'GET').then(data=>{
            this.renderProducts(data)
        }).catch(err=>{
            console.log(err)
        })
    }
    renderProducts(products){
    const productsContainer= document.getElementById('products-cards');
    productsContainer.innerHTML = '';
    const $fragment = document.createDocumentFragment();
    products.forEach(el => {
      const div = document.createElement('div');
      div.className = 'container-card animated fadeInRight';
      div.innerHTML = `
        <div class="card-product">
            <div class="imgBx">
                <img src="${el.imgUrl}">
            </div>
            <div class="contentBx">
                <b><h3>${el.name}</h3></b>
                <p>${el.description}</p>
                <b><span class="price">Existencia:${el.amount} unidades</span></b>
                <b><span class="price">Precio: Q.${el.price} c/u</span></b>
                <div class="option-card">
                    <button _id="${el._id}" class="btn btn-success editar">Editar</button>
                    <button _id="${el._id}" class="btn btn-danger eliminar">Eliminar</button>
                </div>
                <span>${el.created_at}</span>
            </div>
        </div>`;
      $fragment.appendChild(div);
    });
    productsContainer.appendChild($fragment)
    }

    newProduct(){
        Modal(NewProduct())
    }

    saveNewProduct(newProduct){
        appService.makeRequest('product',newProduct,'POST').then(res=>{
            this.removeModal();
            this.getProducts();
            this.toastNotification("success",res.msg)
        }).catch(err=>{
            console.log(err)
            this.toastNotification("error","Al registrar producto")
        })
    }

    deleteProduct(idProduct){
        const conf =confirm("Desea Eliminar el Producto ?");
        if(!conf){
            return
        }else{
            appService.makeRequest(`product/${idProduct}`,{},'DELETE').then(res=>{
                this.getProducts();
                this.toastNotification("success",res.msg)
            }).catch(err=>{
                console.log(err)
                this.toastNotification("error","Al eliminar producto")
            })

        }
        
    }

    getProduct(idProduct){
        appService.makeRequest(`product/${idProduct}`,{},'GET').then(res=>{
            this.editProduct(res)
        }).catch(err=>{
            console.log(err)
            this.toastNotification("error","Al cargar producto")
        })
    }
    editProduct(product){
        console.log(product._id)
        Modal(EditProductModal(product))
    }
    updateProduct(id,product){
        appService.makeRequest(`product/${id}`,product,'PUT').then(res=>{
            this.removeModal();
            this.getProducts();
            this.toastNotification("success",res.msg)
        }).catch(err=>{
            console.log(err)
            this.toastNotification("error","Al actualizar producto")
        })
    }

    removeModal(){
        //
        const modal = document.querySelector('.modal-contenedor');
        document.body.removeChild(modal)
    }

    toastNotification(notificationType,message){
        toastr[notificationType](message)
    }

}
export default UiProducts;