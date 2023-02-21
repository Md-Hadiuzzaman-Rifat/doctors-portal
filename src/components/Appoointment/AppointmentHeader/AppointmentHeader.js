import { Box, Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import * as React from "react";
import bg from "../../../images/bg.png";
import Chair from "../../../images/chair.png";
import "./AppointmentHeader.css";

export default function AppointmentHeader() {
  let background = {
    backgroundImage: `url("${bg}"), radial-gradient(circle at 18.7% 37.8%, rgb(280, 280, 280) 0%, rgb(228, 234, 238) 90%)`,
    backgroundPosition: "center",
    overflow: "hidden",
    backgroundRepeat:"no-repeat"
  };
  
  return (
    <div>
      <div style={background}>
        <Container>
        <Grid
          container
          spacing={2}
          style={{
            height: "80vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid xs={4}>
            <div>
              <h2>Hello World..</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Explicabo facilis aliquam quisquam nisi, officiis enim saepe
                doloremque beatae et.
              </p>
            </div>
          </Grid>
          <Grid xs={8}>
            <img src={Chair} alt="" style={{ width: "80%" }} />
          </Grid>
        </Grid>
        </Container>
        </div>
      <div >
        <div className="grid">
        <Grid  className="grid_container">
            <Grid className="box" style={{margin:"0 5px", width:"28%"}} item xs={1} sm={4}>
              <h2>Hello Rashed</h2>
            </Grid>
            <Grid className="box" style={{margin:"0 5px", width:"28%"}}  item xs={1} sm={4}>
              <h2>Hello Rashed</h2>
            </Grid>
            <Grid className="box" style={{margin:"0 5px", width:"28%"}}  item xs={1} sm={4}>
              <h2>Hello Rashed</h2>
            </Grid>
          </Grid>
        </div>
        <Box sx={{width:"25%", mx:'auto', borderTop:4, borderColor:"primary.main", mt:10, mb:5}}></Box>
      </div>
    </div>
  );
}
