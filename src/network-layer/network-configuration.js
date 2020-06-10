import axios from "axios";
var baseUrl = "http://localhost:3001/";


function fullUrl(path) {
    return baseUrl + path; 
}

async function post(path, body) {
    var response = await axios.post(fullUrl(path), body);
    return response;
}

export default post;