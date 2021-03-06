/**@description
 * This is the main entry file for the application server
 */
const express = require("express")
const path = require("path")
const helmet = require("helmet")
const app = express()

/*Require all the different routes from  */
const topMedia = require("./routes/top.madia")
const bestOfMedia = require("./routes/best.of.media")
const searchMedia = require("./routes/search.media")

app.use(helmet())

//Execute the Routes functions
topMedia(app)
bestOfMedia(app)
searchMedia(app)

//Serve static asests
if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"))

  app.get("*", (req, res) => {
    res.sendfile(path.resolve(__dirname, "frontend", "build", "index.js"))
  })
}
/*Create a PORT var and assign it the value from the .env 
file or the constant 3500 if no port number is found in 
the .emv file and set the App to listen on that port*/
const PORT = process.env.PORT || 3500
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})
