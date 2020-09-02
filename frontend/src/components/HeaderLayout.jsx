import React from "react"
import {Link, withRouter} from "react-router-dom"
import {SearchBar} from "./SearchBar"
import {BestOfCard} from "./BestOfCard"

const HeaderLayout = () => {
  const bestOf = ["Movies", "Music", "Apps", "Podcast"]
  return (
    <React.Fragment>
      <SearchBar />
      <div className="best-of-row">
        {bestOf.map((cat) => (
          <Link key={cat} to={`/BestOf/${cat.toLowerCase()}`}>
            <BestOfCard item={cat} key={cat.toLowerCase()} />
          </Link>
        ))}
        <Link key="favorite" to={`/favorite`}>
          <BestOfCard item="Favorite" key="favorite" />
        </Link>
      </div>
    </React.Fragment>
  )
}

export default withRouter(HeaderLayout)
