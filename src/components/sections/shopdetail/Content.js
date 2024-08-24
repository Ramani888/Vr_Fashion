import React, { Fragment } from "react";
import Shopinfo from "./Shopinfo";
import Shoprelated from "../../layouts/Shoprelated";

const Content = () => {
  // You can use useState here if you need local state

  return (
    <Fragment>
      <Shopinfo />
      <Shoprelated />
    </Fragment>
  );
};

export default Content;
