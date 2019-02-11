import React from 'react';
import PropTypes from 'prop-types';


const NumberInput = ({ onClick, onChange }) => (
    <div>
      <input
          type="number"
          placeholder="Enter number only"
          onChange={onChange}
      />
      <button
        onClick={onClick}>
        Generate
      </button>
    </div>
);
NumberInput.propTypes = {
    onClick: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
  };
export default NumberInput;