const BE_URL = process.env.REACT_APP_BACKEND_URL;

/**
 * @param {string} url
 */
export async function getStudents(url = BE_URL) {
  const response = await fetch(`${url}/students`);
  return response.json();
}

/**
 * @param {string} url
 * @param {string} name
 */
export async function postStudents(name, url = BE_URL) {
  await fetch(`${url}/students`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name: name })
  });
}
