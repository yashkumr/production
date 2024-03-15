import React from "react";
import Header from "./Header.jsx";
import { Toaster } from "react-hot-toast";
import { Helmet } from "react-helmet";
import Footer from "./Footer";
import CptMantra from "./CptMantra.jsx";


const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <>
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="description" content={description} />
          <meta name="keywords" content={keywords} />
          <meta name="author" content={author} />
          <title>{title}</title>
        </Helmet>
      </div>
      <Header />
      <main style={{ minHeight: "50vh" }}>
        <Toaster />
        {children}
      </main>
      <CptMantra/>
      

      <Footer />
    </>
  );
};

Layout.defaultProps = {
  title: "carpetmantra-shop now",
  description: "welcome to carpetmantra",
  keywords: "top-product, trending-product",
  author: "DeepSingh",
};

export default Layout;
