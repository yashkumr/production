import React from "react";
import { FaRegUser, FaRegUserCircle, FaProductHunt } from "react-icons/fa";

const SideNav = () => {
  return (
    <>
      <div className="">
        {/* Main Sidebar Container */}
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
          {/* Brand Logo */}
          <a href="#  " className="brand-link">
            <img
              src="../../public/dist/img/AdminLTELogo.png"
              alt="AdminLTE Logo"
              className="brand-image img-circle elevation-3"
              style={{ opacity: ".8" }}
            />
            <span className="brand-text font-weight-light">CarpetMantra</span>
          </a>
          {/* Sidebar */}
          <div className="sidebar">
            {/* Sidebar user panel (optional) */}
            <div className="user-panel mt-3 pb-3 mb-3 d-flex">
              <div className="image">
                <img
                  src="../../public/dist/img/user2-160x160.jpg"
                  className="img-circle elevation-2"
                  alt="User Image"
                />
              </div>
              <div className="info">
                <a href="#" className="d-block">
                  DeepSingh
                </a>
              </div>
            </div>
            {/* SidebarSearch Form */}
            <div className="form-inline">
              <div className="input-group" data-widget="sidebar-search">
                <input
                  className="form-control form-control-sidebar"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <div className="input-group-append">
                  <button className="btn btn-sidebar">
                    <i className="fas fa-search fa-fw" />
                  </button>
                </div>
              </div>
            </div>
            {/* Sidebar Menu */}
            <nav className="mt-2">
              <ul
                className="nav nav-pills nav-sidebar flex-column"
                data-widget="treeview"
                role="menu"
                data-accordion="false"
              >
                <li className="nav-item menu-open">
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <a href="/dashboard/admin" className="nav-link ">
                        <i className="far fa-circle nav-icon" />
                        <p>Admin Dashboard</p>
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="nav-item">
                  <a
                    href="/dashboard/admin/create-category"
                    className="nav-link"
                  >
                    <span className="p-2">
                      <FaProductHunt />{" "}
                    </span>
                    <p>Create Category</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="/dashboard/admin/create-color"
                    className="nav-link"
                  >
                    <span className="p-2">
                      <FaProductHunt />{" "}
                    </span>
                    <p>Create Color</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/dashboard/admin/create-size" className="nav-link">
                    <span className="p-2">
                      <FaProductHunt />{" "}
                    </span>
                    <p>Create Size</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="/dashboard/admin/create-product"
                    className="nav-link"
                  >
                    <span className="p-2">
                      <FaProductHunt />{" "}
                    </span>
                    <p>Create Products</p>
                  </a>
                </li>

                <li className="nav-item">
                  <a href="/dashboard/admin/products" className="nav-link">
                    <span className="p-2">
                      <FaProductHunt />{" "}
                    </span>
                    <p>Products</p>
                  </a>
                </li>
                
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <span className="p-2">
                      <FaProductHunt />{" "}
                    </span>
                    <p>Update Products</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <span className="p-2">
                      {" "}
                      <FaRegUser />
                    </span>
                    <p>All Users</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <span className="p-2">
                      <FaRegUserCircle />
                    </span>
                    <p>Admin Profile</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="admin/orders" className="nav-link">
                    <span className="p-2">
                      <FaRegUserCircle />
                    </span>
                    <p>All Orders</p>
                  </a>
                </li>
              </ul>
            </nav>
            {/* /.sidebar-menu */}
          </div>
          {/* /.sidebar */}
        </aside>
      </div>
    </>
  );
};

export default SideNav;
