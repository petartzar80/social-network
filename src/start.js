import React from "react";
import ReactDOM from "react-dom";

import Welcome from "./welcome";

//use the url to determine if the user is logged in
const userIsLoggedIn = location.pathname != "/welcome";

const provisoryImg = {
    width: "150px",
    height: "150px"
};

let elem;
if (!userIsLoggedIn) {
    elem = <Welcome />;
} else {
    elem = (
        <img
            style={provisoryImg}
            src="https://www.logolynx.com/images/logolynx/0a/0a6d1bda65baddebe16baeba09e18bcb.jpeg"
        />
    );
}

ReactDOM.render(elem, document.querySelector("main"));
