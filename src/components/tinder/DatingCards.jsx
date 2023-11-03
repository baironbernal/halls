import React  from 'react'
import TinderCard from 'react-tinder-card'
import './DatingCards.css'
import useDatingCards from '../../hooks/useDatingCards'

function DatingCards () {

   const { outOfFrame, childRefs, db, swiped, canSwipe, goBack, swipe } = useDatingCards();
   const publicURL = process.env.PUBLIC_URL;

  return (
    <div >
      <div className='cardContainer w-100 d-flex justify-content-center'>
        {db.map((card, index) => (
          <TinderCard
            ref={childRefs[index]}
            className='swipe'
            key={card.question}
            onSwipe={(dir) => swiped(dir, card.question, index)}
            onCardLeftScreen={() => outOfFrame(card.question, index)}
          >
            <div className='card'>
              <p className="text-center ff-gotham-bold fs-5">{card.question}</p>
              <p className="card--question text-center p-2 rounded-4 bg-gray-light-h fc-gray-light "> {card.repply}</p>
            </div>
          </TinderCard>
        ))}
      </div>
      <div className='buttons mx-auto d-block'>
        <img className='mx-3' onClick={() => swipe('left')} src={publicURL + '/images/pages/red/pink-x.svg'} alt='X' />
        <img onClick={() => swipe('right')} src={publicURL + '/images/pages/red/heart.svg' } alt='heart'/>
      </div>
    </div>
  )
}

export default DatingCards
