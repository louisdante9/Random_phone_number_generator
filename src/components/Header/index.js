import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

const Header = ({ min, max, total, phoneNumbers }) => (
    <header className="App-header">
      <h1>RPNG</h1>
      {
        phoneNumbers.length > 0 &&
        <Fragment>
        <h3>Stats</h3>
        <div className="stats-details">
            <p><strong>Min Phone number:</strong> {min}</p>
            <p><strong>Max Phone number:</strong> {max}</p>
            <p><strong>Total number of Phone numbers:</strong> {total}</p>
        </div>
        </Fragment>
      }
    </header>
);
Header.propTypes = {
    min: PropTypes.number,
    max: PropTypes.number,
    total: PropTypes.number,
    phoneNumbers: PropTypes.array.isRequired,
  };
export default Header;