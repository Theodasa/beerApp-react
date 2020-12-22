import React from "react";

function Header(props) {
  return (
    <div className="nav">
      <div onClick={() => props.loadBeers()} className="logo">
        Goldberg
      </div>
      <ul>
        <li>Home</li>
        <li>Favourite</li>
      </ul>
    </div>
  );
}

export default Header;
