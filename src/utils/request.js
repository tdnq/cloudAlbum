
async function request(url,method,data){
    let reqParams={
        method:method,
        mode: 'cors',
        credentials: 'include',
        headers:{
            "Content-Type":"application/json"
        }
    };
    if(method!=="GET"){
        reqParams.body=JSON.stringify(data);
    }
    let res=await fetch(url,reqParams)
                    .catch(err=>{throw new Error(err)});
        let resData= await res.json();
        return resData;
        
}
export default request;