import { Button, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import cavity from "../../../images/cavity.png";
import doctor from "../../../images/doctor-small.png";
import fluoride from "../../../images/fluoride.png";
import treatment from "../../../images/treatment.png";
import whitening from "../../../images/whitening.png";

const AppointmentBody = () => {
  return (
    <div>
      <Container>
        <section>
          <Typography variant="h4" fontWeight="bold" sx={{ mb: 14 }}>
            Services We Provide
          </Typography>
          <Grid
            container
            rowSpacing={1}
            sx={{ mb: 10 }}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={4}>
              <img src={cavity} alt="" />
              <h3>Hello World</h3>
              <Typography>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus, quis tempora. Tenetur harum.
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <img src={fluoride} alt="" />
              <h3>Hello World</h3>
              <Typography>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus, quis tempora. Tenetur harum.
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <img src={whitening} alt="" />
              <h3>Hello World</h3>
              <Typography>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus, quis tempora. Tenetur harum.
              </Typography>
            </Grid>
          </Grid>
        </section>
        <section style={{ marginTop: "150px" }}>
          <Grid
            container
            rowSpacing={4}
            sx={{ mb: 10 }}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={5}>
              <img src={treatment} alt="" style={{ width: "90%" }} />
            </Grid>
            <Grid item xs={7}>
              <Typography variant="h4" fontWeight="bold" sx={{ mb: 8 }}>
                Lorem ipsum dolor sit amet.
              </Typography>
              <Typography sx={{ mb: 4 }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                suscipit nostrum eius dicta adipisci, quidem reprehenderit
                autem. Rem, rerum modi voluptates, commodi ducimus cumque
                facilis, soluta iure possimus dignissimos repudiandae. Lorem,
                ipsum dolor sit amet consectetur adipisicing elit. Magni,
                nostrum!
              </Typography>
              <Button variant="contained" color="primary">
                Learn More
              </Button>
            </Grid>
          </Grid>
        </section>
      </Container>
      <section
        style={{
          backgroundColor: "gray",
          height: "20rem",
          marginBottom:"100px",
          marginTop:"200px"
        }}
      >
        <Grid container rowSpacing={4}>
            <Grid item xs={5}>
                <img src={doctor} alt="" style={{height:"70%", marginTop:"-100px"}} />
            </Grid>
            <Grid item xs={7}>
                <Typography sx={{textAlign:'start'}} color="white">Lorem, ipsum.</Typography>
                <Typography sx={{textAlign:'start'}} color="white" variant='h3'>Lorem ipsum dolor sit amet consectetur.</Typography>
                <Typography sx={{textAlign:'start'}} color="white">Lorem ipsum dolor sit amet consectetur. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod voluptatum excepturi maiores. Reiciendis voluptas veritatis aperiam recusandae repellendus, vitae facere?</Typography>

            </Grid>
        </Grid>
      </section>
    </div>
  );
};

export default AppointmentBody;
