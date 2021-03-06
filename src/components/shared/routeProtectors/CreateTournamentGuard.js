import React from "react";
import { Redirect } from "react-router-dom";

export const CreateTournamentGuard = props => {
    if (localStorage.getItem("ManagerID") && localStorage.getItem("token")){
        return props.children;
    }
    return <Redirect to={"/home"} />;
};