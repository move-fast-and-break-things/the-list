/**
 * @param {string} url
 */
export async function getStudents(url){
    const response = await fetch(`${url}/students`, {
        method: "GET"
    })
    return response.json();
}

/**
 * @param {string} url
 * @param {string} name
 */
export async function postStudents(url, name){
    await fetch(`${url}/students`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"name": name})
    })
}