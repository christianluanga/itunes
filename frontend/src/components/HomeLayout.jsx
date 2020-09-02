import React, {useState, useEffect} from "react"
import {Top5Items} from "../components/Top5Items"
import {LoaderComponent} from "../components/LoaderComponent"
import addFavourite from "../utils/addFavourite"

const HomeLayout = () => {
  const [dataset, setDataset] = useState([])
  const categories = ["Movies", "Songs", "Free Mac Apps", "Free Books"]

  useEffect(() => {
    fetchResults()
      .then((res) => {
        return res.json()
      })
      .then((response) => {
        setDataset(response)
      })
  }, [])

  return (
    <div>
      <React.Fragment>
        {dataset.length > 0 ? (
          dataset.map((category, index) => (
            <Top5Items
              key={index}
              category={category}
              index={index}
              title={categories[index]}
              addFavourite={addFavourite}
            />
          ))
        ) : (
          <LoaderComponent />
        )}
      </React.Fragment>
    </div>
  )
}
const fetchResults = async () => {
  const res = await fetch("/media/top")
  return res
}
export {HomeLayout}
