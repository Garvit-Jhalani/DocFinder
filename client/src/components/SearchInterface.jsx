// import React, { useState } from "react";
// import axios from "axios";

// function SearchInterface({ setSearchResults }) {
//   const [query, setQuery] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");

//   const handleSearch = async () => {
//     if (!searchQuery.trim()) {
//       setSearchResults([]);
//       return;
//     }

//     try {
//       const response = await axios.get(
//         `http://127.0.0.1:5000/search?query=${encodeURIComponent(searchQuery)}`
//       );
//       setSearchResults(response.data.data);
//     } catch (error) {
//       console.error("Error searching documents:", error);
//       toast.error("Failed to search documents");
//     }
//   };

//   return (
//     <div className="bg-indigo-200 shadow-md rounded px-8 pt-6 pb-8 mb-4 mx-12">
//       <h2 className="text-2xl font-bold mb-4">Search Documents</h2>
//       <form onSubmit={handleSearch()}>
//         <div className="mb-4">
//           <input
//             type="text"
//             // value={searchQuery}
//             onChange={(e) => setQuery(e.target.value)}
//             placeholder="Enter search query"
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           />
//         </div>
//         <div className="flex items-center justify-between">
//           <button
//             // onClick={handleSearch()}
//             type="submit"
//             className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             disabled={isLoading}
//           >
//             {isLoading ? "Searching..." : "Search"}
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default SearchInterface;

import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SearchInterface({ setSearchResults }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async () => {
    if (!searchQuery.trim()) {
      toast.warning("Please enter a search query.");
      return;
    }

    setIsLoading(true); // Set loading state
    try {
      const response = await axios.get(
        `http://127.0.0.1:5000/search?query=${encodeURIComponent(searchQuery)}`
      );
      setSearchResults(response.data.data);
      toast.success("Search completed successfully!");
    } catch (error) {
      console.error("Error searching documents:", error);
      toast.error("Failed to search documents.");
    } finally {
      setIsLoading(false); // Reset loading state
    }
  };

  return (
    <div className="bg-indigo-200 shadow-md rounded px-8 pt-6 pb-8 mb-4 mx-12">
      <h2 className="text-2xl font-bold mb-4">Search Documents</h2>
      <div className="mb-4">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Enter search query"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          onClick={handleSearch}
          className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          disabled={isLoading}
        >
          {isLoading ? "Searching..." : "Search"}
        </button>
      </div>
    </div>
  );
}

export default SearchInterface;
