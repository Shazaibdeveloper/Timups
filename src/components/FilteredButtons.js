import React from 'react';

const FilterButton = ({ category, handleCategoryClick }) => {
  return (
    <button onClick={() => handleCategoryClick(category)}>{category}</button>
  );
};

export default FilterButton;
