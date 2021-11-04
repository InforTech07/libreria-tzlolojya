import AppServices from "../services/AppServices.js";
const appService = new AppServices();
class UiSigIn{
    sigIn(user){
        appService.makeRequest('user',user,'POST').then(data=>{
            if(data.auth){
                this.noticationToast("success","Bienvenido")
                console.log(data.username)
                location.href='#/products'
            }else{
                this.noticationToast("error","Credenciales Incorrectos")
                console.log(data.msg)
            }
        }).catch(err=>{
            console.log(err)
            this.noticationToast("error","Al consultar los datos")
        })
    }
    
    noticationToast(notificationType,message){
        toastr[notificationType](message)
    }


}
export default UiSigIn;