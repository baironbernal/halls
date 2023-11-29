import React, { useEffect, useState } from 'react';
import Hammer from 'hammerjs';
import './CardSitos.css'; // Asegúrate de tener un archivo de estilo CSS asociado
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import Emoji from '../emoji/Emoji';


const CardSitos = ({ conversations }) => {
  const publicURL = process.env.PUBLIC_URL;
  const location = useLocation();
  const [emoji, setEmoji] = useState(false);

  
  const nopeImgSrc = location.pathname === '/fluye-en-la-u' ? publicURL + '/images/pages/purple/purple-x.svg' : publicURL + '/images/pages/red/pink-x.svg';
  const logoImgSrc = location.pathname === '/fluye-en-la-u' ? publicURL + '/images/icons/person.png' : publicURL + '/images/icons/diamond.png';

  useEffect(() => {
    const tinderContainer = document.querySelector('.tinder');
    const allCards = document.querySelectorAll('.tinder--card');
    const nope = document.getElementById('nope');
    const love = document.getElementById('love');

    function initCards(card, index) {
      var newCards = document.querySelectorAll('.tinder--card:not(.removed)');
     
      newCards.forEach(function (card, index) {
        card.style.zIndex = allCards.length - index;
        card.style.transform = 'scale(' + (20 - index) / 20 + ') translateY(-' + 30 * index + 'px)';
        card.style.opacity = (10 - index) / 10;
      });

      tinderContainer.classList.add('loaded');
    }

    allCards.forEach(function (el) {
      const hammertime = new Hammer(el);

      hammertime.on('pan', function (event) {
        el.classList.add('moving');
      });

      hammertime.on('pan', function (event) {
        if (event.deltaX === 0) return;
        if (event.center.x === 0 && event.center.y === 0) return;

        tinderContainer.classList.toggle('tinder_love', event.deltaX > 0);
        tinderContainer.classList.toggle('tinder_nope', event.deltaX < 0);

        const xMulti = event.deltaX * 0.03;
        const yMulti = event.deltaY / 80;
        const rotate = xMulti * yMulti;

        event.target.style.transform = 'translate(' + event.deltaX + 'px, ' + event.deltaY + 'px) rotate(' + rotate + 'deg)';
      });

      hammertime.on('panend', function (event) {
        el.classList.remove('moving');
        tinderContainer.classList.remove('tinder_love');
        tinderContainer.classList.remove('tinder_nope');

        const moveOutWidth = document.body.clientWidth;
        const keep = Math.abs(event.deltaX) < 80 || Math.abs(event.velocityX) < 0.5;

        event.target.classList.toggle('removed', !keep);

        if (keep) {
          event.target.style.transform = '';
        } else {
          const endX = Math.max(Math.abs(event.velocityX) * moveOutWidth, moveOutWidth);
          const toX = event.deltaX > 0 ? endX : -endX;
          const endY = Math.abs(event.velocityY) * moveOutWidth;
          const toY = event.deltaY > 0 ? endY : -endY;
          const xMulti = event.deltaX * 0.03;
          const yMulti = event.deltaY / 80;
          const rotate = xMulti * yMulti;

          event.target.style.transform = 'translate(' + toX + 'px, ' + (toY + event.deltaY) + 'px) rotate(' + rotate + 'deg)';
          initCards();
        }
      });
    });

    function createButtonListener(love) {
      return function (event) {
        const cards = document.querySelectorAll('.tinder--card:not(.removed)');
        const moveOutWidth = document.body.clientWidth * 1.5;

        if (!cards.length || cards.length === 1) {
          document.querySelector('.tinder--cards').remove()
          document.querySelector('.tinder--buttons').remove()
          setEmoji(true);
          return false;
        };

        const card = cards[0];

        card.classList.add('removed');

        if (love) {
          card.style.transform = 'translate(' + moveOutWidth + 'px, -100px) rotate(-30deg)';
        } else {
          card.style.transform = 'translate(-' + moveOutWidth + 'px, -100px) rotate(30deg)';
        }

        initCards();
        event.preventDefault();
      };
    }

    const nopeListener = createButtonListener(false);
    const loveListener = createButtonListener(true);

    nope.addEventListener('click', nopeListener);
    love.addEventListener('click', loveListener);
    // Debe haber un return cleanup para limpiar los eventos cuando el componente se desmonta

    initCards(); // Call initCards initially
    return () => {
      nope.removeEventListener('click', nopeListener);
      love.removeEventListener('click', loveListener);
      // Limpiar eventos, si es necesario
    };
  }, []); // El array vacío asegura que este efecto se ejecute solo una vez al montar el componente

  return (
    <div className="tinder">
      <div className="tinder--status">
        <i className="fa fa-remove"></i>
        <i className="fa fa-heart"></i>
      </div>

      <div className="tinder--cards">
      { Array.isArray(conversations) && conversations && conversations.map((card, index) => (
          <div className="tinder--card p-4 rounded-5" key={index} style={{
              zIndex: 10 - index,
              transform: 'scale(' + (20 - index) / 20 + ') translateY(-' + 30 * index + 'px)',
              opacity: (10 - index) / 10,
          }}>
            <img className='mx-auto' src={logoImgSrc} alt="Logo" 
            style={{
              maxWidth: '4rem',
            }} />
            <p className="text-center ff-gotham-bold fs-5">{card.question}</p>
            <p className="text-center ff-gotham-book p-2 rounded-4 fs-5 bg-gray-light-h fc-gray-light "> {card.repply}</p>
        </div>
      ))}
      </div>
          <div className="tinder--buttons">
            <img 
              id="nope"
              className='mx-3 position-relative z-1'
              style={{
                cursorPointer: true
              }}
              src={nopeImgSrc} 
              alt='X' />
            <img 
              id="love" className='position-relative z-1'
              src={publicURL + '/images/pages/red/heart.svg' } 
              alt='heart'/>
          </div>

          {
            emoji && (
              <>
                <Emoji url={'https://fonts.gstatic.com/s/e/notoemoji/latest/1f60e/512.webp'} />
              </>
            )
          }
    </div>
  );
};

export default CardSitos;