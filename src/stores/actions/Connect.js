
export const Connect = async(endpoint, body, method = 'POST', callBack) => {
    var baseUrl = "http://179.50.12.201:8080/";
    var queryUrl = baseUrl+endpoint;

    var requestOptions = {};
    if(method !== "GET"){
        requestOptions = {
            method: method,
            headers: { 
                "Content-Type": "application/json"
            },
            body:JSON.stringify(body)
        };
    }

    try{
        const response = await fetch(queryUrl,requestOptions);
        const data = await response.json();
        data.body = body;
        callBack(data);
    }catch(e){
        console.log(e);
        callBack(e);
    }
    
}