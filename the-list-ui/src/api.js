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

async function patchAttendance(action, studentId, date) {
  if (!date) {
    throw new Error('Вы должны передать дату');
  }
  const response = await fetch(`${BE_URL}/attendance/${date}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ _id: studentId, action })
  });
  return response.json();
}

export async function addStudentAttendance(studentId, date) {
  return patchAttendance('add', studentId, date);
}

export async function removeStudentAttendance(studentId, date) {
  return patchAttendance('remove', studentId, date);
}

export async function getStudentAttendance(date) {
  const response = await fetch(`${BE_URL}/attendance/${date}`);
  return response.json();
}
