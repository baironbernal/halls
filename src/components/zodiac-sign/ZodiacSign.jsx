import React from 'react';
import ModalForm from '../modal/ModalForm';
import Matchs from './Signal/Matchs';
import useZodiacSign from '../../hooks/useZodiacSign';
import './ZodialSign.css'

const ZodiacSign = () => {
  
  const { options, selectedValue, information, setSelectedValue, setAction, action} = useZodiacSign();
  
  return (
    <div>
      <select
        value={selectedValue}
        onChange={e => {
          setSelectedValue(e.target.value);
          setAction(action + 1);
        }}
        className="astros--select form-select rounded-5 w-50 mx-auto py-3 text-center"
        id="selectOption"
      >
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {selectedValue ? (
        <div className="row m-5">
          <Matchs information={information} />
        </div>
      ): null}

        <div className="mt-0 p-0">
          <ModalForm />
        </div>
    </div>
  );
};

export default ZodiacSign;