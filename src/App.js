import React, { useEffect, useState } from "react";
import "./index.css";
import Header from "./components/Header";
import SearchSection from "./components/searchSection";
import BeerComponent from "./components/BeerComponent";

function App() {
  useEffect(() => {
    loadBeers();
  }, []);
  const [beers, setBeer] = useState([]);

  const loadBeers = async () => {
    await fetch("https://api.punkapi.com/v2/beers?per_page=6")
      .then(function (response) {
        return response.json();
      })
      .then(function (arr) {
        setBeer(arr);
      });
  };

  const searchBeer = (searchTerm) => {
    if (
      searchTerm.toString() === null ||
      searchTerm.toString().match(/^ *$/) !== null
    ) {
      alert("Search cannot be empty");
      return;
    }
    fetch(
      "https://api.punkapi.com/v2/beers?per_page=6&beer_name=" +
        searchTerm.toString()
    )
      .then(function (response) {
        return response.json();
      })
      .then((beer) => setBeer(beer));
  };
  return (
    <>
      <Header loadBeers={loadBeers} />
      <SearchSection searchBeer={searchBeer} />
      <div id="root" className="main">
        {beers.length === 0 ? (
          <div className="noBeer">
            <h3>Sorry! We dont have this type of beer</h3>
            <button onClick={() => loadBeers()} className="goBackBtn">
              Go back Home
            </button>
          </div>
        ) : (
          beers.map((beer) => <BeerComponent key={beer.name} {...beer} />)
        )}
      </div>
    </>
  );
}

export default App;
