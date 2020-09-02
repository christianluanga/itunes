import React, {useState} from "react"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import {Link} from "react-router-dom"

const SearchBar = () => {
  const [filtersInput, setFiltersInput] = useState(false)
  const [searchInput, setSearchInput] = useState("")

  const handleChange = (e) => {
    const value = e.target.value.trim()
    value.length > 0 ? setFiltersInput(true) : setFiltersInput(false)
    setSearchInput(value)
  }

  return (
    <div>
      <Row className="w-100 pt-2">
        <Col lg="3">
          <Link className="logo-column" to="/">
            <img
              alt="Apple logo"
              className="logo ml-2 pl-2"
              src={require("../img/apple-logo.png")}
            ></img>
            <h5 className="text-muted mt-2 ml-2">itunes Search</h5>
          </Link>
        </Col>
        <Col lg="6">
          <input
            type="text"
            onChange={handleChange}
            className="w-100 form-control form-control-md"
            placeholder="Enter an artist name, a track name, movie name ..."
          />
        </Col>
        <Col lg="3">
          <Link to={`/content/${searchInput}/all`}>
            <button className="w-100 btn-md btn-secondary btn outline">
              Search
            </button>
          </Link>
        </Col>
      </Row>
      {filtersInput && (
        <Row className="mt-2">
          <Col lg="3"></Col>
          <Col lg="9" className="filters-column">
            Filters:
            <div>
              <Link to={`/content/${searchInput}/all`}>
                <button className="btn-sm btn-primary ml-2 btn outline">
                  All
                </button>
              </Link>
              <Link to={`/content/${searchInput}/movie`}>
                <button className=" btn-sm btn-primary ml-2 btn outline">
                  Movies
                </button>
              </Link>
              <Link to={`/content/${searchInput}/music`}>
                <button className=" btn-sm btn-primary ml-2 btn outline">
                  Music
                </button>
              </Link>
              <Link to={`/content/${searchInput}/software`}>
                <button className=" btn-sm btn-primary ml-2 btn outline">
                  Apps
                </button>
              </Link>
              <Link to={`/content/${searchInput}/podcast`}>
                <button className=" btn-sm btn-primary ml-2 btn outline">
                  Podcast
                </button>
              </Link>
            </div>
          </Col>
        </Row>
      )}
    </div>
  )
}

export {SearchBar}
