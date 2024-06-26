import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "../../../public/css/SlickSlider.css";
import axios from "axios";
import toast from "react-hot-toast";
import { Link, NavLink } from "react-router-dom";

const SlickSlider = () => {
  const [products, setProducts] = useState([]);
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

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div>
        <div className="homeCardSlider-top mt-5">
          <h2> Best Seller</h2>
          <p>Top view in the week</p>
        </div>

        <div style={{ backgroundColor: "rgb(233 233 233)" }}>
          <div
            className="slider-container "
            style={{ width: "95%", margin: "auto" }}
          >
            <Slider {...settings}>
              
                {products?.map((p) => (
                  <div className="homeCardSlider ">
                    <Link to={`/category/${p.category.slug}`}>
                      <img
                        src={`/api/v1/product/product-photo/${p._id}`}
                        className="card-img-top"
                        alt={p.name}
                      />{" "}
                      <NavLink
                        to={`/category/${p.category.slug}`}
                        className=" viewBtn"
                      >
                        View Products
                      </NavLink>
                    </Link>
                  </div>
                ))}
             

              {/* <div className="homeCardSlider">
                  <img
                    src="../../../public/images/Category/1.jpg"
                    alt="image"
                  />
                </div>
                <div className="homeCardSlider">
                  <img
                    src="../../../public/images/Category/1.jpg"
                    alt="image"
                  />
                </div>
                <div className="homeCardSlider">
                  <img
                    src="../../../public/images/Category/1.jpg"
                    alt="image"
                  />
                </div>
                <div className="homeCardSlider">
                  <img
                    src="../../../public/images/Category/1.jpg"
                    alt="image"
                  />
                </div>
                <div className="homeCardSlider">
                  <img
                    src="../../../public/images/Category/1.jpg"
                    alt="image"
                  />
                </div>
                <div className="homeCardSlider">
                  <img
                    src="../../../public/images/Category/1.jpg"
                    alt="image"
                  />
                </div>
                <div className="homeCardSlider">
                  <img
                    src="../../../public/images/Category/1.jpg"
                    alt="image"
                  />
                </div> */}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default SlickSlider;
