import React, { useState } from "react";
import SearchInterface from "../components/SearchInterface";
import ResultsDisplay from "../components/ResultsDisplay";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Background from "../components/Background";

function Search() {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <div>
      <Background />
      <Navbar />
      <h1 className="text-3xl font-bold text-purple-700 mb-8 text-center font-Bradley underline underline-offset-8 mt-8">
        Search Machine Manuals
      </h1>
      <SearchInterface setSearchResults={setSearchResults} />
      <ResultsDisplay className="mb-8" results={searchResults} />
      <Footer />
    </div>
  );
}

export default Search;
