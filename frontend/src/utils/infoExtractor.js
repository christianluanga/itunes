/**@description Given an media object, this function
 * will extract the arstist name, track name and image url
 * @param data the object from which the details are to be extracted
 * @returns an object containing just the extracted values
 */
const info_extractor = (data) => {
  return {
    imageUrl: data["im:image"][0].label,
    trackName: data["im:name"].label,
    artistName: data["im:artist"].label
  }
}

export default info_extractor
