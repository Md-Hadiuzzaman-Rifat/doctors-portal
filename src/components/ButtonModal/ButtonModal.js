import {
    FormControl,
    Input,
    InputLabel,
    MenuItem,
    Select
} from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import { SnackbarProvider, useSnackbar } from 'notistack';
import * as React from "react";


export function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const [justify, setJustify] = React.useState("flex-start");
  const [gender,setGender]=React.useState('')
  const { enqueueSnackbar } = useSnackbar();

  const handleChange = (event) => {
    setGender(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    enqueueSnackbar('Failed to Book');
    setOpen(false);
  };

  const handleConfirm=(variant)=>{
    enqueueSnackbar('Booking is Confirmed', {variant});
    setOpen(false)
  }

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Patient Details</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please provide the following information given bellow.
          </DialogContentText>
          <br />
          <label>Schedule:</label>
          <Input
            // autoFocus
            margin="dense"
            id="name"
            type="text"
            fullWidth
            variant="standard"
            value="123"
            sx={{ color: "text.secondary", fontWeight: "bold" }}
            readOnly
          />

          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Full Name"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="phone"
            label="Phone Number"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
          {/* Gender */}
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small">Gender</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={gender}
              label="Gender"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
              <MenuItem value="Others">Others</MenuItem>
            </Select>
          </FormControl>
          {/* Gender  */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={()=>handleConfirm("success")}>Fixed Appointment</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default function IntegrationNotistack() {
    return (
      <SnackbarProvider maxSnack={3}>
        <FormDialog/>
      </SnackbarProvider>
    );
  }