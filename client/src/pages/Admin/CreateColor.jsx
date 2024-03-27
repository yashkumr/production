import React, { useEffect, useState } from "react";
import AdminLayout from "../../adminComponents/AdminLayout";
import ColorForm from "../../components/Form/ColorForm";
import axios from "axios";
import toast from "react-hot-toast";
import { Modal } from "antd";

const CreateColor = () => {
  const [color, setColor] = useState([]);
  const [name, setName] = useState("");
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(null);
  const [updateName, setUpdatedName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/v1/color/create-color", {
        name,
      });
      if (data?.success) {
        toast.success(`${name} is created successfully`);
        getAllColor();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Somethin went wrong in color");
    }
  };
  // get All color
  const getAllColor = async () => {
    try {
      const { data } = await axios.get("/api/v1/color/get-color");
      if (data?.success) {
        setColor(data?.color);
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong in color");
    }
  };
  useEffect(() => {
    getAllColor();
  }, []);

  //update color
  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.put(
        `/api/v1/color/update-color/${selected._id}`,
        {
          name: updateName,
        }
      );
      if (data?.success) {
        toast.success(`${updateName} is updated successfully`);
        setSelected(null);
        setUpdatedName("");
        setVisible(false);
        getAllColor();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong in color");
    }
  };

  //delete color
  const handleDelete = async (pId) => {
    try {
      const { data } = await axios.delete(`api/v1/color/delete-color/${pId}`);
      if (data?.success) {
        toast.success("color deleted successfully");
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong  color");
    }
  };
  return (
    <>
      <AdminLayout title={"Dashboard-create-color"}>
        <div className="container-fluid m-3 p-3 ">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-9">
              <h2>Manage Color</h2>
              <div className="p-3 w-50">
                <ColorForm
                  handleSubmit={handleSubmit}
                  value={name}
                  setValue={setName}
                />
              </div>
              <div className="w-75 ">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {color?.map((c) => (
                      <>
                        <tr>
                          <td key={c._id}> {c.name} </td>
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
                <ColorForm
                  value={updateName}
                  setValue={setUpdatedName}
                  handleSubmit={handleUpdate}
                />
              </Modal>
            </div>
          </div>
        </div>
      </AdminLayout>
    </>
  );
};

export default CreateColor;
