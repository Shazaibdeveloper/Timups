import React from 'react';  

const Details = ({ match }) => { 

  if (!match) {
    return null; // Return null if selectedProduct is not found
  }

  const { w1, status, price, para, title } = match;

  return (
    <>
      <section className="py-5 product_detail">
        <div className="container px-4 px-lg-5 my-5">
          <div className="row gx-4 gx-lg-5 align-items-center">
            <div className="col-md-6">
              <img className="card-img-top mb-5 mb-md-0" src={w1} alt={title} />
            </div>
            <div className="col-md-6">
              <div className="small mb-1">{status}</div>
              <h1 className="display-5 fw-bolder">Shop item template</h1>
              <div className="fs-5 mb-5">
                <span>${price}</span>
              </div>
              <p className="lead">{para}</p>
              <div className="d-flex">
                <button className="btn btn-outline-dark flex-shrink-0" type="button">
                  <i className="bi-cart-fill me-1"></i>
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Details;
