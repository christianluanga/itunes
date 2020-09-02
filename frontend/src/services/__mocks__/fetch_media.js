import data from "../test data/top.media.data"
const fakeData = [
  {
    feed: {
      author: {
        name: {
          label: "iTunes Store"
        },
        uri: {
          label: "http://www.apple.com/uk/itunes/"
        }
      },
      updated: {
        label: "2020-07-20T12:54:07-07:00"
      },
      rights: {
        label: "Copyright 2008 Apple Inc."
      },
      title: {
        label: "iTunes Store: Top Films"
      },
      icon: {
        label: "http://itunes.apple.com/favicon.ico"
      },
      link: [
        {
          attributes: {
            rel: "alternate",
            type: "text/html",
            href:
              "https://itunes.apple.com/WebObjects/MZStore.woa/wa/viewTop?cc=za&id=161547&popId=15"
          }
        },
        {
          attributes: {
            rel: "self",
            href: "https://itunes.apple.com/za/rss/topmovies/limit=6/json"
          }
        }
      ],
      id: {
        label: "https://itunes.apple.com/za/rss/topmovies/limit=6/json"
      }
    }
  }
]
export default async (url) => {
  return await new Promise((resolve) => {
    resolve(fakeData)
  })
}
