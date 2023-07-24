import React from 'react';  
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { add } from '../Store/CartSlice';
import { useDispatch } from 'react-redux';
import Navbar from './Navbar';
import Footer from './Footer';

const Details = () => { 
  const { productId } = useParams();
  const productList = useSelector((state) => state.products.productList);
  const selectedProduct = productList.find((product) => product.id === parseInt(productId));
  const dispatch = useDispatch();

  if (!selectedProduct) {
    return <div>Product not found</div>;
  }

  const handleAdd = (item) => {
    dispatch(add(item));
  };

  return (
    <>
    <Navbar/>
      <section className="py-5 product_detail">
        <div className="container px-4 px-lg-5 my-5">
          <div className="row gx-4 gx-lg-5 align-items-center">
            <div className="col-md-6">
              <img className="card-img-top mb-5 mb-md-0" src={selectedProduct.w1} alt={selectedProduct.title} />
              
            </div>
            <div className="col-md-6">
              <div className="small mb-1">{selectedProduct.status}</div>
              <h1 className="display-5 fw-bolder">Shop item template</h1>
              <div className="fs-5 mb-5">
                <span>${selectedProduct.price}</span>
              </div>
              <p className="lead">{selectedProduct.para}</p>
              <div className="d-flex">
                <button className="detail-aad-to-cart btn btn-danger flex-shrink-0" type="button" onClick={() => handleAdd(selectedProduct)}>
                  <i className="bi-cart-fill me-1"></i>
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default Details;
