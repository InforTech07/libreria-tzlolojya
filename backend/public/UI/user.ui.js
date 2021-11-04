import AppServices from "../services/AppServices";
const appservice= new AppServices();
class UiUser{
    getUsers(){
        appservice.makeRequest('user',{},'GET').then(data=>{

        }).catch(err=>{

        })
    }

    renderUser(users){
       const $list = document.getElementById('list-user');
       $list.innerHTML='';
       const $fragment = document.createDocumentFragment();
       let $n=1;
       users.forEach(el => {
            const $fila= document.createElement('tr');
            $fila.innerHTML=`
            <th scope="row">${$n}</th>
            <td>${el.user}</td>
            <td>opciones</td>
            `;
       });
    }


}

export default UiUser;