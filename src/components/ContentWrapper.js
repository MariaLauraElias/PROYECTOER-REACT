import React from "react";
import Main from "./Main";
import CardContainer from "./CardContainer";
import Footer from "./Footer";

function ContentWrapper() {
  return(
    <div id="content-wrapper" className="d-flex flex-column">
      <div id="content">
        <Main />
        <CardContainer />
        <Footer />
      </div>
    </div>
  )
};

export default ContentWrapper;