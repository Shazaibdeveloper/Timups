import React, { useState } from 'react';
import Watchesapi from '../Api/Watchesapi';
import { add } from '../Store/CartSlice';
import { useDispatch } from 'react-redux'; 
import Filters from './Filters';

const Latest_watches = ({ watches }) => {
  const [shop, setShop] = useState(Watchesapi);
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [selectedwatch, setselectedwatch] = useState(null);

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    setSelectedStatus(null); // Reset status filter when a category is selected
    setselectedwatch(null)
  };

  const handleSelectStatus = (status) => {
    setSelectedStatus(status);
    setSelectedCategory(null);
    setselectedwatch(null) // Reset category filter when a status is selected
  };
  const handleselectedwatch = (watch) => {
    setSelectedStatus(null);
    setSelectedCategory(null);
    setselectedwatch(watch) // Reset category filter when a status is selected
  };

  const filteredWatches = watches.filter(watch => {
    if (selectedCategory) {
      return watch.category === selectedCategory;
    }
    if (selectedStatus) {
      return watch.status === selectedStatus;
    }
    if (selectedwatch) {
      return watch.thing === selectedwatch;
    }
    return true; // Show all watches if no category or status filter is selected
  });
  const handleAdd = (item) => {
    dispatch(add(item));
  };

   

  return (
    <>
      <section className="shop_section layout_padding latest_watches">
        <div className="container">
        <Filters onSelectCategory={handleSelectCategory} onSelectStatus={handleSelectStatus} onselectedwatch={handleselectedwatch}/>
          <div className="row">
            {filteredWatches.map((p) => {
              const { id, w1, h6, price, status, category } = p;

              return (
                <div className="col-md-4 box-div" key={id}>
                  <div className="box">
                    <div className="img-box">
                      <img src={w1} alt="" />
                    </div>
                    <div className="new">
                      <span>{status}</span>
                    </div>
                     
                      <div className="add_box">
                        <a onClick={() => handleAdd(p)}>Add to Cart</a>
                      </div>
                   </div>
                  <div className="detail-box">
                    <h6>{h6}</h6>
                    <h6>
                      Price: <span>${price}</span>
                    </h6>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      
    </>
  );
};

export default Latest_watches;
