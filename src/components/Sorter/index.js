import React, {Fragment }from 'react';
import PropTypes from 'prop-types';


const Sorter = ({ phoneNumbers, onChange}) => (
    <Fragment>
    {
        phoneNumbers.length > 0 &&
        <div className="sort">
          <span>Sort by</span>
          <select onChange={onChange}>
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      }
    </Fragment>

);
Sorter.propTypes = {
    phoneNumbers: PropTypes.array,
    onChange: PropTypes.func,
  };
export default Sorter;