
async function request(url,method,data){
      let res=await fetch(url,{
            method:method,
            mode: 'cors',
            body:JSON.stringify(data),
            credentials: 'include',
            headers:{
                "Content-Type":"application/json"
            }
        }).catch(err=>{throw new Error(err)});
        ;
        let resData= await res.json();
        return resData;
        
}
export default request;