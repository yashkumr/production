import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout.jsx";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "../../public/css/CategoryProduct.css";
import { Button, Checkbox, Radio } from "antd";
import { IoIosArrowForward } from "react-icons/io";
import { FaRegCalendarCheck } from "react-icons/fa";
import { Prices } from "../components/extraComponent/Prices.jsx";

const CategoryProduct = () => {
  const params = useParams();
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);

  const [radio, setRadio] = useState([]);

  useEffect(() => {
    if (params?.slug) getPrductsByCat();
  }, [params?.slug]);

  const getPrductsByCat = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/product-category/${params.slug}`
      );

      setProducts(data?.products);
      setCategory(data?.category);
    } catch (error) {
      console.log(error);
    }
  };

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

  // filter by cat
  const handleFilter = (value, id) => {
    let all = [...checked];
    if (value) {
      all.push(id);
    } else {
      all = all.filter((c) => c !== id);
    }
    setChecked(all);
  };

  useEffect(() => {
    if (!checked.length || !radio.length) getPrductsByCat();
  }, [checked.length, radio.length]);

  useEffect(() => {
    if (checked.length || radio.length) filterProduct();
  }, [checked, radio]);

  //get filterd product
  const filterProduct = async () => {
    try {
      const { data } = await axios.post(`/api/v1/product/product-filters`, {
        checked,
        radio,
      });
      setFilterProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Layout>
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
                  {category?.name}
                  <span>
                    <IoIosArrowForward />
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink to="#">
                  products
                  <span>
                    <IoIosArrowForward />
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink to="#">Descrition</NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="cat-banner">
          <div className="banner-content">
            <h1 className="text-center"> {category?.name}</h1>
          </div>
          <div>
            <img src="../../public/images/Category/1.jpg" alt="banner" />
            <div className="offers-part">
              <p>
                <span>FLAT</span>
                <span>50%</span>
                <span>OFF</span>
              </p>
            </div>
          </div>
        </div>

        <div className="container mt-3 ">
          <h5 className="text-center">Category - {category?.name}</h5>
          <h6 className="text-center">{products?.length} result found </h6>
          <div className="row">
            <div className="col-md-2 d-flex flex-column">
              <h5 className="font-bw-normal">Filter By Categories</h5>
              <div className="d-flex flex-column">
                {categories?.map((c) => (
                  <Checkbox
                    key={c._id}
                    onChange={(e) => handleFilter(e.target.checked, c._id)}
                  >
                    {c.name}
                  </Checkbox>
                ))}
              </div>

              <h4 className="fw-normal mt-5">Filter By Price </h4>
              <div className="d-flex flex-column ">
                <Radio.Group onChange={(e) => setRadio(e.target.value)}>
                  {Prices?.map((p) => (
                    <div key={p._id} className="m-1">
                      <Radio value={p.array}>{p.name}</Radio>
                    </div>
                  ))}
                </Radio.Group>
              </div>

              <div
                className="d-flex flex-column mt-5"
                style={{ width: "14rem" }}
              >
                <button
                  className="btn btn-danger"
                  onClick={() => window.location.reload()}
                >
                  RESET FILTER
                </button>
              </div>
            </div>

            <div className="col-md-10">
              <div className="dProduct">
                {filterProducts?.map((p) => (
                  <>
                    <div className="card m-2" key={p._id}>
                      <img
                        src={`/api/v1/product/product-photo/${p._id}`}
                        className="card-img-top"
                        alt={p.name}
                      />
                      <div className="card-body">
                        <div className="card-name-price">
                          <h5 className="card-title m-1 p-1">{p.name}</h5>
                          <p className="card-title m-1 p-1 card-price">
                            <span>&#8377;</span> {p.price}
                          </p>
                        </div>
                        <p className="card-text ">
                          {p.description.substring(0, 60)}...
                        </p>
                        <div className="card-name-price">
                          <button
                            className="btn btn-info ms-1"
                            onClick={() => navigate(`/product/${p.slug}`)}
                          >
                            Buy Now
                          </button>
                          {/* <button
                      className="btn btn-dark ms-1"
                      onClick={() => {
                        setCart([...cart, p]);
                        localStorage.setItem(
                          "cart",
                          JSON.stringify([...cart, p])
                        );
                        toast.success("Item Added to cart");
                      }}
                    >
                      ADD TO CART
                    </button> */}
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </div>
              {/* getCategories */}
              <div className="dProduct">
                {products?.map((p) => (
                  <>
                    <div className="card m-2" key={p._id}>
                      <img
                        src={`/api/v1/product/product-photo/${p._id}`}
                        className="card-img-top"
                        alt={p.name}
                      />
                      <div className="card-body">
                        <div className="card-name-price">
                          <h5 className="card-title m-1 p-1">{p.name}</h5>
                          <p className="card-title m-1 p-1 card-price">
                            <span>&#8377;</span> {p.price}
                          </p>
                        </div>
                        <p className="card-text ">
                          {p.description.substring(0, 60)}...
                        </p>
                        <div className="card-name-price">
                          <button
                            className="btn btn-info ms-1"
                            onClick={() => navigate(`/product/${p.slug}`)}
                          >
                            Buy Now
                          </button>
                          {/* <button
                      className="btn btn-dark ms-1"
                      onClick={() => {
                        setCart([...cart, p]);
                        localStorage.setItem(
                          "cart",
                          JSON.stringify([...cart, p])
                        );
                        toast.success("Item Added to cart");
                      }}
                    >
                      ADD TO CART
                    </button> */}
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>

            {/* getColor */}

            {/* <div className="m-2 p-3">
              {products && products.length < total && (
                <button
                  className="btn btn-warning"
                  onClick={(e) => {
                    e.preventDefault();
                    setPage(page + 1);
                  }}
                >
                  {loading ? "Loading ..." : "Loadmore"}
                </button>
              )}
            </div> */}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default CategoryProduct;
