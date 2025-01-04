import React, { useState } from "react";
import { Link } from "react-router-dom";
import Background from "./components/Background.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <Background className="fixed" />
      <Navbar />
      <div className="text-center">
        <h1 className="text-4xl font-bold font-Bradley text-black mb-2 mt-8">
          Welcome to DocFinder
        </h1>
        <p className="text-xl text-black mb-8">
          Your one-stop solution for managing and searching machine manuals
        </p>
        <div className="bg-opacity-90 rounded-lg p-8 mb-8 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-purple-700 mb-4">
            Revolutionize Your Manual Management
          </h2>
          <p className="text-gray-700 mb-4">
            DocFinder leverages cutting-edge OCR technology and advanced search
            algorithms to transform how you interact with machine manuals. Say
            goodbye to endless flipping through pages and hello to instant,
            accurate information retrieval.
          </p>
          <ul className="text-center text-gray-700 mb-6 space-y-2">
            <li className="flex items-center">
              <svg
                className="w-6 h-6 mr-2 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              Effortlessly upload and process scanned machine manuals
            </li>
            <li className="flex items-center">
              <svg
                className="w-6 h-6 mr-2 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              Instantly search through thousands of pages with pinpoint accuracy
            </li>
            <li className="flex items-center">
              <svg
                className="w-6 h-6 mr-2 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              Manage your document library with ease
            </li>
            <li className="flex items-center">
              <svg
                className="w-6 h-6 mr-2 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              Access your manuals anytime, anywhere
            </li>
          </ul>
        </div>
        <div className="space-x-4">
          <Link
            to="/upload"
            className="bg-white text-purple-500 font-bold py-2 px-4 rounded hover:bg-gray-100 transition duration-300"
          >
            Upload Manual
          </Link>
          <Link
            to="/search"
            className="bg-purple-500 text-white font-bold py-2 px-4 rounded hover:bg-purple-600 transition duration-300"
          >
            Search Manuals
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto my-12">
          <Link>
            <div className="bg-white bg-opacity-90 rounded-lg p-6 shadow-lg hover:bg-cyan-200">
              <h3 className="text-xl font-bold text-purple-700 mb-2">
                Time-Saving
              </h3>
              <p className="text-gray-700">
                Find the information you need in seconds, not hours. Our
                advanced search functionality gets you to the right page, right
                away.
              </p>
            </div>
          </Link>
          <Link>
            <div className="bg-white bg-opacity-90 rounded-lg p-6 shadow-lg hover:bg-cyan-200">
              <h3 className="text-xl font-bold text-purple-700 mb-2">
                Error Reduction
              </h3>
              <p className="text-gray-700">
                Minimize mistakes by ensuring you always have access to the most
                up-to-date manual information, accurately extracted and indexed.
              </p>
            </div>
          </Link>
          <Link>
            <div className="bg-white bg-opacity-90 rounded-lg p-6 shadow-lg hover:bg-cyan-200">
              <h3 className="text-xl font-bold text-purple-700 mb-2">
                Cost-Effective
              </h3>
              <p className="text-gray-700">
                Reduce downtime and increase productivity by quickly resolving
                issues with instant access to crucial machine information.
              </p>
            </div>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
