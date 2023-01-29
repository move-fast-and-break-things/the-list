const BE_URL = process.env.REACT_APP_BACKEND_URL;

export async function getStudents() {
  const response = await fetch(`${BE_URL}/students`);
  return response.json();
}

export async function deleteStudents(id) {
  await fetch(`${BE_URL}/students/${id}`, {
    method: 'DELETE'
  });
}

export async function updateStudent(id, name) {
  await fetch(`${BE_URL}/students/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name: name })
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
    },
    body: JSON.stringify({ name: name })
  });
}
