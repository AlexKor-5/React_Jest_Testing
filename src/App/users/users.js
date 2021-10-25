import regeneratorRuntime from "regenerator-runtime";

export const getUser = async (number) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${number}`)
        return await response.json()
    } catch (e) {
        // console.error(e);
        return null
    }
}


