import React from "react";
import Layout from "../components/Layout/Layout.jsx";
import { useSearch } from "../context/SearchContext.jsx";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [values, setValues] = useSearch();
  const navigate = useNavigate();

  return (
    <>
      <Layout title={"Search results"}>
        <div className="container">
          <div className="text-center">
            <h2 className="text-center fw-bold mt-5">Search Resuts</h2>
            <h6>
              {values?.results.length < 1
                ? "No Products Found"
                : ` ${values?.results.length}`}{" "}
              <span className="fw-bold"> Product Found</span>
            </h6>
            <div className="d-flex flex-wrap mt-2">
              {values?.results.map((p) => (
                <div className="card m-2" style={{ width: "18rem" }}>
                  <img
                    src={`/api/v1/product/product-photo/${p._id}`}
                    className="card-img-top"
                    alt={p.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title m-1">
                      Product: <strong>{p.name} </strong>
                    </h5>
                    <p className="card-text">
                      <strong> Desc..</strong>
                      {p.description.substring(0, 30)}...
                    </p>
                    <p className="card-text">
                      {" "}
                      <span>&#8377;</span> {p.price}
                    </p>
                    <button class="btn btn-secondary ms-1">View Cart</button>
                    <button
                      class=" btn btn-primary ms-1"
                      onClick={() => navigate(`/product/${p.slug}`)}
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Search;
