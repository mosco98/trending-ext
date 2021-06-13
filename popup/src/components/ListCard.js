/* global chrome */
import React from "react"
import { useAppContext } from "../utils/AppContext"

const ListCard = ({ i, trend }) => {
  const { name, tweet_volume, url } = trend
  const { theme } = useAppContext()
  function openPageHandler(url) {
    chrome.tabs.create({ url, active: true })
  }

  function abbreviateNumber(value) {
    var newValue = value
    if (value >= 1000) {
      var suffixes = ["", "K", "M", "B", "T"]
      var suffixNum = Math.floor(("" + value).length / 3)
      var shortValue = ""
      for (var precision = 2; precision >= 1; precision--) {
        shortValue = parseFloat(
          (suffixNum !== 0
            ? value / Math.pow(1000, suffixNum)
            : value
          ).toPrecision(precision)
        )
        var dotLessShortValue = (shortValue + "").replace(/[^a-zA-Z 0-9]+/g, "")
        if (dotLessShortValue.length <= 2) {
          break
        }
      }
      if (shortValue % 1 !== 0) shortValue = shortValue.toFixed(1)
      newValue = shortValue + suffixes[suffixNum]
    }
    return newValue
  }

  let cardClasses = "card px-3 py-2 cursor-pointer"

  if (tweet_volume && theme === "light") {
    cardClasses = "card px-3 py-2 cursor-pointer hover:card-light-mode-hover"
  }
  if (tweet_volume && theme === "dark") {
    cardClasses = "card px-3 py-2 cursor-pointer hover:card-dark-mode-hover"
  }

  return (
    <>
      <div className={cardClasses} onClick={() => openPageHandler(url)}>
        <small
          className={
            theme === "light"
              ? "opacity-75 text-black"
              : "opacity-50 text-gray-100"
          }
        >
          {i + 1} . Trending
        </small>
        <p
          className={
            theme === "light"
              ? "font-bold my-1 text-black"
              : "font-bold my-1 text-white"
          }
        >
          {name}
        </p>
        {tweet_volume && (
          <small
            className={
              theme === "light"
                ? "opacity-75 text-black"
                : "opacity-50 text-gray-100"
            }
          >
            {abbreviateNumber(tweet_volume)} tweets
          </small>
        )}
      </div>
      <hr />
    </>
  )
}

export default ListCard
