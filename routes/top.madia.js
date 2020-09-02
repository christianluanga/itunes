const getDataItem = require("../utils/getMediaItem")
const urls = require("../utils/top.media.urls")
const getAllData = (uris) => {
  return Promise.all(uris.map((item) => getDataItem(item.url)))
}

module.exports = (app) => {
  app.get("/media/top", (req, res) => {
    getAllData(urls.urls)
      .then((result) => {
        return result
      })
      .then((results) => {
        res.send(results)
      })
  })
}
