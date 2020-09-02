const fetch = require("node-fetch")

/**@param url
 * @description this function receives a url and
 * uses the fetch API to get the data.
 * @returns a promise with the or an error
 */
module.exports = async (url) => {
  try {
    const results = await fetch(url)
    return await results.json()
  } catch (err) {
    throw err
  }
}
