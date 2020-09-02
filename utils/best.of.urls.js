module.exports = (type) => {
  switch (type) {
    case "movies":
      return "https://itunes.apple.com/za/rss/topmovies/limit=25/json"
    case "music":
      return "https://itunes.apple.com/za/rss/topsongs/limit=25/explicit=true/json"
    case "apps":
      return "https://itunes.apple.com/za/rss/topgrossingapplications/limit=25/json"
    case "podcast":
      return "https://itunes.apple.com/za/rss/toppodcasts/limit=25/explicit=true/json"
  }
}
