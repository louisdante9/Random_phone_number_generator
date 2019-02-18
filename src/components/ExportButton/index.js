import React from 'react';
import PropTypes from 'prop-types';

const ExportButton = ({ phoneNumbers, onClick }) => (
    <div>
      {
        phoneNumbers.length > 0 &&
        <button
            className="exp-cta"
            onClick={onClick}>
          Export Numbers
        </button>
      }
    </div>
);

ExportButton.propTypes = {
  phoneNumbers: PropTypes.array,
  onClick: PropTypes.func,
};

export default ExportButton;