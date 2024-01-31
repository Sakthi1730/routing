import React from 'react';
import { Link } from 'react-router-dom';

function Headernav() {
  return (
    <div className="container d-flex justify-content-center">
        <Link to={"/"}>
        </Link>
        <Link to={"/Fsd"}>
        </Link>
        <Link to={"/Ds"} >
        </Link>
        <Link to={"/Cs"}>
        </Link>
        <Link to={"/Career"}>
        </Link>

    </div>
  )
}

export default Headernav