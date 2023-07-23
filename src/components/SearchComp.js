import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchWatch } from '../Store/SearchSlice';
import { add } from '../Store/CartSlice';
import {FaSearch } from 'react-icons/fa';

const SearchComp = () => {
  const searchResults = useSelector((state) => state.search.searchResults);
  console.log(searchResults);

  const handleAdd = (item) => {
    dispatch(add(item));
  };

  const [searchQuery, setSearchQuery] = useState('');
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(searchWatch(searchQuery));
  };
  

  return (
    <>
      <div class="container search-container">
        <div class="row height d-flex justify-content-center align-items-center">
          <div class="col-md-8">
            <div class="search">
              <i class="fa fa-search"><FaSearch /></i>
              <input
                type="text"
                class="form-control"
                placeholder="Search by Name"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="btn-div">
                <a class="btn btn-primary" onClick={handleSearch}>
                  Search
                </a>
              </div>
            </div>
          </div>
        </div>
 

        <div className="row searching-box justify-content-center">
            {searchResults.map((watch) => {
              const { id, w1, h6, price, status, category } = watch;

              return (
                <div className="col-md-3 box-div" key={id}>
                  <div className="box">
                    <div className="img-box">
                      <img src={w1} alt="" />
                      <div className="add_box">
                        <a onClick={() => handleAdd(watch)}>Add to Cart</a>
                      </div>
                    </div>
                    <div className="new">
                      <span>{status}</span>
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
    </>
  );
};

export default SearchComp;
