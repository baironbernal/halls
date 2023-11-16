import React  from 'react'
import TinderCard from 'react-tinder-card'
import './DatingCards.css'
import useDatingCardsFluye from '../../hooks/useDatingCardsFluye';

function DatingCardsFluye () {

   const { outOfFrame, childRefs, db, swiped, canSwipe, goBack, swipe } = useDatingCardsFluye();
   const publicURL = process.env.PUBLIC_URL;

  return (
    <>
      <div className='cardContainer w-100 d-flex justify-content-center'>
        { Array.isArray(db) && db && db.map((card, index) => (
          <TinderCard
          style={{zIndex: '1 !important'}}
            ref={childRefs[index]}
            className='swipe'
            key={index}
            onSwipe={(dir) => swiped(dir, card.question, index)}
            onCardLeftScreen={() => outOfFrame(card.question, index)}>
            <div className='card' style={{
              transform: `scale(${(20 - index) / 20}) translateY(-${30 * index}px)`,
              
              zIndex: 1
            }}>
              <img className='card--diamond mx-auto' src={publicURL + '/images/icons/person.png'} alt="Logo" />
              <p className="text-center ff-gotham-bold fs-5">{card.question}</p>
              <p className="card--question text-center ff-gotham-book p-3 rounded-4 bg-gray-light-h fc-gray-light "> {card.repply}</p>
            </div>
          </TinderCard>
        ))}
      </div>
      <div className='buttons mx-auto d-block'>
        <img 
          className='mx-3 position-relative z-1' 
          onClick={() => swipe('left')} 
          src={publicURL + '/images/pages/purple/purple-x.svg'} 
          alt='X' />
        <img 
          className='position-relative z-1'
          onClick={() => swipe('right')} 
          src={publicURL + '/images/pages/red/heart.svg' } 
          alt='heart'/>
      </div>
    </>
  )
}

export default DatingCardsFluye
