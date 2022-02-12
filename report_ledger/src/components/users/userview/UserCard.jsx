import React from "react";
import Grid from "@mui/material/Grid";
import HealthRecordCard from "../HealthRecordCard";
import Profile from "../Profile";
import "./usercard.css";

const UserCard = () => {
    return (
        <div className="usercard">
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <Profile />
                </Grid>
                <Grid item xs={8}>
                    <HealthRecordCard />
                </Grid>
            </Grid>
        </div>
    );
};

export default UserCard;
