import React from "react"
import MyCard from "./Card"
import addFavourite from "../utils/addFavourite"
import {Typography} from "@material-ui/core"

const FavouriteMedia = () => {
  let favouriteMedias = sessionStorage.getItem("favouriteMedia")
  favouriteMedias
    ? (favouriteMedias = JSON.parse(favouriteMedias))
    : (favouriteMedias = [])
  return (
    <React.Fragment>
      {favouriteMedias.length > 0 ? (
        <React.Fragment>
          <Typography className="mt-3" variant="body1">
            Your Favourite Medias
          </Typography>
          <div className="best-of-display mt-3">
            {favouriteMedias.map((media, index) => (
              <MyCard
                key={index}
                artistName={media.artistName}
                trackName={media.trackName}
                imageUrl={media.imageUrl}
                addFavourite={addFavourite}
              />
            ))}
          </div>
        </React.Fragment>
      ) : (
        ""
      )}
    </React.Fragment>
  )
}

export default FavouriteMedia
