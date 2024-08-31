/**
 * Represents an error that occurred during a conversion request.
 * @typedef {Object} ConvertError
 * @property {string} message - The error message.
 * @example
 * {
 *  message: 'Invalid unit: "meters"'
 * }
 */
interface ConvertError {
  message: string;
}

/**
 * Converts a value from one unit to another using a GraphQL API.
 *
 * @param {string} from - The unit to convert from.
 * @param {string} to - The unit to convert to.
 * @param {number} value - The value to convert.
 * @returns {Promise<string>} - A promise that resolves to the result of the conversion as a string.
 * @throws {Error} - Throws an error if the conversion request fails or if there are any errors in the GraphQL response.
 *
 * @example
 * convert('meters', 'feet', 1)
 *   .then(result => console.log(result))  // Output: '3.28084'
 *   .catch(error => console.error(error));
 */
export const convert = async (
  from: string,
  to: string,
  value: number
): Promise<string> => {
  const GRAPHQL_ENDPOINT = "http://localhost:3000/convert";
  const HEADERS = {
    "Content-Type": "application/json",
  };
  /**
   * For more information on queries and variables, please refer to
   * https://graphql.org/learn/queries/
   */
  const query = `
    query Convert($from: String!, $to: String!, $value: Float!) {
      unit(from: $from, to: $to, value: $value) {
        result
      }
    }
  `;
  const variables = {
    from,
    to,
    value,
  };

  try {
    const response = await fetch(GRAPHQL_ENDPOINT, {
      method: "POST",
      headers: HEADERS,
      body: JSON.stringify({
        query,
        variables,
      }),
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch conversion: ${response.statusText}`);
    }

    const data = await response.json();

    if (data.errors) {
      const errorMessage = data.errors.map((err: ConvertError) => err.message).join(", ");
      throw new Error(`GraphQL errors: ${errorMessage}`);
    }

    return data.data.unit.result;
  } catch (error) {
    console.error("Error during conversion:", error);
    throw error; // Re-throw the error to be handled by the caller
  }
};
