import React, { useRef } from 'react';
import ModalForm from '../modal/ModalForm';
import Matchs from './Signal/Matchs';
import useZodiacSign from '../../hooks/useZodiacSign';
import './ZodialSign.css';

const ZodiacSign = () => {
  const {
    options,
    selectedValue,
    information,
    setSelectedValue,
    setAction,
    action, 
    cookieExists
  } = useZodiacSign();

  const matchsRef = useRef(null);

  const handleSelectChange = (e) => {
    setAction(action + 1);
    setSelectedValue(e.target.value);

    // Scroll to the Matchs component
    if (matchsRef.current) {
      matchsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <select
        value={selectedValue}
        onChange={handleSelectChange}
        className="astros--select form-select rounded-5 w-25 mx-auto py-2 position-relative z-1"
        id="selectOption"
      >
        <option value="" selected disabled>
          Buscar Signo
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {selectedValue && cookieExists ?(
        <div ref={matchsRef} className="row m-5">
          <Matchs information={information} />
        </div>
      ) : null}

      <div className="mt-0 p-0">
        <ModalForm />
      </div>
    </div>
  );
};

export default ZodiacSign;
