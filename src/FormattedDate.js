import React from "react";

export default function FormattedDate(props) {
    //console.log(props.date)
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[props.date.getDay()];
    let hours = props.date.getHours();
    let minutes = props.date.getMinutes();

    // add 0 infront of hours (ex. 01, 02)
    if (hours < 10) {
        hours = `0${hours}`;
    }

    // add 0 infront of minutes (ex. 01, 02)
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    return <div>{day} {hours}:{minutes}</div>
}