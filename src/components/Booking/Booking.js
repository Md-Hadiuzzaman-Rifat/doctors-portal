import dayjs from "dayjs";
import React from 'react';
import BookingBody from "./BookingBody/BookingBody.js";
import BookingFooter from './BookingFooter/BookingFooter.js';
import BookingHeader from "./BookingHeader/BookingHeader";

const Booking = () => {
    const [value, setValue] = React.useState(dayjs("2023-04-07"));
    const days = [
        "Saturday",
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ];

    const date=` ${
        days[(value.$D - 1) % 7]
      }- ${value.$D}/${value.$M}/${value.$y}`
    return (
        <div>
            <BookingHeader value={value} setValue={setValue}></BookingHeader>
            <BookingBody value={date}></BookingBody>
            <BookingFooter></BookingFooter>
        </div>
    );
};

export default Booking;