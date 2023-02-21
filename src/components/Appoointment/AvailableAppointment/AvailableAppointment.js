import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import ButtonModal from "../../ButtonModal/ButtonModal";

const AvailableAppointment = ({ schedule }) => {
  return (
      <Grid item xs={2} sm={4} md={4}>
        <Box sx={{ boxShadow: 1, p: 4 }}>
          <Typography
            fontWeight="bold"
            variant="h6"
            sx={{ color: "primary.main" }}
          >
            {schedule.name}
          </Typography>
          <br />
          <Typography fontWeight="bold">{schedule.time}</Typography>
          <p>{schedule.title}</p>
          <br />

          <ButtonModal></ButtonModal>
        </Box>
      </Grid>
  );
};

export default AvailableAppointment;
