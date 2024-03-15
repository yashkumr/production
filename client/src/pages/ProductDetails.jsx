import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import { useNavigate, useParams, Link, NavLink } from "react-router-dom";
import axios from "axios";
import "../../public/css/ProductDetails.css";
import { IoIosArrowForward } from "react-icons/io";
import { FaRegCalendarCheck } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cartSlice";

const ProductDetails = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);

  const items = useSelector((state) => state.allCart.items);

  const dispatch = useDispatch();

  //initalp details
  useEffect(() => {
    if (params?.slug) getProduct();
  }, [params?.slug]);
  //getProduct
  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/get-product/${params.slug}`
      );
      setProduct(data?.product);
      getSimilarProduct(data?.product._id, data?.product.category._id);
    } catch (error) {
      console.log(error);
    }
  };
  //get similar product
  const getSimilarProduct = async (pid, cid) => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/related-product/${pid}/${cid}`
      );
      setRelatedProducts(data?.products);
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
                <NavLink to="/">
                  Home
                  <span>
                    <IoIosArrowForward />
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink>
                  {product.name}
                  <span>
                    <IoIosArrowForward />
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink>
                  {product?.category?.name}
                  <span>
                    <IoIosArrowForward />
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink>{product?.description}</NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="  product-details">
          <div className="">
            <img
              src={`/api/v1/product/product-photo/${product._id}`}
              alt={product.name}
            />
          </div>
          <div className="product-details-info">
            <h3 className="text-center">Product Details</h3>
            <hr />
            <p>
              <span>Name : </span> {product.name}
            </p>
            <p>
              <span> Description :</span> {product.description}
            </p>
            <p>
              <span> Price :</span> {product?.price}
            </p>
            <p>
              <span> Category : </span> {product?.category?.name}
            </p>
            <p>
              <h6>
                <strong> Avilable Offers:</strong>
              </h6>
              <span className="right-emi">
                <img src="../../public/images/Logo/emiLogo.png" />
              </span>
              EMI is available with all leading banks powered by PayUMoney
              payment gateway.
            </p>
            <hr style={{ color: "red", background: "red" }} />
            <div>
              <button className="viewbtn mt-1" onClick={() => dispatch(addToCart(product)) && navigate('/product/checkout') }>ADD TO CART</button>
            </div>
          </div>
        </div>

        {/* similar products */}
        <hr />
        <div className=" similar-products">
          <h4 className="text-center m-5">Similar Products ➡️</h4>
          {relatedProducts.length < 1 && (
            <p className="text-center">No Similar Products found</p>
          )}
          <div className="similar-products-main">
            {relatedProducts?.map((p) => (
              <div className="card m-2" key={p._id}>
                <img
                  src={`/api/v1/product/product-photo/${p._id}`}
                  className="card-img-top"
                  alt={p.name}
                />
                <div className="card-body">
                  <h3 className="card-title m-2">
                    <strong> Product : </strong>
                    {p.name}
                  </h3>
                  <p className="card-title card-price m-2">
                    <span>&#8377;</span> {p.price}
                  </p>

                  <p className="card-text  m-2">
                    {" "}
                    <strong> About Products : </strong>
                    {p.description.substring(0, 60)}...
                  </p>

                  <div className="card-name-price">
                    <p>
                      <h6>
                        <strong> Avilable Offers:</strong>
                      </h6>
                      <span className="right-emi m-1">
                        <img src="../../public/images/Logo/emiLogo.png" />
                      </span>
                      EMI is available with all leading banks powered by
                      PayUMoney payment gateway.
                    </p>
                    <button
                      className="viewbtn"
                      onClick={() => navigate(`/product/${p.slug}`)}
                    >
                      More Details
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
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ProductDetails;
