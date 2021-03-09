import React from "react";
import Routes from "./routes";
import Header from "./modules/shared/header";
import "./styles/scss/main.scss";

const  App = () => {

    return (
        <React.Fragment>
            <Header />
            <Routes />
        </React.Fragment>
    )
}

export default App;
