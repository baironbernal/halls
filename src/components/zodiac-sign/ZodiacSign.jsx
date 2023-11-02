import React from 'react';
import ModalForm from '../modal/ModalForm';
import Matchs from './Signal/Matchs';
import useZodiacSign from '../../hooks/useZodiacSign';
import './ZodialSign.css'

const ZodiacSign = () => {
  
  const { options, selectedValue, information, showModal, setSelectedValue} = useZodiacSign();

  const handleActionModal = (value) => {
    if (!showModal) return;

    setSelectedValue(value)
  }

  return (
    <div>
      <select
        value={selectedValue}
        onChange={e => handleActionModal(e.target.value)}
        className="astros--select form-select rounded-5 w-50 mx-auto py-3 text-center"
        id="selectOption"
      >
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {selectedValue && (
        <div className="row m-5">
          <Matchs information={information} />
        </div>
      )}

      {!showModal && selectedValue ?(
        <div className="mt-0 p-0">
          <ModalForm />
        </div>
      ):null}
    </div>
  );
};

export default ZodiacSign;
