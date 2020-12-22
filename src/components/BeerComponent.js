import React, { useState } from "react";

const BeerComponent = ({ image_url, name, description }) => {
  const [bookmarked, setBookmarked] = useState(false);

  const fetchdes = (data) => data.substring(0, 110) + "...";
  const controlBookmark = () => {
    if (bookmarked) {
      setBookmarked(!bookmarked);
      alert("Item has been removed");
    } else {
      setBookmarked(!bookmarked);
      alert("Item has been added");
    }
  };

  let cl = "far fa-star icon";
  bookmarked === true ? (cl = "fas fa-star icon") : (cl = "far fa-star icon");
  return (
    <div className="beer">
      <i onClick={() => controlBookmark()} className={cl}></i>
      <img src={image_url} alt="" />
      <div className="description">
        <h3 className="title">{name.toString()}</h3>
        <p>{fetchdes(description.toString())}</p>
      </div>
    </div>
  );
};

export default BeerComponent;
