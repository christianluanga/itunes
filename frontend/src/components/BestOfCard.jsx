import React from "react"

const BestOfCard = ({item}) => {
  const value = item.toLowerCase()
  return (
    <div className="best-of-bg-imgs" key={value} id={value}>
      <img
        src={`${require(`../img/${value}.jpg`)}`}
        alt={`${value} card`}
        style={{width: "100%"}}
      />
      <div className="centered">{item}</div>
    </div>
  )
}

export {BestOfCard}
