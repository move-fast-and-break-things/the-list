/**
 * @param {string} url
 */
export async function getStudents(url) {
  const response = await fetch(`${url}/students`);
  return response.json();
}
