import React from "react";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">Readact</div>
      <div className="credential">
        <button className="login">Login</button>
        <button className="free-trial">Free Trial</button>
      </div>
    </div>
  );
}

export default Navbar;
