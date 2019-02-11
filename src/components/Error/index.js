import React from 'react';
import PropTypes from 'prop-types';

const Error = ({ error, message }) => (
    <div>
      {
        error && <div>
          {message}
        </div>
      }
    </div>
);

Error.propTypes = {
  error: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired
};

export default Error;