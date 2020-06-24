import { post } from "./network-configuration";

function signin(email, password) {
    return new Promise(async (resolve, reject) => {
        try {
            var response = await post("users/login",  { email, password});
            resolve(response);
        } catch (err) {
            reject(err);
        }
    })
}

export default signin;