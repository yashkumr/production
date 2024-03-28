import React, { useEffect } from "react";
import "../../../public/css/Header.css";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaMessage } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { FaUser, FaHeart, FaCartPlus } from "react-icons/fa";
import { useAuth } from "../../context/Auth.jsx";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../../features/cartSlice.jsx";
import { useSearch } from "../../context/SearchContext.jsx";
import axios from "axios";
import useCategory from "../../hooks/useCategory.jsx";
import useColor from "../../hooks/useColor.jsx";
import useSize from "../../hooks/useSize.jsx";

const Header = () => {
  const [auth, setAuth] = useAuth();
  const [values, setValues] = useSearch();

  const categories = useCategory();
  const colors = useColor();
  const sizes = useSize();

  const navigate = useNavigate();

  const { cart, totalQuantity } = useSelector((state) => state.allCart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
  };

  // searchform
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(
        `/api/v1/product/search/${values.keyword}`
      );
      setValues({ ...values, results: data });
      navigate("/search");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {/* topBar */}
      <div className="topbar-header">
        <div className="logo">
          <NavLink>
            <span>
              <BsFillTelephoneFill /> +91 97942 21807
            </span>
            <span>
              <FaMessage /> sales@carpetmantra.com
            </span>
          </NavLink>
        </div>
        <div className="search">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={values.keyword}
              onChange={(e) =>
                setValues({ ...values, keyword: e.target.value })
              }
              placeholder="are you searching for someting?"
            />
            <span className="input-icon">
              <button className="" type="submit">
                <CiSearch />{" "}
              </button>{" "}
            </span>
          </form>
        </div>

        <div className="topbar-blog d-flex flex-wrap">
          <NavLink to="/about">ABOUT</NavLink>
          <NavLink>BLOG</NavLink>
          <NavLink to="/contact">CONTACT</NavLink>
        </div>
      </div>
      <div className="links"></div>
      {/* end topbar */}
      {/* navbar */}
      <div>
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container wrapper">
            <a className="navbar-brand" href="/">
              <img
                src="../../../public/images/Logo/logo_1.png"
                style={{ width: "100px", margin: "auto" }}
              />
            </a>
            <button
              className="navbar-toggler "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon border-none" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav m-auto mb-2 mb-lg-0 carpent-head ">
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle t"
                    to={"#"}
                    data-bs-toggle="dropdown"
                    style={{ fontSize: "14px" }}
                  >
                    Categories
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to={"/categories"}>
                        All Categories
                      </Link>
                    </li>
                    {categories?.map((c) => (
                      <li>
                        <Link
                          className="dropdown-item"
                          to={`/category/${c.slug}`}
                        >
                          {c.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle "
                    to={"#"}
                    data-bs-toggle="dropdown"
                    style={{ fontSize: "14px" }}
                  >
                    Color
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to={"/colors"}>
                        All Color
                      </Link>
                    </li>
                    {colors?.map((cl) => (
                      <li>
                        <Link
                          className="dropdown-item"
                          to={`/color/${cl.slug}`}
                        >
                          {cl.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle "
                    to={"#"}
                    data-bs-toggle="dropdown"
                    style={{ fontSize: "14px" }}
                  >
                    Sizes
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to={"/sizes"}>
                        All Sizes
                      </Link>
                    </li>
                    {sizes?.map((si) => (
                      <li>
                        <Link className="dropdown-item" to={`/size/${si.slug}`}>
                          {si.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Price
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link active"
                    aria-current="page"
                    href="/contact"
                  >
                    Custom
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Wall to Wall
                  </a>
                </li>
              </ul>
              <div className="d-flex head-icon flex-wrap">
                {!auth?.user ? (
                  <>
                    <div className="m-2 sign-in">
                      <FaRegUser />
                      <div className="sign-mega-box">
                        <div className="sign-content">
                          <div className="row">
                            <ul className="sign-mega-links">
                              <li>
                                <a href="/login">My Account</a>
                              </li>
                              <hr />
                              <li>
                                <a href="/register">Create Account</a>
                              </li>
                              <hr />
                              <li>
                                <a href="/login">SignIn</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <li className="nav-item dropdown  dynamic-name">
                      <NavLink
                        className="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        style={{ border: "none" }}
                      >
                        {auth?.user?.name}
                      </NavLink>
                      <ul className="dropdown-menu">
                        <li>
                          <NavLink
                            to={`/dashboard/${
                              auth?.user?.role === 1 ? "admin" : "user"
                            }`}
                            className="dropdown-item"
                          >
                            Dashboard
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            onClick={handleLogout}
                            to="/login"
                            className="dropdown-item"
                          >
                            Logout
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                  </>
                )}

                <div className="m-2">
                  <FaRegHeart />
                </div>
                <div className="m-2">
                  <Link to="/cart">
                    {" "}
                    <FaCartPlus /> <span> ({totalQuantity})</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* end navbar */}
    </>
  );
};

export default Header;
