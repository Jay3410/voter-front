import React, { useState, useRef, useEffect } from "react";
import { Container, Typography, TextField, Button } from "@material-ui/core";
import axios from "../utils/axios";

const Register = props => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [img, setImg] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("img", img);
    formData.append("name", name);
    formData.append("address", address);
    axios
      .post("/voter/register", formData, {})
      .then(({ data }) => {
        if (data.success) {
          props.history.push("/");
        }
      })
      .catch(console.log);
  };

  return (
    <>
      <Container maxWidth="xs" style={{ padding: "30px 50px" }}>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <Typography align="center" variant="h5" color="primary">
            Register page
          </Typography>
          <TextField
            value={name}
            onChange={e => setName(e.target.value)}
            variant="outlined"
            label="Full Name"
            placeholder="john doe"
            fullWidth
            required
          />
          <TextField
            value={address}
            onChange={e => setAddress(e.target.value)}
            variant="outlined"
            label="Address"
            placeholder="Area"
            fullWidth
            required
          />

          <input
            type="file"
            accept="image/jpeg"
            name="img"
            required
            onChange={e => setImg(e.target.files[0])}
          />

          <Button
            onClick={handleSubmit}
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
          >
            create
          </Button>
        </form>
      </Container>
    </>
  );
};

export default Register;
