import { useState } from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      {/* <Link to="/moviedetails/:id">Movie Details</Link> */}
    </nav>
  );
}

export default Navbar;
