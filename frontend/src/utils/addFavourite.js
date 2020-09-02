/**@description Add or remove a media to the list
 * of favourite medias
 * @param fav the media to add or remove from the list
 * @param isLiked the current liked state of the media
 * @returns null
 */
export default function addFavourite(fav, isLiked) {
  let favourites = sessionStorage.getItem("favouriteMedia")
  favourites ? (favourites = JSON.parse(favourites)) : (favourites = [])
  if (isLiked) {
    const medias = favourites.filter(
      (media) => JSON.stringify(media) !== JSON.stringify(fav)
    )
    sessionStorage.setItem("favouriteMedia", JSON.stringify(medias))
  } else {
    sessionStorage.setItem(
      "favouriteMedia",
      JSON.stringify([...favourites, fav])
    )
  }
}
