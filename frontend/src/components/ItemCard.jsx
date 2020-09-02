import React from "react"
import {Link} from "react-router-dom"
import {makeStyles} from "@material-ui/core/styles"
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Avatar,
  Typography,
  Button,
  IconButton
} from "@material-ui/core"
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder"
import FavoriteOutlinedIcon from "@material-ui/icons/FavoriteOutlined"
import {red} from "@material-ui/core/colors"

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  avatar: {
    backgroundColor: red[500]
  },
  button: {
    marginRight: "2rem"
  }
}))

const ItemCard = ({item}) => {
  const {trackName, artistName} = item
  const src = item.artworkUrl100.replace(/\/[^\/]*$/, "/400x500bb.jpg")
  const classes = useStyles()
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {artistName.slice(0, 1).toUpperCase()}
          </Avatar>
        }
        // title={car.model.toUpperCase()}
        // subheader={car.make}
      />
      <CardMedia className={classes.media} image={src} title={artistName} />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          <Link to={`/content/${artistName}/all`}>{artistName}</Link>
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          <Link to={`/content/${trackName}/all`}>{trackName}</Link>
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label="add to favorites">
          <FavoriteOutlinedIcon />
        </IconButton>
      </CardActions>
    </Card>
  )
}
export {ItemCard}
