import React from "react";
import Layout from "../components/Layout/Layout.jsx";
import "../../public/css/Contact.css";
import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { TfiEmail } from "react-icons/tfi";
import { BsTelephone } from "react-icons/bs";

const Contact = () => {
  return (
    <>
      <Layout>
        {/* backgrund  */}
        <div className="bacground-position">
          <div className="contact-background ">
            <h4 className="text-center vertical-middle text-light p-4">
              Contact Us
            </h4>
          </div>
        </div>
        {/* backgrund end */}

        {/* details */}
        <div className="container contact-page mt-2">
          <div>
            <div className="row mt-5">
              <div className=" col-md-12 ">
                <form className=" contact-form container row g-3 p-3">
                  <h4>SEND US A MESSAGE</h4>

                  <div className="col-md-12">
                    <label htmlFor="inputEmail4" className="form-label">
                      Name <strong>*</strong>
                    </label>
                    <input
                      type="text"
                      className="form-control shadow-none"
                      id="inputEmail4"
                    />
                  </div>
                  <div className="col-md-12">
                    <label htmlFor="inputEmail4" className="form-label">
                      EMAIL <strong>*</strong>
                    </label>
                    <input
                      type="email"
                      className="form-control shadow-none"
                      id="inputEmail4"
                    />
                  </div>

                  <div className="col-12">
                    <label
                      htmlFor="inputpassword"
                      className="form-label shadow-none"
                    >
                      PASSWORD<strong>*</strong>
                    </label>
                    <input
                      type="text"
                      className="form-control shadow-none"
                      id="inputpassword"
                      placeholder=""
                    />
                  </div>
                  <div className="row">
                    <div className="col-md-6 p-1  contact-back">
                      <button type="submit" className=" rounded-0">
                        <Link to="/">Send Message</Link>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="mt-5">
            <h5 className="font-bold">GET OFFICE INFO</h5>
            <div className=" contact-query">
              <div className="contact-location">
                <div>
                  <span>
                    <CiLocationOn />
                  </span>
                </div>
                <div>
                  <span>Aurai road, near railway crossing</span>
                  <br />
                  <span>Bhadohi 221401, U.P. India</span>
                </div>
              </div>
              <div className="contact-email">
                <div>
                  <span>
                    <TfiEmail />
                  </span>
                </div>
                <div>
                  <span>deepsingh@gmail.com</span>
                </div>
              </div>
              <div className="contact-phone">
                <div>
                  <span>
                    <BsTelephone />
                  </span>
                </div>
                <div>
                  <span> +91 9335140873</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Contact;
