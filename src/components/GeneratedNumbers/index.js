import React from 'react';
import PropTypes from 'prop-types';


const GeneratedNumbers = ({ phoneNumbers }) => (
    <div>
    {phoneNumbers.length > 1 ?
          <h3>Generated Numbers</h3>
          :
          <span><i>No phone numbers generated yet</i></span>
      }

      <div>
        <ul className="generated-numbers">
        {
            phoneNumbers && phoneNumbers.map(number => (
                <li key={number}>{number}</li>
            ))
          }
        </ul>
      </div>
    </div>
);
GeneratedNumbers.propTypes = {
  phoneNumbers: PropTypes.array.isRequired,
};
export default GeneratedNumbers;