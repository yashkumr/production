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
const Header = () => {
  const [auth, setAuth] = useAuth();
  
  const [values, setValues] = useSearch();

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
              <ul className="navbar-nav m-auto mb-2 mb-lg-0 carpent-head">
                <li className="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Category
                  </a>
                  <div className="mega-box">
                    <div className="content">
                      <div className="row">
                        <ul className="mega-links">
                          <li>
                            <a href="#">ShAGGY & FUR RUGS</a>
                          </li>
                          <hr />
                          <li>
                            <a href="#">IRANIA</a>
                          </li>
                          <hr />
                          <li>
                            <a href="#">Drop menu3</a>
                          </li>
                          <hr />
                          <li>
                            <a href="#">Drop menu4</a>
                          </li>
                        </ul>
                        <hr />
                      </div>
                      <div className="row">
                        <ul className="mega-links">
                          <li>
                            <a href="#">ROUND</a>
                          </li>
                          <hr />
                          <li>
                            <a href="#">RUNNER</a>
                          </li>
                          <hr />
                          <li>
                            <a href="#">ORIENTAL RUG</a>
                          </li>
                          <hr />
                          <li>
                            <a href="#">JUTE RUG</a>
                          </li>
                        </ul>
                        <hr />
                      </div>

                      <div className="row">
                        <ul className="mega-links">
                          <li>
                            <a href="#">TRANSITION</a>
                          </li>
                          <hr />
                          <li>
                            <a href="#">RUG</a>
                          </li>
                          <hr />
                          <li>
                            <a href="#">ABSTRUCT</a>
                          </li>
                          <hr />
                          <li>
                            <a href="#">HAND WOMEN</a>
                          </li>
                          <hr />
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Color
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Size
                  </a>
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
