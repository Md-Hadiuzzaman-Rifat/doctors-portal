import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography
} from "@mui/material";
import React, { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import img from "../../images/login.png";

const Login = () => {

  const {loading,error,createUser}=useAuth()

  const [name,setName]=useState("")
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState("")
  const [confirmPassword,setConfirmPassword]=useState("")


  const handleSubmit = (e) => {
    e.preventDefault()
      if(password !== confirmPassword){
        return
      }else{
        createUser(name,email,password)
      }
  };

  return (
    <div>
      <Container>
        <Grid
          container
          spacing={2}
          style={{
            display: "flex",
            height: "100vh",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid item xs={6}>
            <Typography
              sx={{ color: "primary.main" }}
              variant="h4"
              fontWeight="bold"
            >
              Signup Form
            </Typography>
            <br /> <br />
            <form onSubmit={handleSubmit}>
              <Box sx={{ mb: 2 }}>
                <TextField
                  fullWidth
                  id="fullWidth"
                  label="Enter Name"
                  name="name"
                  onBlur={(e)=>setName(e.target.value)}
                  variant="standard"
                  required
                />
              </Box>
              <Box sx={{ mb: 2 }}>
                <TextField
                  fullWidth
                  id="fullWidth"
                  label="Enter Email"
                  name="email"
                  onBlur={(e)=>setEmail(e.target.value)}
                  variant="standard"
                  required
                />
              </Box>
              <Box sx={{ mb: 2 }}>
                <TextField
                  sx={{ width: 1 }}
                  fullWidth
                  id="fullWidth"
                  label="Password"
                  type="password"
                  name="password"
                  onBlur={(e)=>setPassword(e.target.value)}
                  variant="standard"
                  required
                />
              </Box>
              <Box sx={{ mb: 2 }}>
                <TextField
                  sx={{ width: 1 }}
                  fullWidth
                  id="fullWidth"
                  label="Confirm Password"
                  type="password"
                  name="confirmPassword"
                  onBlur={(e)=>setConfirmPassword(e.target.value)}
                  variant="standard"
                  required
                />
              </Box>
              <br />
              <Button variant="contained" type="submit">
                Submit
              </Button>
            </form>
          </Grid>

          <Grid item xs={6}>
            <img src={img} alt="Not found" style={{ width: "70%" }} />
          </Grid>

        </Grid>
        
      </Container>
    </div>
  );
};

export default Login;
