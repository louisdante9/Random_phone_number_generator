import React from 'react';

const Sorter = () => (
    <div className="sort">
      <span>sort by</span>
      <select>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </div>
);

export default Sorter;