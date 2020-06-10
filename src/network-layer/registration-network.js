import axios from "axios";


async function registerUser(firstName, lastName, email, password) {


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
    try {
        var result = await axios.get("http://localhost:3001/users/5edb9f2e7129c600047ee2af")
        console.log(result.data.email);
    } catch (err) {
        console.log("Errorrrrrorororor")
        console.log(err);
    }
    

    // console.log(firstName)
    // console.log(lastName)
    // console.log(email)
    // console.log(password)
}


export default registerUser;
