import React from "react";

function Header(props) {
  return (
    <div className="nav">
      <div onClick={() => props.loadBeers()} className="logo">
        Beans Love Beer
      </div>
      <ul>
        <li>Home</li>
        <li>Favourite</li>
      </ul>
    </div>
  );
}

export default Header;
