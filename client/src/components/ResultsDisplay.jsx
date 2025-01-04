// import React from "react";

// function ResultsDisplay({ results }) {
//   return (
//     <div className="bg-indigo-200 shadow-md rounded px-8 pt-6 pb-8 mb-4 mx-12">
//       <h2 className="text-2xl font-bold mb-4">Search Results</h2>
//       {results.length === 0 ? (
//         <p className="text-gray-700">No results found.</p>
//       ) : (
//         <ul className="divide-y divide-gray-200">
//           {results.map((result, index) => (
//             <li key={index} className="py-4">
//               <h3 className="text-lg font-semibold text-gray-900">
//                 {result.filename}
//               </h3>
//               <p className="mt-1 text-gray-600">
//                 {result.content.substring(0, 200)}...
//               </p>
//               <div className="mt-2 text-sm text-gray-500">
//                 <span>
//                   Uploaded: {new Date(result.uploadDate).toLocaleDateString()}
//                 </span>
//                 <span className="mx-2">|</span>
//                 <span>Pages: {result.pageCount}</span>
//                 <span className="mx-2">|</span>
//                 <span>
//                   Size: {(result.fileSize / 1024 / 1024).toFixed(2)} MB
//                 </span>
//               </div>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default ResultsDisplay;

import React from "react";

function ResultsDisplay({ results }) {
  return (
    <div className="bg-indigo-200 shadow-md rounded px-8 pt-6 pb-8 mb-4 mx-12">
      <h2 className="text-2xl font-bold mb-4">Search Results</h2>
      {results.length === 0 ? (
        <p className="text-gray-700">No results found.</p>
      ) : (
        <ul className="divide-y divide-gray-100">
          {results.map((result, index) => (
            <li key={index} className="py-4">
              <h3 className="text-lg font-semibold text-gray-900">
                FileName : {result.file_name || "Unknown Filename"}
              </h3>
              <p className="mt-1 text-gray-600">
                {result.content_preview?.substring(0, 200) ||
                  "No content available..."}
              </p>
              <div className="mt-2 text-sm text-gray-500">
                <span>Match Score: {result.match_score}</span>
                {/* <span className="mx-2">|</span>
                <span>Pages: {result.pageCount || "N/A"}</span>
                <span className="mx-2">|</span>
                <span>
                  Size:{" "}
                  {result.fileSize
                    ? `${(result.fileSize / 1024 / 1024).toFixed(2)} MB`
                    : "Unknown"}
                </span> */}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ResultsDisplay;
