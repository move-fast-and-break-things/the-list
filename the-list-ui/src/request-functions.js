const BE_URL = process.env.REACT_APP_BACKEND_URL;

/**
 * @param {string} url
 */
export async function getStudents() {
  const response = await fetch(`${url}/students`);
  return response.json();
}

/**
 * @param {string} name
 */
export async function postStudents(name) {
  await fetch(`${BE_URL}/students`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name: name })
  });
}
