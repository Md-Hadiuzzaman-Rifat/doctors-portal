import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import AvailableAppointment from "../../Appoointment/AvailableAppointment/AvailableAppointment";

const BookingBody = ({value}) => {

  const schedule=[
    {
      name:"Root Caning",
      time:"8.00 AM - 9.00 AM",
      title:'specialized Doctor'
    },
    {
      name:"Root Caning",
      time:"9.00 AM - 10.00 AM",
      title:'specialized Doctor'
    },
    {
      name:"Root Caning",
      time:"10.00 AM - 11.00 AM",
      title:'specialized Doctor'
    },
    {
      name:"Root Caning",
      time:"11.00 AM - 12.00 PM",
      title:'specialized Doctor'
    },
    {
      name:"Root Caning",
      time:"12.00 PM - 1.00 AM",
      title:'specialized Doctor'
    },
    {
      name:"Root Caning",
      time:"1.00 PM - 2.00 PM",
      title:'specialized Doctor'
    }
  ]

  return (
    <Container sx={{mb:10}}>
      <div style={{ marginTop: "100px" }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{ color: "primary.main" }}
        >
          Available Appointment on:  {value}
        </Typography>
      </div>
      <Grid style={{marginTop:'40px'}} container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {
          schedule.map((time,index)=><AvailableAppointment key={index} schedule={time}/>)
        }
      </Grid>
    </Container>
  );
};

export default BookingBody;
