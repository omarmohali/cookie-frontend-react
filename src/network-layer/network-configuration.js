import axios from "axios";
var baseUrl = "http://localhost:3001/";


function fullUrl(path) {
    return baseUrl + path; 
}

function get(path, query) {

    return new Promise( async (resolve, reject) => {
        try {
            var response = await axios.get(fullUrl(path), {withCredentials: true});
            resolve(response);
        } catch (err) {
            reject(err);
        }
    });

}

function post(path, body) {
    
    return new Promise( async (resolve, reject) => {
        try {
            var response = await axios.post(fullUrl(path), body, {withCredentials: true});
            resolve(response)
        } catch (err) {
            reject(err)
        }

    });
    
}

export { fullUrl , get, post } ;