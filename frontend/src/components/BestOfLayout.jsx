import React, {useState, useEffect} from "react"
import {LoaderComponent} from "../components/LoaderComponent"
import MyCard from "./Card"
import info_extractor from "../utils/infoExtractor"
import addFavourite from "../utils/addFavourite"

const BestOfLayout = ({type}) => {
  const searchTerm = type
  const [data, setData] = useState([])

  const fetchData = async () => {
    const res = await fetch(`/best-of/${searchTerm}`)
    return res
  }
  useEffect(() => {
    fetchData()
      .then((res) => {
        return res.json()
      })
      .then((response) => {
        setData(response)
      })
  }, [searchTerm])
  return (
    <React.Fragment>
      <div className="best-of-display">
        {data.hasOwnProperty("feed") ? (
          data.feed.entry.map((item, index) => (
            <MyCard
              key={index}
              artistName={info_extractor(item).artistName}
              trackName={info_extractor(item).trackName}
              imageUrl={info_extractor(item).imageUrl}
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

export {BestOfLayout}
