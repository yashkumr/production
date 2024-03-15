import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import AdminLayout from "../../adminComponents/AdminLayout";
import { useAuth } from "../../context/Auth";
const { Option } = Select;
import moment from "moment";
import { Select } from "antd";

const AdminOrders = () => {
  const [status, setStatus] = useState([
    "Not Process",
    "Processing",
    "Shipped",
    "Delivered",
    "Cancel",
  ]);
  const [changeStatus, setChangeStatus0] = useState("");
  const [orders, setOrders] = useState([]);
  const [auth, setAuth] = useAuth();

  const getOrders = async () => {
    try {
      const { data } = await axios.get("/api/v1/auth/all-orders");
      setOrders(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (auth?.token) getOrders();
  }, [auth?.token]);

  const handleChange = async (orderId, value) => {
    try {
      const { data } = await axios.put(`/api/v1/auth/order-status/${orderId}`, {
        status: value,
      });
      getOrders();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <AdminLayout title={"All Orders Data"}>
        <div className="container">
          <div className="row  mt-3  dashboard">
            <div className="col-md-2 mt-5 ">{/* <AdminMenu /> */}</div>
            <div className="col-md-10  ">
              <h1 className="text-center">All Orders</h1>
              {orders?.map((o, i) => {
                // console.log(o);

                return (
                  <div className="border shadow">
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Status</th>
                          <th scope="col">Buyer</th>
                          <th scope="col"> date</th>

                          <th scope="col">Quantity</th>
                          <th scope="col">Payment</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>{i + 1}</td>
                          <td>
                            <Select
                              bordered={false}
                              onChange={(value) => handleChange(o._id, value)}
                              defaultValue={o?.status}
                            >
                              {status.map((s, i) => (
                                <Option key={i} value={s}>
                                  {s}
                                </Option>
                              ))}
                            </Select>
                          </td>
                          <td>
                            {o?.buyer?.map((b, i) => (
                              <div key={b._id}>{b.name}</div>
                            ))}
                          </td>
                          <td>{moment(o.createdAt).fromNow()}</td>
                          <td>{o?.products?.length}</td>
                          <td>success</td>
                          {/* <td>{o?.payment.success ? "Success" : "Failed"}</td>  */}
                        </tr>
                      </tbody>
                    </table>
                    <div className="container ">
                      {o?.products?.map((p, i) => (
                        <div className="row mb-2 p-3 card flex-row" key={p._id}>
                          <div className="col-md-4">
                            <img
                              src={`/api/v1/product/product-photo/${p._id}`}
                              className="card-img-top"
                              alt={p.name}
                              width="95px"
                              height={"95px"}
                            />
                          </div>
                          <div className="col-md-8">
                            <p>
                              {" "}
                              <strong style={{ fontSize: "13px" }}>
                                {" "}
                                {p.name}
                              </strong>
                            </p>
                            <p>
                              About:{" "}
                              <strong style={{ fontSize: "13px" }}>
                                {p.description.substring(0, 30)}{" "}
                              </strong>
                            </p>
                            <p>
                              Price :{" "}
                              <strong style={{ fontSize: "13px" }}>
                                {p.price}{" "}
                              </strong>
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </AdminLayout>
    </>
  );
};

export default AdminOrders;
