import React from "react"
import {Link} from "react-router-dom"
import Card from "react-bootstrap/Card"
import IconButton from "@material-ui/core/IconButton"
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined"
import FavoriteOutlinedIcon from "@material-ui/icons/FavoriteOutlined"

class MyCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isFavourite: false
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(item) {}
  render() {
    const {imageUrl, trackName, artistName, addFavourite} = this.props

    return (
      <Card style={{width: "14rem"}}>
        <Card.Img
          variant="top"
          src={imageUrl.replace(/\/[^\/]*$/, "/400x500bb.jpg")}
        />
        <Card.Body>
          <Card.Title style={{fontSize: "10pt"}}>
            <Link to={`/content/${artistName}/all`}>{artistName}</Link>
            <IconButton
              onClick={() => {
                addFavourite(
                  {imageUrl, trackName, artistName},
                  this.state.isFavourite
                )
                this.setState({
                  isFavourite: !this.state.isFavourite
                })
              }}
            >
              {this.state.isFavourite ? (
                <FavoriteOutlinedIcon />
              ) : (
                <FavoriteBorderOutlinedIcon />
              )}
            </IconButton>
          </Card.Title>
          <Card.Text>
            <Link to={`/content/${trackName}/all`}>{trackName}</Link>
          </Card.Text>
        </Card.Body>
      </Card>
    )
  }
}

export default MyCard
