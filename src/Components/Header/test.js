import React from 'react';
import List from "../List/index (1)";
import Header from "./index";
import Nav from "../Nav";

const Test = ({setProduct , product}) => {
    return (
        <div>
          <Header/>
          <Nav product={product}/>
          <List setProduct={setProduct} product={product}/>
        </div>
    );
};

export default Test;