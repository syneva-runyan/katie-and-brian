import constants from './constants';

// lookup name
export  const lookup = async(addressee) => {
    var xhr = new XMLHttpRequest();
    
    const resp = await new Promise((resolve, reject) => {
        xhr.addEventListener("readystatechange", function() {
        if(this.readyState === 4) {
            try {
                resolve(JSON.parse(this.responseText));
            } catch(e) {
                reject(e)
            }
        }
        });
        
        xhr.open("GET", `${constants.LOOKUP_ENDPOINT}?guest=${encodeURIComponent(addressee)}`);
        
        xhr.send();
    });

    return resp;
}

function JSONtoQueryParams(jsonObj) {
    let params = "";
    Object.keys(jsonObj).forEach(key => {
        params += `${key}=${jsonObj[key]}&`;
    });
    return params;
}

// save response
export const saveResponse = async(formData) => {
    var xhr = new XMLHttpRequest();

    
    const resp = await new Promise((resolve, reject) => {
        xhr.addEventListener("readystatechange", function() {
        if(this.readyState === 4) {
            try {
                let response = JSON.parse(this.responseText);
                resolve(response);
            } catch(e) {
                reject(e)
            }
        }
        });
        
        xhr.open("POST", `${constants.SAVE_RESPONSE_ENDPOINT}?${JSONtoQueryParams(formData)}`);
        
        xhr.send();
    });

    return resp;
}
