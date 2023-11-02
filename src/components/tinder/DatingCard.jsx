import React from 'react'

const DatingCard = ({ information }) => {
  return (
    <>
        <p className="text-center ff-gotham-bold fs-4 lh-1">{information.title}</p>
        <p className="text-center px-5 py-3 lh-1 rounded-4 ff-gotham-book bg-gray-light-h fc-gray-light fs-5">{information.question}</p>
    </>
  )
}

export default DatingCard
