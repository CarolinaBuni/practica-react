import './InputSection.css';

const InputSection = ( { inputRef, value, onChange } ) => {
  return (
    <input
      className='calculator-input'
      ref={ inputRef }
      value={ value }
      type="number"
      onChange={ onChange }
    />
  );
};

export default InputSection;