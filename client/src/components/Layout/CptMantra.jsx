import React from "react";
import "../../../public/css/CarpetMantra.css";
import { Link } from "react-router-dom";

const CptMantra = () => {
  return (
    <>
      <div className="m-3 main-body">
        <div className="mantra">
          <div className="CptMantra">
            <div>
              <img
                src="../../../public/images/carpetMantra/carpetMantras.jpg"
                alt="img"
              />
            </div>
            <div>
              <h5 className="font-bold">
                Find your perfect area rugs with Modern Rugs
              </h5>
              <p>
                Presented here at Carpetmantra.com, are three generations of
                family expertise. With our roots established in past
                manufacturing all kind of handmade carpets, and our present
                firmly entrenched in the innovation of e-commerce,
                Carpetmantra.com is a pioneer in all kind of Hand knotted
                carpets marketplace.
              </p>{" "}
              <p>
                Being a manufacturer and selling directly online to end
                customers so savings are passed on directly to you .
              </p>
              <button className="btn-mantra">
                <a href="#" className="btn ">
                  ReadMore
                </a>
              </button>
            </div>
          </div>
        </div>

        {/* cards */}

        <h4 className="text-center m-0 p-0">Carpet Mantra Instagram</h4>
        <hr />
        <div className="cards">
          <div>
            <img
              src="../../../public/images/carpetMantra/blue-dart.jpg"
              alt=""
            />
          </div>

          <div>
            <img
              src="../../../public/images/carpetMantra/maestro-card.png"
              alt=""
            />
          </div>

          <div>
            <img src="../../../public/images/carpetMantra/cod.png" alt="" />
          </div>

          <div>
            <img
              src="../../../public/images/carpetMantra/payumoney.png"
              alt=""
            />
          </div>
          <div>
            <img src="../../../public/images/carpetMantra/mc.svg" alt="" />
          </div>
          <div>
            <img src="../../../public/images/carpetMantra/visa.svg" alt="" />
          </div>
          <div>
            <img
              src="../../../public/images/carpetMantra/Paypal-Logo.png"
              alt=""
            />
          </div>
        </div>
        <p className=" mantra-p text-center">
          Subscribe to Our Newsletter to get Important News, Amazing Offers:
        </p>

        <div className="mantra-form">
          <div>
            <form action="">
              <input type="text" required placeholder="Your email address" />
            </form>
          </div>
          <div>
            <button className="btn-mantra">
              <a href="#" className="btn ">
                SUBSCRIBE
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CptMantra;
