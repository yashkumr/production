import React, { useEffect, useState } from 'react'
import AdminLayout from '../../adminComponents/AdminLayout'
import axios from "axios";
import { Modal } from "antd";
import toast from "react-hot-toast";
import SizeForm from '../../components/Form/SizeForm';

const CreateSize = () => {
    
  const [sizes, setSizes] = useState([]);
  const [name, setName] = useState("");
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(null);
  const [updatedName, setUpdatedName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/v1/size/create-size", {
        name,
      });
      if (data?.success) {
        toast.success(`${name} is created successfully`);
        getAllSize();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong in size");
    }
  };
  //getAll size
  const getAllSize = async () => {
    try {
      const { data } = await axios.get("/api/v1/size/get-size");
      if (data?.success) {
        setSizes(data?.size);
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong in size");
    }
  };

  useEffect(() => {
    getAllSize();
  }, []);
  //update size
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(
        `/api/v1/size/update-size/${selected._id}`,
        {
          name: updatedName,
        }
      );

      if (data?.success) {
        toast.success(`${updatedName} is updated successfully`);
        setSelected(null);
        setUpdatedName("");
        setVisible(false);
        getAllSize();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong in size");
    }
  };

  // delete size
  const handleDelete = async (pId) => {
    try {
      const { data } = await axios.delete(
        `/api/v1/size/delete-size/${pId}`
      );

      if (data?.success) {
        toast.success("size Deleted successfully");
        getAllSize();
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong in delete categroy");
    }
  };
  return (
    <>
    <AdminLayout title={"Dashboard - create-size"}>
        <div className="container-fluid m-3 p-3 dashboard">
          <div className="row ">
            <div className="col-md-3"></div>
            <div className="col-md-9">
              <h2>Manage Size</h2>
              <div className="p-3 w-50">
                <SizeForm
                  handleSubmit={handleSubmit}
                  value={name}
                  setValue={setName}
                />
              </div>
              <div className="w-75">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sizes?.map((c) => (
                      <>
                        <tr>
                          <td key={c._id}>{c.name}</td>
                          <td>
                            <button
                              className="btn btn-primary ms-2"
                              onClick={() => {
                                setVisible(true);
                                setUpdatedName(c.name);
                                setSelected(c);
                              }}
                            >
                              Edit
                            </button>
                            <button
                              className="btn btn-danger ms-2"
                              onClick={() => {
                                handleDelete(c._id);
                              }}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      </>
                    ))}
                  </tbody>
                </table>
              </div>
              <Modal
                onCancel={() => setVisible(false)}
                footer={null}
                visible={visible}
              >
                <SizeForm
                  value={updatedName}
                  setValue={setUpdatedName}
                  handleSubmit={handleUpdate}
                />
              </Modal>
            </div>
          </div>
        </div>
      </AdminLayout>


    </>
  )
}

export default CreateSize