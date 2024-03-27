import React, { useState, useEffect } from "react";
import { Button, Checkbox, Radio } from "antd";
import Layout from "../components/Layout/Layout.jsx";
import "../../public/css/Home.css";
import axios from "axios";
import toast from "react-hot-toast";
import { NavLink, useNavigate } from "react-router-dom";

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  //get all cat
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get("/api/v1/category/get-category");
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  
  //getall products
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get("/api/v1/product/get-product");
      setProducts(data.products);
    } catch (error) {
      console.log(error);
      toast.error("Someething Went Wrong");
    }
  };

  //lifecycle method
  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <>
      <Layout>
        <div>
          <div
            id="carouselExampleFade"
            className="carousel slide carousel-fade"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="../../../public/images/Home/carousel.jpg"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="../../../public/images/Home/carousel2.jpg"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        {/* fress support price */}
        <div className="fress">
          <div>
            <img src="../../../public/images/Home/carLogo.png" alt="" />
            <div>
              <span>Free Shipping</span>
              <br />
              <span>enjoy free and fast delivery</span>
            </div>
          </div>{" "}
          <div>
            <img src="../../../public/images/Home/cartLogo2.png" alt="" />
            <div>
              <span>Support 24/7</span>
              <br />
              <span>contact us 24 hours a day</span>
            </div>
          </div>{" "}
          <div>
            <img src="../../../public/images/Home/cartLogo3.png" alt="" />
            <div>
              <span>Low Price Commitment</span>
              <br />
              <span>daily sales mean you always save</span>
            </div>
          </div>{" "}
          <div>
            <img src="../../../public/images/Home/cartLogo4.png" alt="" />
            <div>
              <span>100% Payment Secure</span>
              <br />
              <span>we ensure secure payment</span>
            </div>
          </div>
        </div>

        {/*end fress support price */}

        {/* dynamic products */}
        <div>
          <h2 className=" d-heading">
            Rugs For Sale Online with Free Delivery
          </h2>
        </div>
        <div className="dProduct mt-3">
          {products?.map((p, id) => (
            <div className="d-item" key={p._id}>
              <div className="imageWrapper">
                <img
                  src={`/api/v1/product/product-photo/${p._id}`}
                  className="d-img"
                  alt={p.name}
                />
                <div className="caption">
                  <h5 className="">{p.name}</h5>
                  <p className=" ">{p.description.substring(0, 45)}...</p>
                </div>
                <div className="masking">
                  <NavLink
                    to={`/category/${p.category.slug}`}
                    className=" viewBtn"
                  >
                    {" "}
                    View Products
                  </NavLink>
                </div>
              </div>

              {/* <div className="card-body">
              
                <div className="card-name-price">
                  <button
                      className="btn btn-info ms-1"
                      onClick={() => navigate(`/product/${p.slug}`)}
                    >
                      More Details
                    </button>
                  <Button className="dynamic-button">
                    <NavLink to={`/product/${p.slug}`} className="  ">
                      View Products
                    </NavLink>
                  </Button>
                </div>
              </div> */}
            </div>
          ))}
        </div>
        {/* end dynamic products */}
      </Layout>
    </>
  );
};

export default Home;
