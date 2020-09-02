import React from "react"
import {LoaderComponent} from "./LoaderComponent"
import MyCard from "./Card"
import {useState} from "react"
import addFavourite from "../utils/addFavourite"

const SearchResultsLayout = ({data, filters}) => {
  return (
    <React.Fragment>
      <div className="best-of-display">
        {data.hasOwnProperty("results") ? (
          data.results.map((item, index) => (
            <MyCard
              key={index}
              artistName={item.artistName}
              trackName={item.trackName}
              imageUrl={item.artworkUrl100}
              addFavourite={addFavourite}
            />
          ))
        ) : (
          <LoaderComponent />
        )}
      </div>
    </React.Fragment>
  )
}

export {SearchResultsLayout}
