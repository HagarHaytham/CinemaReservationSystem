import React, { Component, View } from "react";
import Seatmap from 'react-seatmap';
import "../css/Login.css";


React.render(
    <Seatmap rows={rows} maxReservableSeats={3} alpha />,
    document.getElementById('app')
);