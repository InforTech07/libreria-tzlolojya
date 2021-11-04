class AppServices{
    constructor(){
        this.url ='/api/v1/';
    }
    getHeaders(){
        return{
            "Content-type":"application/json"
        }
    }
    makeRequest(request,params,requestType){
        return new Promise((resolve,reject)=>{
            fetch(this.url + (request ||''),{
                headers:this.getHeaders(),
                method: requestType,
                body:requestType !== 'GET' ? JSON.stringify(params): null
            })
            .then((response)=>{
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response
            })
            .then(response =>{
                return response.json();
            }).then(data =>{
                console.log(data)
                resolve(data);
            })
            .catch(error=>{
                console.log('request error',error);
                reject(new Error(error));
            })
        })
    }
}
export default AppServices;