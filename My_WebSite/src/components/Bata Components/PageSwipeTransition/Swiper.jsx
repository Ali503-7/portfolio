import React from 'react'
import './Swiper.scss'

function Swiper({ swipeFrom, toWere }) {
  return <div className={`swipe ${swipeFrom}`}>{toWere}</div>;
}

export default Swiper