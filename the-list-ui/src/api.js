const BE_URL = process.env.REACT_APP_BACKEND_URL;

export async function getStudents() {
  const response = await fetch(`${BE_URL}/students`);
  return response.json();
}

export async function deleteStudents(id) {
  await fetch(`${BE_URL}/students/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'API-Key': 'secret'
    },
    body: JSON.stringify({ _id: id })
  });
}

/**
 * @param {string} name
 */
export async function postStudents(name) {
  await fetch(`${BE_URL}/students`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  });
}
