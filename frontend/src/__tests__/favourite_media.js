import React from "react"
import FavouriteMedia from "../components/FavoriteMedia"
import renderer from "react-test-renderer"

it("Favourite Medias Renders Correctly", () => {
  const tree = renderer.create(<FavouriteMedia />).toJSON()
  expect(tree).toMatchSnapshot()
})
