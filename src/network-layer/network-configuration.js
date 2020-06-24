import axios from "axios";
var baseUrl = "http://localhost:3001/";


function fullUrl(path) {
    return baseUrl + path; 
}

function post(path, body) {
    
    return new Promise( async (resolve, reject) => {
        try {
            var response = await axios.post(fullUrl(path), body);
            resolve(response)
        } catch (err) {
            reject(err)
        }

    });
    
}

export { post } ;