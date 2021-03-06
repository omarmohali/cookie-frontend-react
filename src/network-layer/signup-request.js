import { post } from "./network-configuration";

function signup(firstName, lastName, email, password) {

    return new Promise(async (resolve, reject) => {
        try {
            var response = await post("users", { firstName, lastName, email, password })
            resolve(response);
        } catch (err) {
            reject(err);
        }
    });

}


export default signup;
