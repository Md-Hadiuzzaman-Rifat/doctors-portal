import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import bg from "../../../images/bg.png";
import chair from "../../../images/chair.png";
import Calendar from "../Calendar/Calendar";

const isWeekend = (date) => {
    const day = date.day();
  
    return day === 0 || day === 6;
  };

const BookingHeader = ({value,setValue}) => {
    // const [value, setValue] = React.useState(dayjs('2022-04-07'));

  let background = {
    backgroundImage: `url("${bg}"), radial-gradient(circle at 18.7% 37.8%, rgb(280, 280, 280) 0%, rgb(228, 234, 238) 90%)`,
    backgroundPosition: "center",
    overflow: "hidden",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div>
      <div style={background}>
        <Container>
          <Grid
            container
            spacing={4}
            style={{
              height: "80vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Grid item xs={6}>
                <Calendar value={value} setValue={setValue}></Calendar>
            </Grid>
            <Grid item xs={6}>
              <img src={chair} alt="" style={{ width: "100%" }} />
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default BookingHeader;
