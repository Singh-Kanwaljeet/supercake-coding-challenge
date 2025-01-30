/**
 * Fetches the list of customers from the API.
 *
 * @returns {Promise<Array>} A promise that resolves to an array of customer objects.
 *
 * @throws {Error} If the fetch request fails or the response is not in JSON format.
 */
async function fetchCustomers() {
  const response = await fetch(`${process.env.API_BASE_URL}/customers`);
  const data = await response.json();
  return data?.customers || [];
}

export { fetchCustomers };
