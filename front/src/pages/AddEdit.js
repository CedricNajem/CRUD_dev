import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import "./AddEdit.css";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

const initialState = {
  name: "",
  email: "",
  contact: "",
};

const AddEdit = () => {
  const [state, setState] = useState(initialState);

  const { name, email, contact } = state;

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getSingleUser(id);
    }
  }, [id]);

  const getSingleUser = async (id) => {
    const response = await axios.get(`http://localhost:3000/user/${id}`);
    if (response.status === 200) {
      setState({ ...response.data[0] });
    }
  };

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const addUser = async (data) => {
    const response = await axios.post("http://localhost:3000/user", data);
    if (response.status === 200) {
      toast.success(response.data);
    }
  };

  const updateUser = async (data, id) => {
    const response = await axios.put(`http://localhost:3000/user/${id}`, data);
    if (response.status === 200) {
      toast.success(response.data);
    }
  };

  const handleSubmit = (e) => {
    e.prevnetDefault();
    if (!name || !email || !contact) {
      toast.error("Please fill all the fields");
    } else {
      if (!id) {
        addUser(state);
      } else {
        updateUser(state, id);
      }
      setTimeout(() => navigate.push("/"), 500);
    }
  };

  return (
    <div style={{ marginTop: "100px" }}>
      <form
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignCenter: "center",
        }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Jon Doe"
          onChange={handleInputChange}
          value={name}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="jondoe@gmail.com"
          onChange={handleInputChange}
          value={email}
        />
        <label htmlFor="contact">Contact</label>
        <input
          type="number"
          id="contact"
          name="contact"
          placeholder="0615151515"
          onChange={handleInputChange}
          value={contact}
        />
        <input type="submit" value={id ? "Update" : "Add"} />
      </form>
    </div>
  );
};

export default AddEdit;
