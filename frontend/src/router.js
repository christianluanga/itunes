import React from "react"
import {BrowserRouter, Route} from "react-router-dom"
import {HomeLayout} from "./components/HomeLayout"
import {BestOfLayout} from "./components/BestOfLayout"
import {SearchResults} from "./components/SearchResults"
import {createBrowserHistory} from "history"
import HeaderLayout from "./components/HeaderLayout"
import FavouriteMedia from "./components/FavoriteMedia"

const customHistory = createBrowserHistory()

const Router = () => {
  return (
    <BrowserRouter history={customHistory} basename="/itunes/search">
      <HeaderLayout />
      <Route path="/" exact component={HomeLayout}></Route>
      <Route path="/favorite" component={FavouriteMedia}></Route>
      <Route
        exact
        path="/BestOf/:type"
        render={(props) => <BestOfLayout type={props.match.params.type} />}
      />
      <Route
        path="/content/:term/:media"
        render={(props) => <SearchResults filters={props.match.params} />}
      />
      {/* <Route path="*" component={NotFoundLayout}/> */}
    </BrowserRouter>
  )
}

export {Router}
