import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Background from "../components/Background.jsx";
import { useAuth0 } from "@auth0/auth0-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Documents() {
  const [documents, setDocuments] = useState([]);

  // useEffect(() => {
  //   fetchDocuments();
  // }, []);

  const { user, isAuthenticated } = useAuth0();

  useEffect(() => {
    if (isAuthenticated && user) {
      fetchDocuments();
    }
  }, [isAuthenticated, user]);

  // const fetchDocuments = async () => {
  //   try {
  //     const response = await axios.get("http://127.0.0.1:5000/documents");
  //     setDocuments(response.data);
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error("Error fetching documents:", error);
  //   }
  // };
  const fetchDocuments = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:5000/documents?user_id=${user.sub}`
      );
      setDocuments(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.error("Error fetching documents:", error);
    }
  };

  const handleDownload = async (documentId, fileName) => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:5000/downloadDocument?document_id=${documentId}`,
        {
          responseType: "blob",
        }
      );

      const contentType = response.headers["content-type"];
      if (contentType === "application/json") {
        // If the response is JSON, it's likely an error message
        const reader = new FileReader();
        reader.onload = function () {
          const errorMessage = JSON.parse(reader.result);
          toast.error(errorMessage.message || "Failed to download document");
        };
        reader.readAsText(response.data);
      } else {
        // If it's not JSON, proceed with the download
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `${fileName.split(".")[0]}.txt`);
        document.body.appendChild(link);
        link.click();
        link.remove();
        window.URL.revokeObjectURL(url);
        toast.success("Document downloaded successfully");
      }
    } catch (error) {
      console.error("Error downloading document:", error);
      toast.error("Failed to download document");
    }
  };

  return (
    <div>
      <Background />
      <Navbar />
      <h1 className="text-3xl font-bold text-purple-700 font-Bradley underline underline-offset-8 text-center my-8">
        Uploaded Documents
      </h1>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        {documents.length === 0 ? (
          <p className="text-gray-700">No documents uploaded yet.</p>
        ) : (
          <div>
            <ul className="divide-y divide-gray-200">
              {documents.map((doc, index) => (
                <li
                  key={doc._id}
                  className="py-4 flex justify-between items-center"
                >
                  <div>
                    <h1 className="inline-block pr-2.5">{index + 1}.</h1>
                    <h3 className="text-lg font-semibold text-gray-900 inline-block">
                      {doc.file_name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      Uploaded: {new Date(doc.upload_date).toLocaleDateString()}{" "}
                      | File-Type: {doc.file_type}
                    </p>
                  </div>
                  <button
                    onClick={() => handleDownload(doc._id, doc.file_name)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Download File
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Documents;
