/* This file contains the definition of the serach media route*/

const getDataItem = require("../utils/getMediaItem")

/**@param app
 * @description this route will respond to request
 * for medias as specified by the search term e.g
 * beyonce, drake, tom cruise, chris tucker...
 * and the media type (music, movie, podcast, software)
 * @returns a response containing the top 25 medias
 * filtered by the search params
 */
module.exports = (app) => {
  app.get("/search/:term/:media", (req, res) => {
    const {term, media} = req.params
    const url = `https://itunes.apple.com/search?term=${term}&media=${media}&country=za`
    getDataItem(url).then((result) => {
      res.json(result)
    })
  })
}
