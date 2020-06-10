import axios from "axios";
import networkConfiguration from "./network-configuration";

async function signup(firstName, lastName, email, password) {

try {
    var response = await networkConfiguration("users", { firstName, lastName, email, password })
    console.log(response.data);
} catch (err) {
    console.log(err);
}


//     var xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//         console.log(this.responseText)
//     }
//   };
//   xhttp.open("GET", "https://cookie-social.herokuapp.com/users/5edb9f2e7129c600047ee2af", true);
//   xhttp.send();



    // https://jsonplaceholder.typicode.com/todos/1


    // https://cookie-social.herokuapp.com/users/5edb9f2e7129c600047ee2af
    // try {
    //     var result = await axios.get("http://localhost:3001/users/5edb9f2e7129c600047ee2af")
    //     console.log(result.data.email);
    // } catch (err) {
    //     console.log("Errorrrrrorororor")
    //     console.log(err);
    // }
    

    // console.log(firstName)
    // console.log(lastName)
    // console.log(email)
    // console.log(password)
}


export default signup;
