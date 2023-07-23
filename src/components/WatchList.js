import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterWatches } from '../Store/watchesSlice'; 
import FilterButtons from './FilteredButtons';

const WatchList = () => {
  const watches = useSelector(state => state.watches.watches);
  
  // const watch = useSelector(state => state.watches.watches);
  // console.log(watch)
  const filteredWatches = useSelector(state => state.watches.filteredWatches);
  const dispatch = useDispatch();
 
  

  const handleCategoryClick = (category) => {
    dispatch(filterWatches(category));
  };

  const watchesToDisplay = filteredWatches.length > 0 ? filteredWatches : watches;

  return (
    <div>
      <div>
      <FilterButtons category="Mens" handleCategoryClick={handleCategoryClick} />
        <FilterButtons category="Women" handleCategoryClick={handleCategoryClick} />
      </div>

      <div>
        {watchesToDisplay.map(watch => (
          <div key={watch.id}>
            <img src={watch.w1} alt={watch.h6} />
            <h6>{watch.h6}</h6>
            <p>{watch.para}</p>
            <p>{watch.price}</p>
            <p>{watch.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WatchList;
