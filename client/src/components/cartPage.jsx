import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../../public/css/CartPage.css";

import {
  getCartTotal,
  removeItem,
  decreaseItemQuantity,
  increaseItemQuantity,
} from "../features/cartSlice";
import { NavLink, Navigate } from "react-router-dom";
import Layout from "./Layout/Layout";

const CartPage = () => {
  const { cart, totalQuantity, totalPrice } = useSelector(
    (state) => state.allCart
  );
  const dispatch = useDispatch();
  console.log(cart);

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);

  return (
    <>
     <Layout>

     
  

    <div>
      <section className="h-100">
        <div className="container py-5">
          <div className="row d-flex flex-wrap justify-content-center my-4">
            <div className="col-md-8">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">Cart - {cart.length} items</h5>
                </div>
                <div className="card-body">
                  {cart?.map((data, id) => (
                    <div className="row">
                      <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                        <div
                          className="bg-image hover-overlay hover-zoom ripple rounded"
                          data-mdb-ripple-color="light"
                        >
                          <img
                            src={`/api/v1/product/product-photo/${data._id}`}
                            className="w-100"
                            alt="image"
                          />
                        </div>
                      </div>

                      <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                        <p>
                          <strong>{data.name}</strong>
                        </p>

                        <button
                          type="button"
                          className="cart-remove-button"
                          data-mdb-toggle="tooltip"
                          title="Remove item"
                          onClick={() => dispatch(removeItem(data._id))}
                        >
                          <i className="fas fa-trash"></i>
                        </button>
                      </div>

                      <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                        <div className="d-flex mb-">
                          <button
                            className="cart-button"
                            onClick={
                              data.quantity <= 1
                                ? 1
                                : () => dispatch(decreaseItemQuantity(data._id))
                            }
                          >
                            <i className="fas fa-minus"></i>
                          </button>

                          <div className="cart-input">
                            <input
                              name="quantity"
                              readOnly
                              value={data.quantity}
                              type="number"
                              className=" text-center "
                              onChange={() => null}
                            />
                          </div>

                          <button
                            className="cart-button "
                            onClick={() =>
                              dispatch(increaseItemQuantity(data._id))
                            }
                          >
                            <i className="fas fa-plus"></i>
                          </button>
                        </div>
                        <p className="text-center">Quantity</p>
                        <p className="text-start text-md-center">
                          Price: <span>&#8377;</span>
                          <strong>{data.price}</strong>
                        </p>
                      </div>
                      <hr className="my-4" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">Total Cart</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      Total Quantity
                      <span>{totalQuantity}</span>
                    </li>

                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>Total amount</strong>
                      </div>
                      <span>
                        <span>&#8377;</span> <strong>{totalPrice}</strong>
                      </span>
                    </li>
                  </ul>

                  <button
                    type="button"
                    className="checkout-button"
                    
                  >
                    <NavLink to="/product/checkout">Go to checkout </NavLink> 
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </Layout>
    </>

  );
};

export default CartPage;
