/* This file contains the definition of the best of media routes*/

const getMediaItem = require("../utils/getMediaItem")
const getBestOfLink = require("../utils/best.of.urls")

/**@param app
 * @description this route will respond to request
 * for the top best medias in a category. Categories
 * are: Movies, Music, Apps and Podcast
 * @returns a response containing the top 25 medias
 * in the requested category.*/
module.exports = (app) => {
  app.get("/best-of/:type", (req, res) => {
    const type = req.params.type
    const url = getBestOfLink(type)
    getMediaItem(url).then((result) => {
      res.send(result)
    })
  })
}
