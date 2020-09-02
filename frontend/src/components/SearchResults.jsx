import React, {useState, useEffect} from "react"
import {LoaderComponent} from "../components/LoaderComponent"
import {SearchResultsLayout} from "./SearchResultsLayout"

const SearchResults = ({filters}) => {
  const {term, media} = filters
  const [data, setData] = useState([])
  const fetchData = async () => {
    const res = await fetch(`/search/${term}/${media}`)
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
  }, [term, media])
  return (
    <React.Fragment>
      <div className="best-of-display">
        {data.hasOwnProperty("results") ? (
          <SearchResultsLayout data={data} filters={filters} />
        ) : (
          <LoaderComponent />
        )}
      </div>
    </React.Fragment>
  )
}

export {SearchResults}
