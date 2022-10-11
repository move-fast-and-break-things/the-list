/**
 * @param {string} url
 */
export async function getStudents(url) {
  const response = await fetch(`${url}/students`, {
    method: 'GET'
  });
  return response.json();
}
