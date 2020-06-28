import { get } from "./network-configuration";

function getRecipes() {

    return new Promise(async (resolve, reject) => {
        try {
            var response = await get("recipes", null);
            resolve(response.data);
        } catch (err) {
            reject(err);
        }
    })

}

export default getRecipes;