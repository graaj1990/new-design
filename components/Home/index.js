import React from 'react'
import HeroBanner from './HeroBanner/index'

export default function index({handleClickEvent}) {
  return (
     <div >
    <HeroBanner  handleClickEvent={handleClickEvent} />
     </div>
  )
}
