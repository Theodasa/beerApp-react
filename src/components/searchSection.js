import React from "react";

function searchSection(props) {
  let searchTerm = React.createRef();

  return (
    <div className="search">
      <input ref={searchTerm} placeholder="search for beer..." type="text" />
      <button
        onClick={(e) => {
          e.preventDefault();
          props.searchBeer(searchTerm.current.value);
        }}
      >
        Search
      </button>
    </div>
  );
}

export default searchSection;
