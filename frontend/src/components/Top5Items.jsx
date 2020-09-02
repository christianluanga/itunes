import React from "react"
import Row from "react-bootstrap/Row"
import MyCard from "./Card"
import info_extractor from "../utils/infoExtractor"

const Top5Items = ({category, index, title, addFavourite}) => {
  return (
    <React.Fragment>
      <Row className="pt-2 pb-4">
        <h4>Top {title}</h4>
      </Row>
      <div className="card-deck">
        {category.feed.entry.map((item, index) => (
          <MyCard
            key={index}
            artistName={info_extractor(item).artistName}
            trackName={info_extractor(item).trackName}
            imageUrl={info_extractor(item).imageUrl}
            addFavourite={addFavourite}
          />
        ))}
      </div>
      <hr></hr>
    </React.Fragment>
  )
}

export {Top5Items}
