import React, { useState } from "react";
import Layout from "../components/Layout/Layout.jsx";
import { NavLink, Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { IoIosArrowForward } from "react-icons/io";
import "../../public/css/Shipping.css";

const Shipping = () => {
  const [name, setName] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("api/v1/auth/register", {
        name,
        lname,
        email,
        password,
        cpassword,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };
  return (
    <>
      <Layout>
        <div className="shipping-wrapper">
          <div className="container">
            <h5 className="text-center fw-bold">Shipping </h5>
          </div>
        </div>

        <div className="container-fluid main-info">
          <div className="quick-info">
            <ul>
              <li>
                <NavLink to="#">
                  Home
                  <span>
                    <IoIosArrowForward />
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink to="#">
                  Product
                  <span>
                    <IoIosArrowForward />
                  </span>
                </NavLink>
              </li>

              <li>
                <NavLink to="#">Shipping</NavLink>
              </li>
            </ul>
          </div>
        </div>

        {/* Start ProgressBar  */}
        <div className="container">
          <div className="checkout-container">
            <div className="authentication-wrapper">
              <div className="action-auth-toggle">
                <span> Sign In</span>
              </div>
            </div>

            <div className="prgress-wrapper">
              <ul className="opc-progress-bar ">
                <li className="opc-progress-bar-item _active">
                  <span> Shipping</span>
                </li>
                <li className="opc-progress-bar-item ">
                  <span> Review & Payments</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* end progressBar   */}

        <div>
          {/*Shippin form */}
          <div className="shipping-img mt-3 mb-3">
            <div className="container-fluid  text-light py-3"></div>
            <section className="container my-2  w-50 text-light p-2">
              <div className="shipping-title  ">Shipping Address</div>

              <form
                onSubmit={handleSubmit}
                className=" register-form container row g-3 p-3"
              >
                <div className="col-md-12">
                  <label htmlFor="inputEmail4" className="form-label">
                    EMAIL <strong>*</strong>
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control shadow-none"
                    id="inputEmail4"
                  />
                </div>

                <div className="col-md-6 text-dark">
                  <h5 className="mb-2">
                    Personal Information <strong>*</strong>{" "}
                  </h5>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-control  shadow-none"
                    id="validationDefault01"
                    placeholder="First Name"
                    required
                  />
                </div>

                <div className="col-md-6 text-gray mt-5">
                  <input
                    type="text"
                    value={lname}
                    onChange={(e) => setLname(e.target.value)}
                    className="form-control shadow-none"
                    id="validationDefault01"
                    placeholder="Last Name"
                    required
                  />
                </div>

                <div className="col-md-12">
                  <label htmlFor="inputEmail4" className="form-label">
                    Street Address <strong>*</strong>
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control shadow-none"
                    id="inputEmail4"
                  />
                </div>

                <div className="col-md-6">
                  <label htmlFor="inputEmail4" className="form-label">
                    City <strong>*</strong>
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control shadow-none"
                    id="inputEmail4"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputEmail4" className="form-label">
                    State/Province <strong>*</strong>
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control shadow-none"
                    id="inputEmail4"
                  />
                </div>

                <div className="col-md-6">
                  <label htmlFor="inputEmail4" className="form-label">
                    Zip/Postal Code <strong>*</strong>
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control shadow-none"
                    id="inputEmail4"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputEmail4" className="form-label">
                    Zip/Postal Code <strong>*</strong>
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control shadow-none"
                    id="inputEmail4"
                  />
                </div>
                <div className="col-md-12">
                  <label htmlFor="inputEmail4" className="form-label">
                    Phone Number<strong>*</strong>
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control shadow-none"
                    id="inputEmail4"
                  />
                </div>

                <div className="shipping-next">
                  <button type="submit" className=" rounded-0">
                    <Link to="/product/checkout">NEXT</Link>
                  </button>
                </div>
              </form>
              <div className="shipping-title mt-5 ">Shipping Address</div>

              <div>
                <table className="table-shipping">
                  <thead>
                    <tr className="row">
                      <th className="col col-method">Select Method</th>
                      <th className="col col-method">Price</th>
                      <th className="col col-method">Method Title</th>
                      <th className="col col-method">Carrier Title</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="row">
                      <td className="col col-method">
                        {" "}
                        <span>
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                        </span>
                      </td>
                      <td className="col col-method">
                        <span className="price"> .00</span>{" "}
                      </td>
                      <td className="col col-method">
                        {" "}
                        <span>free</span>
                      </td>
                      <td className="col col-method">
                        {" "}
                        <span>Free Shipping</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </div>
          {/* End Shipping form */}
        </div>
      </Layout>
    </>
  );
};

export default Shipping;
