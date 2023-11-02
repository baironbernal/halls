import React, { useState, useRef, useMemo } from 'react';

const useDatingCards = () => {

const db = [
    {
    question: "¿Primer app1 date? Cadena de consejos para romper el hielo en tu próxima cita👇?",
    repply: "Para que tu amix deje el overthinking, respira y mándale tu ubicación en tiempo real 📌."
    },
    {
    question: "¿Primer app2 date? Cadena de consejos para romper el hielo en tu próxima cita👇?",
    repply: "Para que tu amix deje el overthinking, respira y mándale tu ubicación en tiempo real 📌."
    },
    {
    question: "¿Primer app3 date? Cadena de consejos para romper el hielo en tu próxima cita👇?",
    repply: "Para que tu amix deje el overthinking, respira y mándale tu ubicación en tiempo real 📌."
    },
    {
    question: "¿Primer app4 date? Cadena de consejos para romper el hielo en tu próxima cita👇?",
    repply: "Para que tu amix deje el overthinking, respira y mándale tu ubicación en tiempo real 📌."
    },
    {
    question: "¿Primer app5 date? Cadena de consejos para romper el hielo en tu próxima cita👇?",
    repply: "Para que tu amix deje el overthinking, respira y mándale tu ubicación en tiempo real 📌."
    },
    {
    question: "¿Primer app6 date? Cadena de consejos para romper el hielo en tu próxima cita👇?",
    repply: "Para que tu amix deje el overthinking, respira y mándale tu ubicación en tiempo real 📌."
    }
]
  const [currentIndex, setCurrentIndex] = useState(db.length - 1)
  const [lastDirection, setLastDirection] = useState()
  // used for outOfFrame closure
  const currentIndexRef = useRef(currentIndex)

  const childRefs = useMemo(
    () =>
      Array(db.length)
        .fill(0)
        .map((i) => React.createRef()),
    []
  )

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val)
    currentIndexRef.current = val
  }

  const canGoBack = currentIndex < db.length - 1

  const canSwipe = currentIndex >= 0

  // set last direction and decrease current index
  const swiped = (direction, nameToDelete, index) => {
    setLastDirection(direction)
    updateCurrentIndex(index - 1)
  }

  const outOfFrame = (name, idx) => {
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard()
  }

  const swipe = async (dir) => {
    if (canSwipe && currentIndex < db.length) {
      await childRefs[currentIndex].current.swipe(dir) // Swipe the card!
    }
  }

  // increase current index and show card
  const goBack = async () => {
    if (!canGoBack) return
    const newIndex = currentIndex + 1
    updateCurrentIndex(newIndex)
    await childRefs[newIndex].current.restoreCard()
  }

  return { outOfFrame, childRefs, db, swiped, canSwipe, goBack,  swipe };
};

export default useDatingCards;
